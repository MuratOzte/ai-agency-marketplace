import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const roles = [
  'All Roles',
  'AI Developer',
  'Data Scientist',
  'Machine Learning Engineer',
  'Research Scientist',
  'AI Consultant',
];

const experienceLevels = [
  'All Levels',
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Expert Level',
];

const skills = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'Data Science',
];

const availability = [
  'All',
  'Available',
  'Not Available',
  'On Project',
];

const locations = [
  'All Locations',
  'Remote',
  'United States',
  'Europe',
  'Asia',
  'Other',
];

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export function PeopleFilters({ onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search people..."
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
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Role
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            {roles.map((role) => (
              <option key={role} value={role.toLowerCase().replace(/\s+/g, '-')}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Experience Level
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            {experienceLevels.map((level) => (
              <option key={level} value={level.toLowerCase().replace(/\s+/g, '-')}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Availability
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            {availability.map((status) => (
              <option key={status} value={status.toLowerCase().replace(/\s+/g, '-')}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Location
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            {locations.map((location) => (
              <option key={location} value={location.toLowerCase().replace(/\s+/g, '-')}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Filter */}
      <div className={`mt-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <label className="block text-sm font-medium text-brand-dark mb-2">
          Skills
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

      {/* Rate Range */}
      <div className={`mt-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <label className="block text-sm font-medium text-brand-dark mb-2">
          Hourly Rate Range
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          <span className="text-brand-dark/70">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
        </div>
      </div>
    </div>
  );
}