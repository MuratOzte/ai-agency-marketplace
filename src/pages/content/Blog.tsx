import React from 'react';
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const featuredPost = {
  id: '1',
  title: 'The Future of AI in Business: Trends and Predictions for 2025',
  excerpt: 'Explore the latest trends and predictions in artificial intelligence and how they will shape business operations in the coming years.',
  author: 'Dr. Sarah Johnson',
  date: '2025-02-20',
  readTime: '8 min read',
  category: 'AI Trends',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200',
  tags: ['AI', 'Business', 'Technology', 'Future'],
};

const recentPosts = [
  {
    id: '2',
    title: 'How to Choose the Right AI Agency for Your Project',
    excerpt: 'A comprehensive guide to evaluating and selecting the perfect AI agency partner for your business needs.',
    author: 'Michael Chen',
    date: '2025-02-15',
    readTime: '6 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    tags: ['AI Agency', 'Business', 'Guide'],
  },
  {
    id: '3',
    title: 'AI Implementation Success Stories: Real-World Examples',
    excerpt: 'Learn from successful AI implementations across different industries and their impact on business growth.',
    author: 'Emily Brown',
    date: '2025-02-10',
    readTime: '10 min read',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800',
    tags: ['Success Stories', 'Implementation', 'AI'],
  },
  {
    id: '4',
    title: 'The Role of Machine Learning in Modern Business Operations',
    excerpt: 'Discover how machine learning is transforming business operations and driving innovation across industries.',
    author: 'David Wilson',
    date: '2025-02-05',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    tags: ['Machine Learning', 'Innovation', 'Business'],
  },
];

const categories = [
  'All Categories',
  'AI Trends',
  'Technology',
  'Business',
  'Case Studies',
  'Guides',
  'Industry News',
];

export function Blog() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            AIAM Blog
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Insights, trends, and expert perspectives on AI, technology, and business innovation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors duration-200"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-dark/40 w-5 h-5" />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-brand-dark/10 text-brand-dark/70 hover:bg-brand-light hover:text-white hover:border-brand-light transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link to={`/blog/${featuredPost.id}`} className="block group">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="px-3 py-1 bg-brand-light rounded-full">Featured</span>
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-brand-yellow transition-colors duration-200">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-200 mb-6 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand-dark">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-2 group-hover:text-brand-light transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-brand-dark/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-brand-dark/70">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Get the latest insights on AI, technology, and business innovation delivered directly to your inbox.
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