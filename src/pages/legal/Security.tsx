import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Server, Bell, FileCheck } from 'lucide-react';

export function Security() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-6 font-playfair">Security</h1>
          <p className="text-lg text-brand-dark/70 mb-12">
            At AI Agency Marketplace (AIAM), we prioritize the security of your data and privacy. Learn about our comprehensive security measures and practices.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Data Protection</h3>
                  <p className="text-brand-dark/70">
                    Industry-standard encryption for all data in transit and at rest, ensuring your information remains secure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lock className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Access Control</h3>
                  <p className="text-brand-dark/70">
                    Strict authentication and authorization protocols to prevent unauthorized access to your account.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Privacy First</h3>
                  <p className="text-brand-dark/70">
                    Comprehensive privacy controls allowing you to manage your data and sharing preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Server className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Infrastructure Security</h3>
                  <p className="text-brand-dark/70">
                    Regular security audits and updates to maintain a robust and secure platform infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Bell className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Incident Response</h3>
                  <p className="text-brand-dark/70">
                    24/7 monitoring and rapid response protocols to address any security concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileCheck className="w-8 h-8 text-brand-light flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Compliance</h3>
                  <p className="text-brand-dark/70">
                    Adherence to international security standards and data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-brand-dark font-playfair">Security Best Practices</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-dark">For Your Account</h3>
              <ul className="list-disc pl-6 space-y-2 text-brand-dark/70">
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication</li>
                <li>Regularly review your account activity</li>
                <li>Keep your contact information updated</li>
                <li>Never share your login credentials</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-dark">For Transactions</h3>
              <ul className="list-disc pl-6 space-y-2 text-brand-dark/70">
                <li>Verify agency credentials before engagement</li>
                <li>Use our secure payment system</li>
                <li>Keep communication within the platform</li>
                <li>Report suspicious activity immediately</li>
                <li>Review and verify all contract terms</li>
              </ul>
            </div>

            <div className="bg-brand-light/5 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-brand-dark mb-4">Report a Security Issue</h3>
              <p className="text-brand-dark/70 mb-4">
                If you discover a security vulnerability or have concerns about platform security, please contact our security team immediately.
              </p>
              <a
                href="mailto:security@aiagencymarketplace.com"
                className="inline-block btn-primary"
              >
                Contact Security Team
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-dark/10">
            <p className="text-sm text-brand-dark/70">
              For more information about how we protect your data, please review our{' '}
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
  );
}