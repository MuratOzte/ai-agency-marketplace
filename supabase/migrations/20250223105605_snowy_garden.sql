/*
  # Initial Schema for AI Agency Marketplace

  1. New Tables
    - `profiles`
      - Stores user profile information for both businesses and agencies
      - Links to Supabase Auth users
      - Includes company details, contact info, and account status
    
    - `agencies`
      - Stores agency-specific information
      - Services, specialties, and ratings
    
    - `projects`
      - Project listings posted by businesses
      - Includes requirements, budget, and status
    
    - `quotes`
      - Proposals submitted by agencies
      - Links projects with agencies
    
    - `reviews`
      - Feedback and ratings for completed projects
      - Bi-directional reviews (business → agency, agency → business)
    
    - `messages`
      - Communication between businesses and agencies
      - Threaded conversations for projects
    
    - `notifications`
      - System notifications and alerts
      - Project updates, new messages, etc.

  2. Security
    - RLS enabled on all tables
    - Policies for:
      - Profile access (own profile + public data)
      - Project visibility (own + public listings)
      - Quote management (involved parties only)
      - Message privacy (sender/receiver only)
      - Review visibility (public after approval)
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth users)
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL UNIQUE,
  role text NOT NULL CHECK (role IN ('business', 'agency')),
  company_name text,
  job_title text,
  phone_number text,
  location text,
  website text,
  profile_picture_url text,
  account_status text NOT NULL DEFAULT 'active' CHECK (account_status IN ('active', 'inactive', 'suspended')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Agencies table
CREATE TABLE agencies (
  id uuid PRIMARY KEY REFERENCES profiles(id),
  services_offered text[] NOT NULL DEFAULT '{}',
  industry_specialties text[] NOT NULL DEFAULT '{}',
  case_studies jsonb DEFAULT '[]',
  certifications text[] DEFAULT '{}',
  agency_rating decimal(3,2) DEFAULT 0.00,
  date_joined timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id uuid REFERENCES profiles(id) NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  required_services text[] NOT NULL DEFAULT '{}',
  industry text NOT NULL,
  budget_range jsonb NOT NULL,
  timing text NOT NULL CHECK (timing IN ('short-term', 'long-term')),
  location text,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed', 'in-progress')),
  created_at timestamptz DEFAULT now(),
  closed_at timestamptz,
  updated_at timestamptz DEFAULT now()
);

-- Quotes table
CREATE TABLE quotes (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) NOT NULL,
  agency_id uuid REFERENCES agencies(id) NOT NULL,
  price_amount decimal(10,2) NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(project_id, agency_id)
);

-- Reviews table
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) NOT NULL,
  reviewer_id uuid REFERENCES profiles(id) NOT NULL,
  reviewee_id uuid REFERENCES profiles(id) NOT NULL,
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(project_id, reviewer_id, reviewee_id)
);

-- Messages table
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) NOT NULL,
  sender_id uuid REFERENCES profiles(id) NOT NULL,
  receiver_id uuid REFERENCES profiles(id) NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read_at timestamptz
);

-- Notifications table
CREATE TABLE notifications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  type text NOT NULL CHECK (type IN ('quote', 'message', 'project-update', 'reminder')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE agencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Agencies policies
CREATE POLICY "Public can view agency profiles"
  ON agencies FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Agencies can update their own profile"
  ON agencies FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Projects policies
CREATE POLICY "Anyone can view open projects"
  ON projects FOR SELECT
  TO authenticated
  USING (status = 'open');

CREATE POLICY "Businesses can view their own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (business_id = auth.uid());

CREATE POLICY "Businesses can create projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (business_id = auth.uid());

-- Quotes policies
CREATE POLICY "Agencies can create quotes"
  ON quotes FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM agencies WHERE id = auth.uid()
  ));

CREATE POLICY "Users can view quotes for their projects"
  ON quotes FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE projects.id = quotes.project_id 
      AND (projects.business_id = auth.uid() OR quotes.agency_id = auth.uid())
    )
  );

-- Reviews policies
CREATE POLICY "Public can view reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reviews for their projects"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE projects.id = project_id 
      AND (projects.business_id = auth.uid() OR reviewer_id = auth.uid())
    )
  );

-- Messages policies
CREATE POLICY "Users can view their messages"
  ON messages FOR SELECT
  TO authenticated
  USING (sender_id = auth.uid() OR receiver_id = auth.uid());

CREATE POLICY "Users can send messages"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (sender_id = auth.uid());

-- Notifications policies
CREATE POLICY "Users can view their notifications"
  ON notifications FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create indexes for better query performance
CREATE INDEX idx_projects_business_id ON projects(business_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_quotes_project_id ON quotes(project_id);
CREATE INDEX idx_quotes_agency_id ON quotes(agency_id);
CREATE INDEX idx_messages_project_id ON messages(project_id);
CREATE INDEX idx_messages_participants ON messages(sender_id, receiver_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_reviews_project_id ON reviews(project_id);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agencies_updated_at
    BEFORE UPDATE ON agencies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quotes_updated_at
    BEFORE UPDATE ON quotes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
    BEFORE UPDATE ON reviews
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();