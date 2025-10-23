import React from 'react';
import { Star, Clock, DollarSign, TrendingUp, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const projectData = {
  id: '1',
  title: 'AI-Powered Customer Support Automation',
  status: 'in-progress',
  startDate: '2025-01-15',
  endDate: '2025-06-15',
  business: {
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
  },
  agency: {
    name: 'AI Solutions Pro',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    rating: 4.8,
  },
  budget: {
    total: 150000,
    spent: 75000,
  },
  roi: {
    estimated: 40,
    actual: 35,
    revenueGenerated: 500000,
    costSavings: 100000,
  },
  description: 'Implementation of an AI-powered customer support system to automate routine inquiries and improve response times.',
  objectives: [
    {
      title: 'Increase customer satisfaction',
      target: '20%',
      current: '18%',
      status: 'in-progress',
    },
    {
      title: 'Reduce response time',
      target: '30%',
      current: '25%',
      status: 'in-progress',
    },
    {
      title: 'Generate additional revenue',
      target: '$1M',
      current: '$500K',
      status: 'in-progress',
    },
  ],
  outcomes: [
    'Increased customer retention and loyalty',
    'Improved operational efficiency',
    'Reduced support costs',
    'Enhanced customer experience',
  ],
  kpis: [
    {
      name: 'Customer Satisfaction',
      target: '90%',
      current: '88%',
      trend: 'up',
    },
    {
      name: 'Response Time',
      target: '< 5 mins',
      current: '6.5 mins',
      trend: 'down',
    },
    {
      name: 'Resolution Rate',
      target: '85%',
      current: '82%',
      trend: 'up',
    },
  ],
  team: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Project Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'AI Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    },
  ],
  updates: [
    {
      date: '2025-02-15',
      title: 'Phase 1 Complete',
      description: 'Successfully implemented basic chatbot functionality with 80% accuracy in response predictions.',
    },
    {
      date: '2025-01-30',
      title: 'Initial Setup',
      description: 'Completed system architecture design and initial data collection for training.',
    },
  ],
};

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'paused':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function ProjectPage() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold text-brand-dark font-playfair">{projectData.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(projectData.status)}`}>
                  {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1)}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-brand-dark/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{new Date(projectData.startDate).toLocaleDateString()} - {new Date(projectData.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span>${projectData.budget.spent.toLocaleString()} / ${projectData.budget.total.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>ROI: {projectData.roi.actual}%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-primary">
                View Reports
              </button>
              <button className="btn-secondary">
                Contact Team
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-4 font-playfair">Project Overview</h2>
              <p className="text-brand-dark/70 mb-6">{projectData.description}</p>

              <h3 className="font-semibold text-brand-dark mb-3">Measurable Objectives</h3>
              <div className="space-y-4 mb-6">
                {projectData.objectives.map((objective) => (
                  <div key={objective.title} className="flex items-center justify-between p-4 bg-brand-dark/5 rounded-lg">
                    <div>
                      <h4 className="font-medium text-brand-dark">{objective.title}</h4>
                      <p className="text-sm text-brand-dark/70">Target: {objective.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-brand-dark">{objective.current}</p>
                      <p className="text-sm text-brand-dark/70">Current Progress</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-brand-dark mb-3">Expected Outcomes</h3>
              <ul className="space-y-2 mb-6">
                {projectData.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-brand-light" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ROI Tracking */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 font-playfair">ROI & Performance</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-brand-light/10 rounded-lg">
                  <h4 className="text-sm font-medium text-brand-dark mb-1">Revenue Generated</h4>
                  <p className="text-2xl font-bold text-brand-dark">${projectData.roi.revenueGenerated.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-brand-light/10 rounded-lg">
                  <h4 className="text-sm font-medium text-brand-dark mb-1">Cost Savings</h4>
                  <p className="text-2xl font-bold text-brand-dark">${projectData.roi.costSavings.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-brand-light/10 rounded-lg">
                  <h4 className="text-sm font-medium text-brand-dark mb-1">Actual ROI</h4>
                  <p className="text-2xl font-bold text-brand-dark">{projectData.roi.actual}%</p>
                </div>
              </div>

              <h3 className="font-semibold text-brand-dark mb-4">Key Performance Indicators</h3>
              <div className="space-y-4">
                {projectData.kpis.map((kpi) => (
                  <div key={kpi.name} className="flex items-center justify-between p-4 bg-brand-dark/5 rounded-lg">
                    <div>
                      <h4 className="font-medium text-brand-dark">{kpi.name}</h4>
                      <p className="text-sm text-brand-dark/70">Target: {kpi.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-brand-dark">{kpi.current}</p>
                      <p className="text-sm text-brand-dark/70">Current</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Updates */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 font-playfair">Project Updates</h2>
              <div className="space-y-6">
                {projectData.updates.map((update) => (
                  <div key={update.date} className="border-l-2 border-brand-light pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-brand-dark">{update.title}</h3>
                      <span className="text-sm text-brand-dark/60">{new Date(update.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-brand-dark/70">{update.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Team */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Project Team</h3>
              <div className="space-y-4">
                {projectData.team.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-brand-dark">{member.name}</p>
                      <p className="text-sm text-brand-dark/70">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full btn-secondary mt-4">
                View All Team Members
              </button>
            </div>

            {/* Business & Agency */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Project Stakeholders</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-brand-dark mb-2">Business</h4>
                  <div className="flex items-center gap-3">
                    <img
                      src={projectData.business.logo}
                      alt={projectData.business.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <p className="font-medium text-brand-dark">{projectData.business.name}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-brand-dark mb-2">Agency</h4>
                  <div className="flex items-center gap-3">
                    <img
                      src={projectData.agency.logo}
                      alt={projectData.agency.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-brand-dark">{projectData.agency.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-brand-yellow fill-current" />
                        <span className="text-sm text-brand-dark/70">{projectData.agency.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-brand-dark mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full btn-secondary">Schedule Meeting</button>
                <button className="w-full btn-secondary">View Documents</button>
                <button className="w-full btn-secondary">Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}