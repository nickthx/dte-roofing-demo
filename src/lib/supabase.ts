import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ujasdbelviyamnwxjgth.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqYXNkYmVsdml5YW1ud3hqZ3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MTk2MTEsImV4cCI6MjA4MDE5NTYxMX0.B64mkONWB1FIHbKA1ZbUycb6K9PjQfyAVZlM8GDe0H8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_html: string;
  tags: string[];
  city: string;
  state: string;
  published_at: string;
  created_at: string;
  status: string;
}