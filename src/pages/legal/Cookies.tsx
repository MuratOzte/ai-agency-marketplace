import React from 'react';
import { Link } from 'react-router-dom';

export function Cookies() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-6 font-playfair">Cookie Policy</h1>
          <p className="text-sm text-brand-dark/70 mb-8">Last updated: February 23, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-dark/80">
            <p>
              This Cookie Policy explains how AI Agency Marketplace (AIAM) uses cookies and similar technologies to recognize you when you visit our platform.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">What are Cookies?</h2>
            <p>
              Cookies are small data files placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic platform functionality
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how visitors use our platform
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences and settings
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Help deliver relevant advertisements
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Cookie Management</h2>
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our platform.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Third-Party Cookies</h2>
            <p>
              We may allow third-party service providers to place cookies on our platform for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics and performance monitoring</li>
              <li>Advertising and marketing</li>
              <li>Social media integration</li>
              <li>Security and fraud prevention</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in our practices or for operational, legal, or regulatory reasons.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy, please contact us at{' '}
              <a href="mailto:privacy@aiagencymarketplace.com" className="text-brand-light hover:text-brand-light/80">
                privacy@aiagencymarketplace.com
              </a>
            </p>

            <div className="mt-8 pt-8 border-t border-brand-dark/10">
              <p className="text-sm text-brand-dark/70">
                For more information about our practices, please review our{' '}
                <Link to="/privacy" className="text-brand-light hover:text-brand-light/80">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link to="/terms" className="text-brand-light hover:text-brand-light/80">
                  Terms of Service
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