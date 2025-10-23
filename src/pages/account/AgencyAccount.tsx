import React from 'react';
import { AgencyForm } from '../../components/forms/AgencyForm';

export function AgencyAccount() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Agency Account
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Create your agency profile and start connecting with businesses looking for AI solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AgencyForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Benefits of Joining
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Qualified Leads</h3>
                    <p className="text-brand-dark/70 text-sm">Connect with businesses actively seeking AI solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Brand Visibility</h3>
                    <p className="text-brand-dark/70 text-sm">Showcase your expertise to a targeted audience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Project Management</h3>
                    <p className="text-brand-dark/70 text-sm">Streamline your client interactions and project workflow.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="/resources/agency-guide" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Agency Success Guide
                  </a>
                </li>
                <li>
                  <a href="/resources/best-practices" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Profile Best Practices
                  </a>
                </li>
                <li>
                  <a href="/resources/case-studies" className="text-brand-dark/70 hover:text-brand-light transition-colors duration-200">
                    Case Study Examples
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