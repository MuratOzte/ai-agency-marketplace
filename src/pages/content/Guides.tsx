import React from 'react';
import { Search, BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const guides = [
  {
    id: '1',
    title: 'Complete Guide to AI Implementation',
    type: 'ebook',
    description: 'A comprehensive guide to implementing AI solutions in your business, from planning to deployment.',
    author: 'Dr. Sarah Johnson',
    level: 'Intermediate',
    duration: '2 hours',
    topics: ['Strategy', 'Planning', 'Implementation', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
    format: 'PDF',
  },
  {
    id: '2',
    title: 'AI Project Management Essentials',
    type: 'video',
    description: 'Learn essential project management techniques for successful AI implementations.',
    author: 'Michael Chen',
    level: 'Advanced',
    duration: '1.5 hours',
    topics: ['Project Management', 'Team Leadership', 'Risk Management', 'Timeline Planning'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    format: 'Video',
  },
  {
    id: '3',
    title: 'Machine Learning Model Development',
    type: 'tutorial',
    description: 'Step-by-step tutorial on developing and deploying machine learning models.',
    author: 'Emily Brown',
    level: 'Expert',
    duration: '3 hours',
    topics: ['Model Development', 'Training', 'Deployment', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    format: 'Interactive',
  },
];

const categories = [
  'All Guides',
  'Implementation',
  'Project Management',
  'Technical Guides',
  'Best Practices',
  'Case Studies',
];

const levels = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert',
];

const formats = [
  'All Formats',
  'eBook',
  'Video',
  'Tutorial',
  'Interactive',
  'Webinar',
];

function GuideCard({ guide }: { guide: typeof guides[0] }) {
  const TypeIcon = {
    ebook: BookOpen,
    video: Video,
    tutorial: FileText,
  }[guide.type] || FileText;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative h-48">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-brand-light/90 text-white px-3 py-1 rounded-full text-sm font-medium">
          {guide.level}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-2">
            <TypeIcon className="w-4 h-4" />
            <span>{guide.format}</span>
            <span>•</span>
            <span>{guide.duration}</span>
          </div>
          <h3 className="text-lg font-semibold group-hover:text-brand-yellow transition-colors duration-200">
            {guide.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-brand-dark/70 mb-4 line-clamp-2">{guide.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {guide.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-brand-light/10 text-brand-light rounded-full text-xs"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-brand-dark/70">
            By {guide.author}
          </div>
          <button className="flex items-center gap-1 text-brand-light hover:text-brand-yellow transition-colors duration-200">
            {guide.format === 'Video' ? (
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

export function Guides() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            AI Implementation Guides
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Comprehensive guides and tutorials to help you successfully implement AI solutions in your business.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search guides..."
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
                Level
              </label>
              <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
                {levels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Format
              </label>
              <select className="w-full rounded-lg border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20">
                {formats.map((format) => (
                  <option key={format} value={format.toLowerCase()}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">
              Structured Learning Paths
            </h2>
            <p className="text-brand-dark/70">
              Follow our curated learning paths to master AI implementation at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-brand-dark/10 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Beginner Path</h3>
              <p className="text-brand-dark/70 mb-4">Start your AI journey with fundamental concepts and basic implementations.</p>
              <Link to="/learning-paths/beginner" className="text-brand-light hover:text-brand-yellow">
                Start Learning →
              </Link>
            </div>

            <div className="p-6 border border-brand-dark/10 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Intermediate Path</h3>
              <p className="text-brand-dark/70 mb-4">Advance your knowledge with practical projects and real-world applications.</p>
              <Link to="/learning-paths/intermediate" className="text-brand-light hover:text-brand-yellow">
                Continue Learning →
              </Link>
            </div>

            <div className="p-6 border border-brand-dark/10 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Expert Path</h3>
              <p className="text-brand-dark/70 mb-4">Master advanced AI concepts and enterprise-level implementations.</p>
              <Link to="/learning-paths/expert" className="text-brand-light hover:text-brand-yellow">
                Master AI →
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">
              Get New Guides First
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Subscribe to receive new guides, tutorials, and best practices directly in your inbox.
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