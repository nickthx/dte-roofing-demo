/*
  # Create Review Data Table

  1. New Tables
    - `review_data`
      - `id` (uuid, primary key) - Unique identifier
      - `total_reviews` (integer) - Total number of reviews
      - `average_rating` (decimal) - Average rating value
      - `five_star_count` (integer) - Count of 5-star reviews
      - `four_star_count` (integer) - Count of 4-star reviews
      - `three_star_count` (integer) - Count of 3-star reviews
      - `two_star_count` (integer) - Count of 2-star reviews
      - `one_star_count` (integer) - Count of 1-star reviews
      - `source` (text) - Source of the review data (e.g., 'google', 'webhook')
      - `created_at` (timestamptz) - When the record was created
      - `updated_at` (timestamptz) - When the record was last updated

  2. Security
    - Enable RLS on `review_data` table
    - Add policy for anonymous users to read data (public display)
    - Add policy for service role to insert/update (webhook)

  3. Notes
    - This table stores the current review statistics
    - Updated via webhook when new reviews are received
*/

CREATE TABLE IF NOT EXISTS review_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  total_reviews integer NOT NULL DEFAULT 0,
  average_rating decimal(2,1) NOT NULL DEFAULT 5.0,
  five_star_count integer NOT NULL DEFAULT 0,
  four_star_count integer NOT NULL DEFAULT 0,
  three_star_count integer NOT NULL DEFAULT 0,
  two_star_count integer NOT NULL DEFAULT 0,
  one_star_count integer NOT NULL DEFAULT 0,
  source text NOT NULL DEFAULT 'manual',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE review_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read review data"
  ON review_data
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can insert review data"
  ON review_data
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update review data"
  ON review_data
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

INSERT INTO review_data (
  total_reviews,
  average_rating,
  five_star_count,
  four_star_count,
  three_star_count,
  two_star_count,
  one_star_count,
  source
) VALUES (
  89,
  5.0,
  89,
  0,
  0,
  0,
  0,
  'initial_seed'
);