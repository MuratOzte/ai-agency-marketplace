import React from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  type: 'conference' | 'webinar' | 'workshop' | 'hackathon' | 'meetup' | 'training' | 'networking';
  description: string;
  location: string;
  date: string;
  duration: string;
  organizer: string;
  organizerLogo: string;
  ticketPrice: number | 'Free';
  tags: string[];
  speakers: Array<{
    name: string;
    title: string;
    image: string;
  }>;
}

export function EventCard({
  id,
  title,
  type,
  description,
  location,
  date,
  duration,
  organizer,
  organizerLogo,
  ticketPrice,
  tags,
  speakers,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48">
        <img
          src={organizerLogo}
          alt={organizer}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-brand-light text-white px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <Link to={`/events/${id}`} className="block group-hover:text-brand-yellow transition-colors duration-200">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-brand-dark/70 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-brand-dark/70">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 text-brand-dark/70">
            <Users className="w-4 h-4" />
            <span>{speakers.length} Speakers</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-brand-light/10 text-brand-light rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-xs">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {speakers.slice(0, 3).map((speaker, index) => (
              <img
                key={speaker.name}
                src={speaker.image}
                alt={speaker.name}
                className={`w-8 h-8 rounded-full border-2 border-white ${
                  index > 0 ? '-ml-4' : ''
                }`}
              />
            ))}
            {speakers.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-brand-dark/5 -ml-4 flex items-center justify-center text-xs font-medium text-brand-dark/70">
                +{speakers.length - 3}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-brand-dark">
              {ticketPrice === 'Free' ? 'Free' : `$${ticketPrice}`}
            </span>
            <Link
              to={`/events/${id}`}
              className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200"
            >
              <span>Register</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}