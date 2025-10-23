import React from 'react';
import { FreelancerProfileForm } from '../../components/forms/FreelancerProfileForm';

export function CreateFreelancerProfile() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Create Your Freelancer Profile
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Showcase your AI expertise and connect with businesses looking for talented freelancers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FreelancerProfileForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Profile Tips
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Be Detailed</h3>
                    <p className="text-brand-dark/70 text-sm">Provide comprehensive information about your skills and experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Showcase Work</h3>
                    <p className="text-brand-dark/70 text-sm">Include relevant projects and case studies to demonstrate your expertise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <h3 className="font-medium text-brand-dark">Set Clear Expectations</h3>
                    <p className="text-brand-dark/70 text-sm">Be specific about your availability, rates, and preferred working style.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-playfair">
                Need Help?
              </h2>
              <p className="text-brand-dark/70 mb-4">
                Our team is here to assist you with creating your freelancer profile.
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