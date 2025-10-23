import React from 'react';
import { Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const successStories = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    industry: 'Healthcare',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300',
    challenge: 'Tech Innovations was struggling with inefficient patient data management and slow decision-making processes that were impacting patient care and operational efficiency.',
    solution: 'By integrating a customized AI-driven data management system, powered by machine learning and predictive analytics, Tech Innovations was able to streamline patient data organization, automate administrative tasks, and provide healthcare providers with real-time insights.',
    outcomes: [
      '40% reduction in administrative costs',
      '25% improvement in patient care turnaround time',
      'Enhanced decision-making speed for doctors',
    ],
    testimonial: {
      quote: 'AI transformed how we handle patient data, allowing us to focus on what matters most: patient care.',
      author: 'John Smith',
      role: 'CEO',
    },
    metrics: {
      roi: '180%',
      timeframe: '6 months',
      satisfaction: '95%',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
  },
  {
    id: '2',
    company: 'Creative Sparks',
    industry: 'Digital Marketing',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    challenge: 'Creative Sparks was struggling to optimize its client outreach campaigns and achieve the level of engagement needed to scale effectively.',
    solution: 'By integrating AI-powered marketing automation and predictive analytics tools through AIAM\'s marketplace, Creative Sparks was able to tailor outreach strategies and automate content distribution.',
    outcomes: [
      '50% increase in conversion rates',
      'Reduced campaign management time by 35%',
      '20% increase in overall revenue',
    ],
    testimonial: {
      quote: 'AI tools provided us with the insights and efficiency we needed to optimize our marketing efforts and see real results.',
      author: 'Emily Clark',
      role: 'Founder',
    },
    metrics: {
      roi: '150%',
      timeframe: '4 months',
      satisfaction: '92%',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    company: 'Ecom Solutions',
    industry: 'E-commerce',
    logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300',
    challenge: 'Ecom Solutions was facing high volumes of customer support inquiries that were overwhelming their team and leading to slower response times.',
    solution: 'AIAM helped implement an AI-driven chatbot to handle common customer inquiries, allowing the support team to focus on more complex issues.',
    outcomes: [
      '70% of inquiries now handled by AI chatbot',
      '40% reduction in customer wait times',
      '95% customer satisfaction rate',
    ],
    testimonial: {
      quote: 'AI transformed our customer service operations, making it more efficient and customer-friendly.',
      author: 'David Lee',
      role: 'Customer Support Manager',
    },
    metrics: {
      roi: '200%',
      timeframe: '3 months',
      satisfaction: '95%',
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
  },
];

export function SuccessStories() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-dark/90" />
          <div className="absolute w-96 h-96 bg-brand-light/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 font-playfair">Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how businesses are transforming their operations and achieving remarkable results through AI implementation with AIAM.
          </p>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {successStories.map((story, index) => (
            <div key={story.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-brand-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-brand-dark font-playfair">{story.company}</h2>
                    <p className="text-brand-dark/70">{story.industry}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <TrendingUp className="w-6 h-6 text-brand-light mb-2" />
                    <div className="text-2xl font-bold text-brand-dark">{story.metrics.roi}</div>
                    <div className="text-sm text-brand-dark/70">ROI</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-brand-light mb-2" />
                    <div className="text-2xl font-bold text-brand-dark">{story.metrics.timeframe}</div>
                    <div className="text-sm text-brand-dark/70">Timeline</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Star className="w-6 h-6 text-brand-light mb-2" />
                    <div className="text-2xl font-bold text-brand-dark">{story.metrics.satisfaction}</div>
                    <div className="text-sm text-brand-dark/70">Satisfaction</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Challenge</h3>
                  <p className="text-brand-dark/70">{story.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Solution</h3>
                  <p className="text-brand-dark/70">{story.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Key Outcomes</h3>
                  <ul className="space-y-2">
                    {story.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2 text-brand-dark/70">
                        <CheckCircle className="w-5 h-5 text-brand-light flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="border-l-4 border-brand-light pl-4 italic">
                  <p className="text-brand-dark/70 mb-2">{story.testimonial.quote}</p>
                  <footer className="text-sm">
                    <span className="font-medium text-brand-dark">{story.testimonial.author}</span>
                    <span className="text-brand-dark/70"> — {story.testimonial.role}</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">Ready to Write Your Success Story?</h2>
          <p className="text-brand-dark/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with AI. Let us help you find the perfect AI solution for your needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/post-project" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}