import React from 'react';
import { Search, BookOpen, Video, FileText, Download, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const featuredResource = {
  id: '1',
  title: 'Complete Guide to AI Career Paths in 2025',
  type: 'ebook',
  description: 'A comprehensive guide to navigating various career paths in artificial intelligence, including roles, skills required, and growth opportunities.',
  author: 'Dr. Sarah Johnson',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200',
  tags: ['Career Guide', 'AI Roles', 'Skill Development'],
  rating: 4.8,
  reviews: 156,
};

const resources = [
  {
    id: '2',
    type: 'article',
    title: 'Top AI Skills in Demand for 2025',
    description: 'Discover the most sought-after AI skills and how to acquire them.',
    author: 'Michael Chen',
    date: '2025-02-15',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    tags: ['Skills', 'Career Growth', 'Learning'],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: '3',
    type: 'video',
    title: 'AI Interview Preparation Guide',
    description: 'Expert tips for acing your AI job interviews.',
    author: 'Emily Brown',
    date: '2025-02-10',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
    tags: ['Interview Tips', 'Career Advice'],
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '4',
    type: 'guide',
    title: 'Building an AI Portfolio',
    description: 'Learn how to showcase your AI projects and skills effectively.',
    author: 'David Wilson',
    date: '2025-02-01',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['Portfolio', 'Projects', 'Career Growth'],
    rating: 4.6,
    reviews: 95,
  },
];

const categories = [
  'All Resources',
  'Career Guides',
  'Interview Prep',
  'Skill Development',
  'Industry Insights',
  'Case Studies',
  'Salary Guides',
];

const resourceTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'article', label: 'Articles' },
  { value: 'video', label: 'Videos' },
  { value: 'guide', label: 'Guides' },
  { value: 'ebook', label: 'eBooks' },
  { value: 'webinar', label: 'Webinars' },
];

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  const TypeIcon = {
    article: BookOpen,
    video: Video,
    guide: FileText,
  }[resource.type] || FileText;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative h-48">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-brand-light/90 text-white px-3 py-1 rounded-full text-sm font-medium">
          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-2">
            <TypeIcon className="w-4 h-4" />
            {resource.duration && (
              <>
                <span className="mx-2">•</span>
                <span>{resource.duration}</span>
              </>
            )}
          </div>
          <h3 className="text-lg font-semibold group-hover:text-brand-yellow transition-colors duration-200">
            {resource.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-brand-dark/70 mb-4 line-clamp-2">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-brand-light/10 text-brand-light rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-brand-yellow fill-current" />
            <span className="font-medium">{resource.rating}</span>
            <span className="text-brand-dark/60">({resource.reviews})</span>
          </div>
          <button className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200">
            {resource.type === 'video' ? (
              <>
                <ExternalLink className="w-4 h-4" />
                <span>Watch Now</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CareerResources() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Career Resources
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Explore our collection of guides, articles, and tools to advance your career in AI.
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={featuredResource.image}
              alt={featuredResource.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="px-2 py-1 bg-brand-light rounded-full">Featured</span>
                <span>{featuredResource.type.charAt(0).toUpperCase() + featuredResource.type.slice(1)}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-brand-yellow fill-current" />
                  <span>{featuredResource.rating}</span>
                  <span className="text-gray-300">({featuredResource.reviews} reviews)</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredResource.title}</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                {featuredResource.description}
              </p>
              <button className="btn-primary">
                Download Now
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors duration-200"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-dark/40 w-5 h-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Category
              </label>
              <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Resource Type
              </label>
              <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
                {resourceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Sort By
              </label>
              <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">
              Get Career Updates
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Subscribe to receive the latest career resources, job opportunities, and industry insights.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}