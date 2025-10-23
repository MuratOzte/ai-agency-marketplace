import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SortProps {
  onSortChange: (sort: string) => void;
}

export function AgencySort({ onSortChange }: SortProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <span className="text-brand-dark/70">Sort by:</span>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        >
          <option value="rating">Rating (High to Low)</option>
          <option value="experience">Experience (High to Low)</option>
          <option value="budget">Budget (Low to High)</option>
          <option value="size">Agency Size</option>
          <option value="location">Location</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-brand-dark/70">Show:</span>
        <select className="rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
          <option value="12">12 per page</option>
          <option value="24">24 per page</option>
          <option value="36">36 per page</option>
        </select>
      </div>
    </div>
  );
}