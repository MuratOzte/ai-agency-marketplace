import React from 'react';
import { ResourceCard } from '../components/resources/ResourceCard';
import { ResourceFilters } from '../components/resources/ResourceFilters';
import { AgencyPagination } from '../components/agencies/AgencyPagination';

// Mock data for demonstration
const mockResources = [
  {
    id: '1',
    type: 'article',
    title: 'Getting Started with AI Implementation',
    description: 'Learn the fundamentals of implementing AI solutions in your business with this comprehensive guide.',
    author: 'John Smith',
    date: '2025-02-15',
    tags: ['AI', 'Business', 'Implementation', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    format: 'Article',
  },
  {
    id: '2',
    type: 'webinar',
    title: 'AI in Healthcare: 2025 Trends',
    description: 'Expert insights on the future of AI in healthcare and how it is transforming patient care.',
    author: 'Dr. Sarah Johnson',
    date: '2025-02-10',
    tags: ['Healthcare', 'AI', 'Trends', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    duration: '1 hour',
    format: 'Video',
  },
  {
    id: '3',
    type: 'white_paper',
    title: 'The Future of Machine Learning in Finance',
    description: 'A detailed analysis of how machine learning is revolutionizing the financial sector.',
    author: 'Michael Chen',
    date: '2025-02-01',
    tags: ['Machine Learning', 'Finance', 'Technology', 'Future'],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800',
    format: 'PDF',
  },
  {
    id: '4',
    type: 'case_study',
    title: 'AI Success Story: E-commerce Revolution',
    description: 'How an e-commerce platform increased sales by 150% using AI-powered recommendations.',
    author: 'Emily Brown',
    date: '2025-01-28',
    tags: ['E-commerce', 'AI', 'Success Story', 'ROI'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
    format: 'PDF',
  },
] as const;

export function Resources() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5; // Mock total pages

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
    // Implement filter logic
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
            AI Resources & Insights
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Explore our collection of guides, case studies, and industry insights to help you make informed decisions about AI implementation.
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200"
              alt="Featured Resource"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="px-2 py-1 bg-brand-light rounded-full">Featured</span>
                <span>Webinar</span>
                <span>•</span>
                <span>March 1, 2025</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">The Future of AI: Trends and Predictions for 2025</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                Join industry experts as they discuss emerging AI trends and make predictions for the coming year.
              </p>
              <button className="btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <ResourceFilters onFilterChange={handleFilterChange} />

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>

        {/* Pagination */}
        <AgencyPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">Stay Updated</h2>
            <p className="text-brand-dark/70 mb-6">
              Subscribe to our newsletter to receive the latest AI insights and resources directly in your inbox.
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