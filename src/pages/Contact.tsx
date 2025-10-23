import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Get in Touch
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you succeed with your AI initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-6 font-playfair">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-light mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-dark">Address</h3>
                    <p className="text-brand-dark/70">
                      123 AI Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-light mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-dark">Phone</h3>
                    <p className="text-brand-dark/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-light mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-dark">Email</h3>
                    <p className="text-brand-dark/70">contact@aiagencymarketplace.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-light mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-dark">Business Hours</h3>
                    <p className="text-brand-dark/70">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-6 font-playfair">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <a href="/faq" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}