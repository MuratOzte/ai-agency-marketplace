import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const contactSchema = z.object({
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  contact_info: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
  }),
  preferred_contact_method: z.enum(['email', 'phone'], {
    required_error: 'Please select a preferred contact method',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactAgencyFormProps {
  agencyId: string;
  agencyName: string;
  agencyEmail: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function ContactAgencyForm({
  agencyId,
  agencyName,
  agencyEmail,
  onSuccess,
  onCancel,
}: ContactAgencyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Store in Supabase
      const { error: dbError } = await supabase.from('agency_messages').insert([{
        agency_id: agencyId,
        ...data,
        status: 'unread',
      }]);

      if (dbError) throw dbError;

      // Send email notification
      const emailData = {
        to: agencyEmail,
        subject: `New Contact Message: ${data.subject}`,
        body: `
          You have received a new message from ${data.contact_info.name}
          
          Subject: ${data.subject}
          Message: ${data.message}
          
          Contact Information:
          Name: ${data.contact_info.name}
          Email: ${data.contact_info.email}
          Phone: ${data.contact_info.phone || 'Not provided'}
          Company: ${data.contact_info.company || 'Not provided'}
          
          Preferred Contact Method: ${data.preferred_contact_method}
        `,
      };

      // Here you would typically send the email through your backend
      console.log('Email notification:', emailData);

      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error sending message:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-brand-dark">Your Information</h3>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('contact_info.name')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.contact_info?.name && (
              <p className="mt-1 text-sm text-red-600">{errors.contact_info.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('contact_info.email')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.contact_info?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.contact_info.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              {...register('contact_info.phone')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              {...register('contact_info.company')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Preferred Contact Method
          </label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="email"
                {...register('preferred_contact_method')}
                className="text-brand-light focus:ring-brand-light/20"
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="phone"
                {...register('preferred_contact_method')}
                className="text-brand-light focus:ring-brand-light/20"
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>
          {errors.preferred_contact_method && (
            <p className="mt-1 text-sm text-red-600">{errors.preferred_contact_method.message}</p>
          )}
        </div>
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}