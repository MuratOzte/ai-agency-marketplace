import React from 'react';
import { Star, MapPin, Mail, Phone, ExternalLink, CheckCircle, Download, Calendar, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const agencyData = {
  id: '1',
  name: 'AI Solutions Pro',
  logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
  rating: 4.8,
  reviewCount: 47,
  location: 'San Francisco, USA',
  primaryContact: {
    name: 'John Smith',
    title: 'CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150',
  },
  description: 'AI Solutions Pro is a leading artificial intelligence agency specializing in developing cutting-edge AI solutions for businesses across various industries. Our team of experts combines deep technical knowledge with strategic thinking to deliver transformative AI implementations.',
  services: [
    'AI Development',
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Robotics',
    'Data Analytics',
  ],
  technologies: [
    'TensorFlow',
    'PyTorch',
    'AWS',
    'Google Cloud',
    'Azure',
    'Python',
    'Node.js',
    'React',
  ],
  industries: [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Technology',
    'Education',
  ],
  team: {
    size: '10-50 employees',
    composition: [
      { role: 'AI Engineers', count: 15 },
      { role: 'Data Scientists', count: 8 },
      { role: 'ML Researchers', count: 5 },
      { role: 'Project Managers', count: 4 },
    ],
  },
  portfolio: [
    {
      id: '1',
      title: 'Healthcare AI Assistant',
      industry: 'Healthcare',
      description: 'Developed an AI-powered virtual assistant for patient care management.',
      technologies: ['NLP', 'TensorFlow', 'Python'],
      duration: '6 months',
      client: 'Major US Hospital Network',
      impact: 'Reduced patient wait times by 45%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400',
    },
    {
      id: '2',
      title: 'Retail Analytics Platform',
      industry: 'Retail',
      description: 'Built a comprehensive analytics platform using machine learning.',
      technologies: ['Python', 'AWS', 'React'],
      duration: '4 months',
      client: 'Global Retail Chain',
      impact: 'Increased sales by 23%',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400',
    },
  ],
  collaborators: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Senior Data Scientist',
      projects: 12,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'ML Engineer',
      projects: 8,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    },
  ],
  reviews: [
    {
      id: '1',
      clientName: 'David Wilson',
      clientCompany: 'TechCorp Inc.',
      rating: 5,
      text: 'Exceptional work on our AI implementation project. The team was professional, knowledgeable, and delivered beyond our expectations.',
      date: '2025-02-15',
    },
    {
      id: '2',
      clientName: 'Emily Brown',
      clientCompany: 'HealthTech Solutions',
      rating: 4.5,
      text: 'Great experience working with AI Solutions Pro. They helped us transform our healthcare processes with AI.',
      date: '2025-01-28',
    },
  ],
};

export function AgencyProfile() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={agencyData.logo}
              alt={agencyData.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-brand-dark font-playfair">{agencyData.name}</h1>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-brand-yellow fill-current" />
                  <span className="font-medium">{agencyData.rating}</span>
                  <span className="text-brand-dark/60">({agencyData.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 text-brand-dark/70">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{agencyData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{agencyData.team.size}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="btn-primary">
                Request Quote
              </button>
              <button className="btn-secondary">
                Contact Agency
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">Overview</h2>
              <p className="text-brand-dark/70 mb-6">{agencyData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-brand-dark mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {agencyData.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-brand-light/10 text-brand-light rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-3">Industries</h3>
                  <div className="flex flex-wrap gap-2">
                    {agencyData.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-brand-dark/5 text-brand-dark/70 rounded-full text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 font-playfair">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {agencyData.portfolio.map((project) => (
                  <div key={project.id} className="border rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-brand-dark mb-2">{project.title}</h3>
                      <p className="text-sm text-brand-dark/70 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-brand-light/10 text-brand-light rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-brand-dark/70">
                        <span>{project.duration}</span>
                        <span>{project.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 font-playfair">Client Reviews</h2>
              <div className="space-y-6">
                {agencyData.reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-brand-dark">{review.clientName}</h3>
                        <p className="text-sm text-brand-dark/70">{review.clientCompany}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-brand-yellow fill-current" />
                        <span className="font-medium">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-brand-dark/70">{review.text}</p>
                    <p className="text-sm text-brand-dark/60 mt-2">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Primary Contact</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={agencyData.primaryContact.image}
                  alt={agencyData.primaryContact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-brand-dark">{agencyData.primaryContact.name}</p>
                  <p className="text-sm text-brand-dark/70">{agencyData.primaryContact.title}</p>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full btn-primary">
                  Schedule a Call
                </button>
                <button className="w-full btn-secondary">
                  Send Message
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {agencyData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-brand-light/10 text-brand-light rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Team Composition</h3>
              <div className="space-y-3">
                {agencyData.team.composition.map((role) => (
                  <div key={role.role} className="flex items-center justify-between">
                    <span className="text-brand-dark/70">{role.role}</span>
                    <span className="font-medium text-brand-dark">{role.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborators */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Top Collaborators</h3>
              <div className="space-y-4">
                {agencyData.collaborators.map((collaborator) => (
                  <div key={collaborator.id} className="flex items-center gap-3">
                    <img
                      src={collaborator.image}
                      alt={collaborator.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-brand-dark">{collaborator.name}</p>
                      <p className="text-sm text-brand-dark/70">{collaborator.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-brand-yellow fill-current" />
                        <span className="font-medium">{collaborator.rating}</span>
                      </div>
                      <p className="text-xs text-brand-dark/60">{collaborator.projects} projects</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}