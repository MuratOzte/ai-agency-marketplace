import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const projectSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  required_services: z.array(z.string()).min(1, 'Select at least one service'),
  industry: z.string().min(1, 'Please select an industry'),
  budget_range: z.string().min(1, 'Please select a budget range'),
  timing: z.enum(['short-term', 'long-term']),
  location: z.string().optional(),
  company_details: z.object({
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company_name: z.string().min(2, 'Company name is required'),
  }),
});

type ProjectFormData = z.infer<typeof projectSchema>;

const services = [
  'AI Development',
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Robotics',
  'Data Analytics',
  'AI Consulting',
];

const industries = [
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Technology',
  'Education',
  'Other',
];

const budgetRanges = [
  { label: '$5,000 - $10,000', value: '5000-10000' },
  { label: '$10,000 - $25,000', value: '10000-25000' },
  { label: '$25,000 - $50,000', value: '25000-50000' },
  { label: '$50,000+', value: '50000-plus' },
];

export function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    try {
      // Send form data to email
      const emailData = {
        to: 'info@francesca.tabor.com',
        subject: `New Project Submission: ${data.title}`,
        body: `
          Project Details:
          Title: ${data.title}
          Description: ${data.description}
          Services: ${data.required_services.join(', ')}
          Industry: ${data.industry}
          Budget Range: ${data.budget_range}
          Timing: ${data.timing}
          Location: ${data.location || 'Not specified'}
          
          Company Details:
          Name: ${data.company_details.company_name}
          Email: ${data.company_details.email}
          Phone: ${data.company_details.phone || 'Not provided'}
        `,
      };

      // Store in Supabase
      const { error } = await supabase.from('projects').insert([{
        ...data,
        status: 'open',
      }]);

      if (error) throw error;

      reset();
      // Show success message
    } catch (error) {
      console.error('Error submitting project:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-playfair">Post Your Project</h2>
        <p className="text-gray-600">
          Tell us about your project and we'll help you find the perfect AI agency.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Required Services</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {services.map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={service}
                  {...register('required_services')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
          {errors.required_services && (
            <p className="mt-1 text-sm text-red-600">{errors.required_services.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <select
            id="industry"
            {...register('industry')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select an industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700">
            Budget Range
          </label>
          <select
            id="budget_range"
            {...register('budget_range')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          {errors.budget_range && (
            <p className="mt-1 text-sm text-red-600">{errors.budget_range.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Timing</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="short-term"
                {...register('timing')}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Short-term</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="long-term"
                {...register('timing')}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Long-term</span>
            </label>
          </div>
          {errors.timing && (
            <p className="mt-1 text-sm text-red-600">{errors.timing.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location Preference
          </label>
          <input
            type="text"
            id="location"
            {...register('location')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Company Details</h3>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('company_details.email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.company_details?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.company_details.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('company_details.phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              {...register('company_details.company_name')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.company_details?.company_name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.company_details.company_name.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Post Your Project'}
        </button>
      </div>
    </form>
  );
}