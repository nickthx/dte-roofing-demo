import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ReviewUpdatePayload {
  total_reviews: number;
  average_rating: number;
  five_star_count?: number;
  four_star_count?: number;
  three_star_count?: number;
  two_star_count?: number;
  one_star_count?: number;
  source?: string;
  api_key?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("review_data")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, data }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "POST") {
      const payload: ReviewUpdatePayload = await req.json();

      if (!payload.total_reviews || payload.average_rating === undefined) {
        return new Response(
          JSON.stringify({ error: "Missing required fields: total_reviews, average_rating" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const reviewData = {
        total_reviews: payload.total_reviews,
        average_rating: payload.average_rating,
        five_star_count: payload.five_star_count || payload.total_reviews,
        four_star_count: payload.four_star_count || 0,
        three_star_count: payload.three_star_count || 0,
        two_star_count: payload.two_star_count || 0,
        one_star_count: payload.one_star_count || 0,
        source: payload.source || "webhook",
        updated_at: new Date().toISOString(),
      };

      const { data: existing } = await supabase
        .from("review_data")
        .select("id")
        .limit(1)
        .maybeSingle();

      let result;
      if (existing) {
        result = await supabase
          .from("review_data")
          .update(reviewData)
          .eq("id", existing.id)
          .select();
      } else {
        result = await supabase
          .from("review_data")
          .insert(reviewData)
          .select();
      }

      if (result.error) {
        return new Response(JSON.stringify({ error: result.error.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Review data updated successfully",
          data: result.data 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});