import React from 'react';
import { Star, MapPin, Briefcase, Clock, ExternalLink, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PeopleCard } from '../../components/people/PeopleCard';
import { PeopleFilters } from '../../components/people/PeopleFilters';

// Mock data for demonstration
const mockTalents = [
  {
    id: '1',
    fullName: 'Sarah Johnson',
    role: 'Senior AI Engineer',
    type: 'freelancer' as const,
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
    experienceLevel: 'senior',
    location: 'San Francisco, USA',
    rating: 4.8,
    reviewsCount: 47,
    availability: 'available' as const,
    hourlyRate: 150,
    profilePictureUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
  },
  {
    id: '2',
    fullName: 'Michael Chen',
    role: 'Machine Learning Engineer',
    type: 'freelancer' as const,
    skills: ['PyTorch', 'NLP', 'Data Science', 'Python', 'AWS'],
    experienceLevel: 'mid',
    location: 'Remote',
    rating: 4.6,
    reviewsCount: 32,
    availability: 'available' as const,
    hourlyRate: 120,
    profilePictureUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    linkedinUrl: 'https://linkedin.com/in/michaelchen',
  },
  {
    id: '3',
    fullName: 'Emily Brown',
    role: 'AI Research Scientist',
    type: 'full-time' as const,
    companyName: 'AI Solutions Pro',
    skills: ['Deep Learning', 'Research', 'Python', 'TensorFlow', 'Computer Vision'],
    experienceLevel: 'expert',
    location: 'Boston, USA',
    rating: 4.9,
    reviewsCount: 58,
    availability: 'on-project' as const,
    profilePictureUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    linkedinUrl: 'https://linkedin.com/in/emilybrown',
  },
];

export function TalentPool() {
  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
    // Implement filter logic
  };

  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            AI Talent Pool
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Connect with skilled AI professionals, data scientists, and machine learning experts.
          </p>
        </div>

        {/* Filters */}
        <PeopleFilters onFilterChange={handleFilterChange} />

        {/* People Listings */}
        <div className="space-y-6">
          {mockTalents.map((talent) => (
            <PeopleCard key={talent.id} {...talent} />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">
              Stay Updated
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Subscribe to receive notifications about new talent and opportunities in AI.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}