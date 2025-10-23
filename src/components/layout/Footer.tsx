import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-brand-light/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">Stay Updated with AIAM</h3>
            <p className="text-gray-400 mb-6">Get the latest news, resources, and insights about AI services and industry trends.</p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-brand-dark/50 border border-brand-light/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light/30 transition-all duration-200"
              />
              <button className="px-6 py-2 bg-brand-light text-white rounded-lg hover:bg-brand-light/90 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-brand-light" />
              <span className="ml-2 text-xl font-bold text-white">AIAM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting businesses with top AI agencies to drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-playfair">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/agencies" className="text-gray-400 hover:text-white transition-colors duration-200">Find Agencies</Link></li>
              <li><Link to="/post-project" className="text-gray-400 hover:text-white transition-colors duration-200">Post a Project</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-playfair">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white transition-colors duration-200">Guides</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-playfair">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors duration-200">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-playfair">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors duration-200">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-brand-light/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI Agency Marketplace. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-brand-dark/50 text-gray-400 px-3 py-1 rounded-md border border-brand-light/20 focus:outline-none focus:ring-2 focus:ring-brand-light/30 transition-all duration-200">
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}