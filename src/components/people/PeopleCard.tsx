import React from 'react';
import { Star, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PeopleCardProps {
  id: string;
  fullName: string;
  role: string;
  type: 'freelancer' | 'full-time';
  companyName?: string;
  skills: string[];
  experienceLevel: string;
  availability: 'available' | 'not-available' | 'on-project';
  location: string;
  rating: number;
  reviewsCount: number;
  profilePictureUrl?: string;
  hourlyRate?: number;
  linkedinUrl?: string;
}

export function PeopleCard({
  id,
  fullName,
  role,
  type,
  companyName,
  skills,
  experienceLevel,
  availability,
  location,
  rating,
  reviewsCount,
  profilePictureUrl,
  hourlyRate,
  linkedinUrl,
}: PeopleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
      <div className="flex items-start gap-4">
        <img
          src={profilePictureUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150'}
          alt={fullName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark">
                {fullName}
              </h3>
              <p className="text-brand-dark/70">{role}</p>
              {companyName && (
                <p className="text-sm text-brand-dark/60">{companyName}</p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-brand-yellow fill-current" />
              <span className="font-medium">{rating.toFixed(1)}</span>
              <span className="text-brand-dark/60">({reviewsCount})</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-brand-dark/70">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                availability === 'available'
                  ? 'bg-green-100 text-green-800'
                  : availability === 'on-project'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {availability.replace('-', ' ').charAt(0).toUpperCase() + availability.slice(1)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-brand-light/10 text-brand-light rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            {skills.length > 4 && (
              <span className="px-3 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-sm">
                +{skills.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-dark/10">
            {type === 'freelancer' && hourlyRate && (
              <div className="text-xl font-semibold text-brand-dark">
                ${hourlyRate}/hr
              </div>
            )}
            <div className="flex gap-3">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
              <Link
                to={`/people/${id}`}
                className="btn-primary py-2 px-6"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}