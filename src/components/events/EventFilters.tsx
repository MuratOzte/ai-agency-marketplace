import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const eventTypes = [
  'All Events',
  'Conference',
  'Webinar',
  'Workshop',
  'Hackathon',
  'Meetup',
  'Training',
  'Networking',
];

const locations = [
  'All Locations',
  'Virtual',
  'United States',
  'Europe',
  'Asia',
  'Other',
];

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export function EventFilters({ onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search events..."
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
      <div className={`grid gap-6 ${isOpen ? 'block' : 'hidden md:grid'} md:grid-cols-4`}>
        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Event Type
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            {eventTypes.map((type) => (
              <option key={type} value={type.toLowerCase()}>{type}</option>
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
              <option key={location} value={location.toLowerCase()}>{location}</option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Date Range
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="next-month">Next Month</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Price
          </label>
          <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
            <option value="all">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>
    </div>
  );
}