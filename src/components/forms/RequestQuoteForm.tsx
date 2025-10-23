import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const quoteSchema = z.object({
  project_name: z.string().min(2, 'Project name must be at least 2 characters'),
  description: z.string().min(50, 'Please provide a detailed project description'),
  budget_range: z.enum(['5000-10000', '10000-25000', '25000-50000', '50000-plus'], {
    required_error: 'Please select a budget range',
  }),
  timeline: z.enum(['1-3 months', '3-6 months', '6-12 months', '12+ months'], {
    required_error: 'Please select a timeline',
  }),
  company_details: z.object({
    name: z.string().min(2, 'Company name is required'),
    website: z.string().url('Invalid website URL').optional().or(z.literal('')),
    contact_name: z.string().min(2, 'Contact name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
  }),
  additional_info: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface RequestQuoteFormProps {
  agencyId: string;
  agencyName: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function RequestQuoteForm({ agencyId, agencyName, onSuccess, onCancel }: RequestQuoteFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Store in Supabase
      const { error: dbError } = await supabase.from('quote_requests').insert([{
        agency_id: agencyId,
        ...data,
        status: 'pending',
      }]);

      if (dbError) throw dbError;

      // Send email notification
      const emailData = {
        to: data.company_details.email,
        subject: `Quote Request for ${data.project_name}`,
        body: `
          Thank you for requesting a quote from ${agencyName}.
          
          Project Details:
          Name: ${data.project_name}
          Budget: ${data.budget_range}
          Timeline: ${data.timeline}
          
          We will review your request and get back to you shortly.
        `,
      };

      // Here you would typically send the email through your backend
      console.log('Email notification:', emailData);

      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error submitting quote request:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="project_name" className="block text-sm font-medium text-brand-dark mb-2">
          Project Name
        </label>
        <input
          type="text"
          id="project_name"
          {...register('project_name')}
          className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        />
        {errors.project_name && (
          <p className="mt-1 text-sm text-red-600">{errors.project_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-brand-dark mb-2">
          Project Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-brand-dark mb-2">
            Budget Range
          </label>
          <select
            id="budget_range"
            {...register('budget_range')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          >
            <option value="">Select budget range</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-25000">$10,000 - $25,000</option>
            <option value="25000-50000">$25,000 - $50,000</option>
            <option value="50000-plus">$50,000+</option>
          </select>
          {errors.budget_range && (
            <p className="mt-1 text-sm text-red-600">{errors.budget_range.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-brand-dark mb-2">
            Project Timeline
          </label>
          <select
            id="timeline"
            {...register('timeline')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          >
            <option value="">Select timeline</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="12+ months">12+ months</option>
          </select>
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-brand-dark">Company Details</h3>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-brand-dark mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              {...register('company_details.name')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_details?.name && (
              <p className="mt-1 text-sm text-red-600">{errors.company_details.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-brand-dark mb-2">
              Website (Optional)
            </label>
            <input
              type="url"
              id="website"
              {...register('company_details.website')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_details?.website && (
              <p className="mt-1 text-sm text-red-600">{errors.company_details.website.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact_name" className="block text-sm font-medium text-brand-dark mb-2">
              Contact Name
            </label>
            <input
              type="text"
              id="contact_name"
              {...register('company_details.contact_name')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_details?.contact_name && (
              <p className="mt-1 text-sm text-red-600">{errors.company_details.contact_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('company_details.email')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_details?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.company_details.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('company_details.phone')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="additional_info" className="block text-sm font-medium text-brand-dark mb-2">
          Additional Information (Optional)
        </label>
        <textarea
          id="additional_info"
          rows={4}
          {...register('additional_info')}
          className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        />
      </div>

      <div className="flex justify-end gap-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 rounded-lg border border-brand-dark/10 text-brand-dark hover:bg-brand-dark/5"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>
      </div>
    </form>
  );
}