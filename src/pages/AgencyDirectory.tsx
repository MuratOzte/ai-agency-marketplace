import React from 'react';
import { AgencyCard } from '../components/agencies/AgencyCard';
import { AgencyFilters } from '../components/agencies/AgencyFilters';
import { AgencySort } from '../components/agencies/AgencySort';
import { AgencyPagination } from '../components/agencies/AgencyPagination';

// Mock data for demonstration
const mockAgencies = [
  {
    id: '1',
    name: 'AI Solutions Pro',
    rating: 4.8,
    location: 'San Francisco, USA',
    services: ['AI Development', 'Machine Learning', 'Data Analytics', 'Computer Vision'],
    industries: ['Healthcare', 'Finance', 'Technology'],
    size: '11-50 employees',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800',
  },
  {
    id: '2',
    name: 'Neural Dynamics',
    rating: 4.6,
    location: 'London, UK',
    services: ['Natural Language Processing', 'AI Consulting', 'Machine Learning'],
    industries: ['Retail', 'Manufacturing', 'Education'],
    size: '1-10 employees',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    name: 'DataMind Technologies',
    rating: 4.9,
    location: 'Berlin, Germany',
    services: ['Data Analytics', 'AI Development', 'Robotics'],
    industries: ['Automotive', 'Technology', 'Healthcare'],
    size: '51-200 employees',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800',
  },
  // Add more mock agencies as needed
];

export function AgencyDirectory() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5; // Mock total pages

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
    // Implement filter logic
  };

  const handleSortChange = (sort: string) => {
    console.log('Sort changed:', sort);
    // Implement sort logic
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Implement pagination logic
  };

  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Find Your Perfect AI Agency
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Browse through our curated list of top AI agencies and find the perfect match for your project.
          </p>
        </div>

        {/* Filters */}
        <AgencyFilters onFilterChange={handleFilterChange} />

        {/* Sort */}
        <AgencySort onSortChange={handleSortChange} />

        {/* Agency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAgencies.map((agency) => (
            <AgencyCard key={agency.id} {...agency} />
          ))}
        </div>

        {/* Pagination */}
        <AgencyPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}