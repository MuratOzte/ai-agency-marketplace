import React from 'react';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-6 font-playfair">Privacy Policy</h1>
          <p className="text-sm text-brand-dark/70 mb-8">Last updated: February 23, 2025</p>

          <div className="prose prose-lg max-w-none text-brand-dark/80">
            <p>
              At AI Agency Marketplace (AIAM), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Professional information (work history, skills, certifications)</li>
              <li>Account credentials</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To match businesses with AI agencies</li>
              <li>To improve our platform and user experience</li>
              <li>To communicate with you about our services</li>
              <li>To ensure platform security and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Information Sharing</h2>
            <p>
              We share your information only in specific circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your consent</li>
              <li>With service providers and partners</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-brand-dark mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@aiagencymarketplace.com" className="text-brand-light hover:text-brand-light/80">
                privacy@aiagencymarketplace.com
              </a>
            </p>

            <div className="mt-8 pt-8 border-t border-brand-dark/10">
              <p className="text-sm text-brand-dark/70">
                For more information about our practices, please review our{' '}
                <Link to="/terms" className="text-brand-light hover:text-brand-light/80">
                  Terms of Service
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