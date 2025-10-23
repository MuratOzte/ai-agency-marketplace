import React from 'react';
import { JobCard } from '../../components/jobs/JobCard';
import { JobFilters } from '../../components/jobs/JobFilters';
import { AgencyPagination } from '../../components/agencies/AgencyPagination';

// Mock data for demonstration
const mockJobs = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    companyName: 'TechCorp Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    location: 'San Francisco, USA',
    employmentType: 'Full-time',
    salaryRange: '$120k - $180k',
    description: 'We are seeking an experienced AI Engineer to lead the development of cutting-edge machine learning solutions for our enterprise clients.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
    postedDate: '2 days ago',
    applicationDeadline: '2025-03-15',
  },
  {
    id: '2',
    title: 'Machine Learning Researcher',
    companyName: 'AI Innovations Lab',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    location: 'Remote',
    employmentType: 'Full-time',
    salaryRange: '$100k - $150k',
    description: 'Join our research team to advance the state-of-the-art in machine learning and develop novel AI solutions.',
    skills: ['PyTorch', 'Research', 'NLP', 'Computer Vision', 'Publications'],
    postedDate: '1 week ago',
    applicationDeadline: '2025-03-30',
  },
  {
    id: '3',
    title: 'AI Product Manager',
    companyName: 'Future Tech Inc.',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    location: 'New York, USA',
    employmentType: 'Full-time',
    salaryRange: '$130k - $170k',
    description: 'Lead the development and strategy of AI-powered products that solve real-world problems.',
    skills: ['Product Management', 'AI Strategy', 'Agile', 'Technical Background'],
    postedDate: '3 days ago',
    applicationDeadline: '2025-03-20',
  },
];

export function JobDirectory() {
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
            AI Job Opportunities
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Find your next role in artificial intelligence, machine learning, and data science.
          </p>
        </div>

        {/* Filters */}
        <JobFilters onFilterChange={handleFilterChange} />

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {mockJobs.map((job) => (
            <JobCard key={job.id} {...job} />
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