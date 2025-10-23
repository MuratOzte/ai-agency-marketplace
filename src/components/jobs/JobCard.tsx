import React from 'react';
import { MapPin, Clock, Building2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  description: string;
  skills: string[];
  postedDate: string;
  applicationDeadline: string;
}

export function JobCard({
  id,
  title,
  companyName,
  companyLogo,
  location,
  employmentType,
  salaryRange,
  description,
  skills,
  postedDate,
  applicationDeadline,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <div className="flex items-start gap-4">
        <img
          src={companyLogo}
          alt={companyName}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <Link to={`/jobs/${id}`} className="block group">
            <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-yellow transition-colors duration-200">
              {title}
            </h3>
            <p className="text-brand-dark/70 font-medium">{companyName}</p>
          </Link>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-brand-dark/70">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>{employmentType}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{salaryRange}</span>
            </div>
          </div>

          <p className="mt-4 text-brand-dark/70 line-clamp-2">{description}</p>

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
            <div className="flex items-center gap-1 text-sm text-brand-dark/70">
              <Clock className="w-4 h-4" />
              <span>Posted {postedDate}</span>
            </div>
            <Link
              to={`/jobs/${id}/apply`}
              className="btn-primary py-2 px-6 text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}