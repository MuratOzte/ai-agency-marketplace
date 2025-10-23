import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface AgencyCardProps {
  id: string;
  name: string;
  rating: number;
  location: string;
  services: string[];
  industries: string[];
  size: string;
  imageUrl?: string;
}

export function AgencyCard({
  id,
  name,
  rating,
  location,
  services,
  industries,
  size,
  imageUrl,
}: AgencyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={`/agencies/${id}`} className="block group">
        <div className="relative h-48 bg-gray-100">
          <img
            src={imageUrl || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800'}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-brand-dark">
            {size}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link to={`/agencies/${id}`} className="block group">
            <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-light transition-colors duration-200">
              {name}
            </h3>
          </Link>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-brand-yellow fill-current" />
            <span className="ml-1 text-brand-dark">{rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-brand-dark/70 mb-4 flex items-center">
          <span className="inline-block w-4 h-4 rounded-full bg-brand-light mr-2"></span>
          {location}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-brand-dark mb-2">Services</h4>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-3 py-1 bg-brand-light/10 text-brand-light rounded-full text-sm"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="px-3 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-sm">
                +{services.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-brand-dark mb-2">Industries</h4>
          <div className="flex flex-wrap gap-2">
            {industries.slice(0, 2).map((industry) => (
              <span
                key={industry}
                className="px-3 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-sm"
              >
                {industry}
              </span>
            ))}
            {industries.length > 2 && (
              <span className="px-3 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-sm">
                +{industries.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 btn-primary text-sm">
            Request Quote
          </button>
          <Link to={`/agencies/${id}`} className="flex-1 btn-secondary text-sm text-center">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}