import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const services = [
  'AI Development',
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Robotics',
  'Data Analytics',
  'AI Consulting',
];

const industries = [
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Technology',
  'Education',
  'Other',
];

const locations = [
  'United States',
  'United Kingdom',
  'Europe',
  'Asia',
  'Remote',
];

const sizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201+ employees',
];

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export function AgencyFilters({ onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for AI agencies..."
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
        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Services
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">All Services</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Industries */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Industries
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

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

        {/* Agency Size */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Agency Size
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">Any Size</option>
            {sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className={`mt-6 grid gap-6 ${isOpen ? 'block' : 'hidden md:grid'} md:grid-cols-2 lg:grid-cols-4`}>
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Minimum Rating
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Experience
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="">Any Experience</option>
            <option value="7">7+ years</option>
            <option value="4">4-6 years</option>
            <option value="1">1-3 years</option>
          </select>
        </div>

        {/* Budget Range */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Budget Range
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}