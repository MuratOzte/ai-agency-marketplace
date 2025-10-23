import React from 'react';
import { EventCard } from '../components/events/EventCard';
import { EventFilters } from '../components/events/EventFilters';
import { AgencyPagination } from '../components/agencies/AgencyPagination';

// Mock data for demonstration
const mockEvents = [
  {
    id: '1',
    title: 'AI Summit 2025',
    type: 'conference',
    description: 'Join industry leaders and experts for a three-day summit exploring the future of AI and its impact across industries.',
    location: 'New York, USA',
    date: '2025-04-15',
    duration: '3 days',
    organizer: 'Tech Conferences Inc.',
    organizerLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    ticketPrice: 999,
    tags: ['AI', 'Machine Learning', 'Innovation', 'Technology'],
    speakers: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'AI Research Director',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
      },
      {
        name: 'Michael Chen',
        title: 'Chief AI Officer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
      },
      {
        name: 'Emily Brown',
        title: 'ML Engineer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
      },
    ],
  },
  {
    id: '2',
    title: 'Machine Learning Workshop Series',
    type: 'workshop',
    description: 'Hands-on workshop series covering advanced machine learning techniques and practical implementations.',
    location: 'Virtual',
    date: '2025-03-20',
    duration: '4 weeks',
    organizer: 'AI Education Hub',
    organizerLogo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300',
    ticketPrice: 499,
    tags: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
    speakers: [
      {
        name: 'John Smith',
        title: 'Senior ML Engineer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150',
      },
      {
        name: 'Alice Wong',
        title: 'Data Scientist',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
      },
    ],
  },
  {
    id: '3',
    title: 'AI in Healthcare Webinar',
    type: 'webinar',
    description: 'Discover how artificial intelligence is revolutionizing healthcare delivery and patient care.',
    location: 'Virtual',
    date: '2025-03-10',
    duration: '2 hours',
    organizer: 'HealthTech Alliance',
    organizerLogo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300',
    ticketPrice: 'Free',
    tags: ['Healthcare', 'AI', 'Innovation', 'MedTech'],
    speakers: [
      {
        name: 'Dr. James Wilson',
        title: 'Medical AI Researcher',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
      },
    ],
  },
];

export function Events() {
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
            AI Events & Conferences
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Discover upcoming AI conferences, workshops, webinars, and networking events.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000"
              alt="Featured Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="px-2 py-1 bg-brand-light rounded-full">Featured</span>
                <span>Conference</span>
                <span>•</span>
                <span>April 15-17, 2025</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Summit 2025: The Future of Intelligence</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                Join the world's leading AI experts and innovators for three days of insights, networking, and hands-on workshops.
              </p>
              <button className="btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <EventFilters onFilterChange={handleFilterChange} />

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockEvents.map((event) => (
            <EventCard key={event.id} {...event} />
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
              Subscribe to our newsletter to receive updates about upcoming AI events and conferences.
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