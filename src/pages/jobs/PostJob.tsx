import React from 'react';
import { PostJobForm } from '../../components/forms/PostJobForm';

export function PostJob() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Post a Job
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Find the perfect AI talent for your organization. Create a detailed job listing to attract qualified candidates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PostJobForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Posting Tips
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Be Specific</h3>
                    <p className="text-brand-dark/70 text-sm">Clearly outline the role, responsibilities, and requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Highlight Benefits</h3>
                    <p className="text-brand-dark/70 text-sm">Include all perks and benefits to attract top talent.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Set Clear Expectations</h3>
                    <p className="text-brand-dark/70 text-sm">Define experience level, skills, and qualifications needed.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Need Help?
              </h2>
              <p className="text-brand-dark/70 mb-4">
                Our team is here to assist you with any questions about posting jobs or finding talent.
              </p>
              <a
                href="/contact"
                className="block w-full text-center py-2 px-4 rounded-lg border border-brand-light text-brand-light hover:bg-brand-light/5 transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}