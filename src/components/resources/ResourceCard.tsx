import React from 'react';
import { BookOpen, FileText, Video, Calendar, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  id: string;
  type: 'article' | 'white_paper' | 'ebook' | 'webinar' | 'case_study' | 'tutorial' | 'report';
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  duration?: string;
  format: string;
}

const resourceTypeIcons = {
  article: BookOpen,
  white_paper: FileText,
  ebook: BookOpen,
  webinar: Video,
  case_study: FileText,
  tutorial: Video,
  report: FileText,
};

const resourceTypeLabels = {
  article: 'Article',
  white_paper: 'White Paper',
  ebook: 'eBook',
  webinar: 'Webinar',
  case_study: 'Case Study',
  tutorial: 'Tutorial',
  report: 'Report',
};

export function ResourceCard({
  id,
  type,
  title,
  description,
  author,
  date,
  tags,
  image,
  duration,
  format,
}: ResourceCardProps) {
  const Icon = resourceTypeIcons[type];

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-1">
            <Icon className="w-4 h-4" />
            <span>{resourceTypeLabels[type]}</span>
            {duration && (
              <>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4" />
                <span>{duration}</span>
              </>
            )}
          </div>
          <Link to={`/resources/${id}`} className="block group-hover:text-brand-yellow transition-colors duration-200">
            <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <p className="text-brand-dark/70 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
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

        <div className="flex items-center justify-between text-sm">
          <div className="text-brand-dark/70">
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          {format === 'PDF' ? (
            <button className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          ) : (
            <button className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200">
              <ExternalLink className="w-4 h-4" />
              <span>View</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}