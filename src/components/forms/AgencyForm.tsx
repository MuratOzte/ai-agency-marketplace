import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const agencySchema = z.object({
  agency_name: z.string().min(2, 'Agency name must be at least 2 characters'),
  services_offered: z.array(z.string()).min(1, 'Select at least one service'),
  industry_specialties: z.array(z.string()).min(1, 'Select at least one industry'),
  case_studies: z.array(z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
  })).optional(),
  certifications: z.array(z.string()).optional(),
  profile_picture: z.any().optional(), // Handle file upload separately
  contact: z.object({
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
  }),
});

type AgencyFormData = z.infer<typeof agencySchema>;

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

export function AgencyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AgencyFormData>({
    resolver: zodResolver(agencySchema),
  });

  const onSubmit = async (data: AgencyFormData) => {
    try {
      const { error } = await supabase.from('agencies').insert([{
        ...data,
        date_joined: new Date().toISOString(),
      }]);

      if (error) throw error;

      reset();
      // Show success message
    } catch (error) {
      console.error('Error submitting agency profile:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-playfair">Create Agency Profile</h2>
        <p className="text-gray-600">
          Join our network of AI agencies and connect with businesses looking for your expertise.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="agency_name" className="block text-sm font-medium text-gray-700">
            Agency Name
          </label>
          <input
            type="text"
            id="agency_name"
            {...register('agency_name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.agency_name && (
            <p className="mt-1 text-sm text-red-600">{errors.agency_name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Services Offered</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {services.map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={service}
                  {...register('services_offered')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
          {errors.services_offered && (
            <p className="mt-1 text-sm text-red-600">{errors.services_offered.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Industry Specialties</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {industries.map((industry) => (
              <label key={industry} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={industry}
                  {...register('industry_specialties')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{industry}</span>
              </label>
            ))}
          </div>
          {errors.industry_specialties && (
            <p className="mt-1 text-sm text-red-600">{errors.industry_specialties.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="case_studies" className="block text-sm font-medium text-gray-700">
            Case Studies
          </label>
          <textarea
            id="case_studies"
            rows={4}
            placeholder="Share your success stories..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
            Certifications & Awards
          </label>
          <textarea
            id="certifications"
            rows={3}
            placeholder="List your certifications and awards..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="file"
            id="profile_picture"
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('contact.email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.contact?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.contact.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('contact.phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Creating Profile...' : 'Create Agency Profile'}
        </button>
      </div>
    </form>
  );
}