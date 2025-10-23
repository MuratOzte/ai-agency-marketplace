/*
  # People Listing Schema

  1. New Tables
    - `people`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `full_name` (text)
      - `role` (text)
      - `type` (text)
      - `company_name` (text)
      - `skills` (text[])
      - `experience_level` (text)
      - `availability` (text)
      - `location` (text)
      - `rating` (decimal)
      - `reviews_count` (integer)
      - `profile_picture_url` (text)
      - `hourly_rate` (decimal)
      - `linkedin_url` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `people_reviews`
      - `id` (uuid, primary key)
      - `person_id` (uuid, references people)
      - `reviewer_id` (uuid, references auth.users)
      - `rating` (decimal)
      - `review_text` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create people table
CREATE TABLE people (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  full_name text NOT NULL,
  role text NOT NULL,
  type text NOT NULL CHECK (type IN ('freelancer', 'full-time')),
  company_name text,
  skills text[] NOT NULL DEFAULT '{}',
  experience_level text NOT NULL CHECK (experience_level IN ('entry', 'mid', 'senior', 'expert')),
  availability text NOT NULL CHECK (availability IN ('available', 'not-available', 'on-project')),
  location text NOT NULL,
  rating decimal(3,2) DEFAULT 0.00,
  reviews_count integer DEFAULT 0,
  profile_picture_url text,
  hourly_rate decimal(10,2),
  linkedin_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create people_reviews table
CREATE TABLE people_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  person_id uuid REFERENCES people(id) ON DELETE CASCADE,
  reviewer_id uuid REFERENCES auth.users(id),
  rating decimal(3,2) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(person_id, reviewer_id)
);

-- Enable Row Level Security
ALTER TABLE people ENABLE ROW LEVEL SECURITY;
ALTER TABLE people_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for people table
CREATE POLICY "Public can view people profiles"
  ON people FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON people FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for people_reviews table
CREATE POLICY "Public can view reviews"
  ON people_reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON people_reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = reviewer_id);

-- Create indexes
CREATE INDEX idx_people_skills ON people USING gin(skills);
CREATE INDEX idx_people_experience_level ON people(experience_level);
CREATE INDEX idx_people_availability ON people(availability);
CREATE INDEX idx_people_rating ON people(rating);
CREATE INDEX idx_people_reviews_person ON people_reviews(person_id);

-- Create updated_at trigger for people table
CREATE TRIGGER update_people_updated_at
    BEFORE UPDATE ON people
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();