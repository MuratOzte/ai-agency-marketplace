import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const locations = [
  'United States',
  'United Kingdom',
  'Europe',
  'Asia',
  'Remote',
];

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
];

const industries = [
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Technology',
  'Education',
];

const skills = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Deep Learning',
  'Data Science',
];

const salaryRanges = [
  { label: '$50k - $75k', value: '50000-75000' },
  { label: '$75k - $100k', value: '75000-100000' },
  { label: '$100k - $150k', value: '100000-150000' },
  { label: '$150k+', value: '150000-plus' },
];

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export function JobFilters({ onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for AI jobs..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-dark/40 w-5 h-5" />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        className="md:hidden w-full flex items-center justify-between px-4 py-2 bg-brand-dark/5 rounded-lg mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-brand-dark">Filters</span>
        <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filters Grid */}
      <div className={`grid gap-6 ${isOpen ? 'block' : 'hidden md:grid'} md:grid-cols-2 lg:grid-cols-4`}>
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Location
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Employment Type
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">All Types</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Industry
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Salary Range
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">Any Salary</option>
            {salaryRanges.map((range) => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Filter */}
      <div className={`mt-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <label className="block text-sm font-medium text-brand-dark mb-2">
          Required Skills
        </label>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <label key={skill} className="inline-flex items-center">
              <input
                type="checkbox"
                value={skill}
                className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
              />
              <span className="ml-2 text-sm text-brand-dark/70">{skill}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}