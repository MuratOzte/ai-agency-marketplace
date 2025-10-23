import React from 'react';
import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-6 font-playfair">Terms of Service</h1>
          <p className="text-sm text-brand-dark/70 mb-8">Last updated: February 23, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-dark/80">
            <p>
              These Terms of Service ("Terms") govern your access to and use of AI Agency Marketplace (AIAM). By using our platform, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">1. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must notify us of any unauthorized access</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">2. Platform Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the platform in compliance with all applicable laws</li>
              <li>Do not misrepresent your identity or qualifications</li>
              <li>Do not engage in fraudulent or deceptive practices</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain professional conduct in all interactions</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">3. Service Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We facilitate connections between businesses and AI agencies</li>
              <li>We do not guarantee specific outcomes or results</li>
              <li>We reserve the right to modify or terminate services</li>
              <li>We may update these terms at any time</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              All content on the platform, including text, graphics, logos, and software, is our property or the property of our licensors and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">6. Dispute Resolution</h2>
            <p>
              Any disputes will be resolved through binding arbitration, except where prohibited by law.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Contact</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@aiagencymarketplace.com" className="text-brand-light hover:text-brand-light/80">
                legal@aiagencymarketplace.com
              </a>
            </p>

            <div className="mt-8 pt-8 border-t border-brand-dark/10">
              <p className="text-sm text-brand-dark/70">
                Please also review our{' '}
                <Link to="/privacy" className="text-brand-light hover:text-brand-light/80">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link to="/cookies" className="text-brand-light hover:text-brand-light/80">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}