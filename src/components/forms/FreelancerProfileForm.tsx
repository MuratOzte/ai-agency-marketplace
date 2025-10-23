import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const freelancerSchema = z.object({
  personal_info: z.object({
    full_name: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    location: z.string().min(2, 'Location is required'),
  }),
  professional_info: z.object({
    job_title: z.string().min(2, 'Job title is required'),
    bio: z.string().min(200, 'Bio must be at least 200 characters'),
    skills: z.array(z.string()).min(1, 'Select at least one skill'),
    experience_level: z.enum(['entry', 'mid', 'senior', 'expert'], {
      required_error: 'Please select experience level',
    }),
    industries: z.array(z.string()).min(1, 'Select at least one industry'),
  }),
  portfolio: z.object({
    portfolio_url: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
    linkedin_url: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
    github_url: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
    work_samples: z.array(z.string()).optional(),
  }),
  availability: z.object({
    status: z.enum(['available', 'part-time', 'not-available'], {
      required_error: 'Please select availability status',
    }),
    hourly_rate: z.number().min(0, 'Hourly rate must be greater than 0'),
    preferred_hours: z.string().min(2, 'Please specify preferred working hours'),
  }),
  education_certifications: z.object({
    education: z.string().min(2, 'Education details are required'),
    certifications: z.array(z.string()).optional(),
  }),
  terms_accepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type FreelancerFormData = z.infer<typeof freelancerSchema>;

const skills = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Deep Learning',
  'Data Science',
  'AI Development',
  'Cloud Computing',
  'Docker',
  'Kubernetes',
];

const industries = [
  'AI',
  'Data Science',
  'Finance',
  'Healthcare',
  'IT',
  'Retail',
  'Manufacturing',
  'Education',
  'Other',
];

export function FreelancerProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FreelancerFormData>({
    resolver: zodResolver(freelancerSchema),
  });

  const onSubmit = async (data: FreelancerFormData) => {
    try {
      const { error } = await supabase.from('freelancers').insert([{
        ...data,
        status: 'active',
        created_at: new Date().toISOString(),
      }]);

      if (error) throw error;

      reset();
      // Show success message
    } catch (error) {
      console.error('Error creating freelancer profile:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark font-playfair">Personal Information</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-brand-dark mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              {...register('personal_info.full_name')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.personal_info?.full_name && (
              <p className="mt-1 text-sm text-red-600">{errors.personal_info.full_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register('personal_info.email')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.personal_info?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.personal_info.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              {...register('personal_info.phone')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-brand-dark mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="City, Country or Remote"
              {...register('personal_info.location')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.personal_info?.location && (
              <p className="mt-1 text-sm text-red-600">{errors.personal_info.location.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark font-playfair">Professional Information</h2>

        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-brand-dark mb-2">
            Job Title/Role
          </label>
          <input
            type="text"
            id="job_title"
            placeholder="e.g., AI Developer, Machine Learning Engineer"
            {...register('professional_info.job_title')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.professional_info?.job_title && (
            <p className="mt-1 text-sm text-red-600">{errors.professional_info.job_title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-brand-dark mb-2">
            Professional Bio
          </label>
          <textarea
            id="bio"
            rows={6}
            {...register('professional_info.bio')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.professional_info?.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.professional_info.bio.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Skills & Expertise
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <label key={skill} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={skill}
                  {...register('professional_info.skills')}
                  className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
                />
                <span className="text-sm text-brand-dark/70">{skill}</span>
              </label>
            ))}
          </div>
          {errors.professional_info?.skills && (
            <p className="mt-1 text-sm text-red-600">{errors.professional_info.skills.message}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Experience Level
            </label>
            <select
              {...register('professional_info.experience_level')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            >
              <option value="">Select level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="expert">Expert Level</option>
            </select>
            {errors.professional_info?.experience_level && (
              <p className="mt-1 text-sm text-red-600">{errors.professional_info.experience_level.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Industry Experience
            </label>
            <select
              multiple
              {...register('professional_info.industries')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            {errors.professional_info?.industries && (
              <p className="mt-1 text-sm text-red-600">{errors.professional_info.industries.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark font-playfair">Portfolio & Work Samples</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="portfolio_url" className="block text-sm font-medium text-brand-dark mb-2">
              Portfolio URL
            </label>
            <input
              type="url"
              id="portfolio_url"
              {...register('portfolio.portfolio_url')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.portfolio?.portfolio_url && (
              <p className="mt-1 text-sm text-red-600">{errors.portfolio.portfolio_url.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="linkedin_url" className="block text-sm font-medium text-brand-dark mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin_url"
              {...register('portfolio.linkedin_url')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.portfolio?.linkedin_url && (
              <p className="mt-1 text-sm text-red-600">{errors.portfolio.linkedin_url.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="github_url" className="block text-sm font-medium text-brand-dark mb-2">
            GitHub Profile
          </label>
          <input
            type="url"
            id="github_url"
            {...register('portfolio.github_url')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.portfolio?.github_url && (
            <p className="mt-1 text-sm text-red-600">{errors.portfolio.github_url.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="work_samples" className="block text-sm font-medium text-brand-dark mb-2">
            Work Samples/Case Studies
          </label>
          <textarea
            id="work_samples"
            rows={4}
            placeholder="List your relevant work samples or case studies (one per line)"
            {...register('portfolio.work_samples')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
        </div>
      </div>

      {/* Availability & Rates */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark font-playfair">Availability & Rates</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Current Availability
            </label>
            <select
              {...register('availability.status')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            >
              <option value="">Select availability</option>
              <option value="available">Available for new projects</option>
              <option value="part-time">Available part-time</option>
              <option value="not-available">Not available</option>
            </select>
            {errors.availability?.status && (
              <p className="mt-1 text-sm text-red-600">{errors.availability.status.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="hourly_rate" className="block text-sm font-medium text-brand-dark mb-2">
              Hourly Rate (USD)
            </label>
            <input
              type="number"
              id="hourly_rate"
              {...register('availability.hourly_rate', { valueAsNumber: true })}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.availability?.hourly_rate && (
              <p className="mt-1 text-sm text-red-600">{errors.availability.hourly_rate.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="preferred_hours" className="block text-sm font-medium text-brand-dark mb-2">
            Preferred Working Hours/Time Zone
          </label>
          <input
            type="text"
            id="preferred_hours"
            placeholder="e.g., GMT+1, 9 AM - 5 PM"
            {...register('availability.preferred_hours')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.availability?.preferred_hours && (
            <p className="mt-1 text-sm text-red-600">{errors.availability.preferred_hours.message}</p>
          )}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark font-playfair">Education & Certifications</h2>

        <div>
          <label htmlFor="education" className="block text-sm font-medium text-brand-dark mb-2">
            Education
          </label>
          <textarea
            id="education"
            rows={3}
            placeholder="e.g., Master's in Computer Science, Stanford University"
            {...register('education_certifications.education')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.education_certifications?.education && (
            <p className="mt-1 text-sm text-red-600">{errors.education_certifications.education.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="certifications" className="block text-sm font-medium text-brand-dark mb-2">
            Certifications (Optional)
          </label>
          <textarea
            id="certifications"
            rows={3}
            placeholder="List your relevant certifications (one per line)"
            {...register('education_certifications.certifications')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            {...register('terms_accepted')}
            className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
          />
          <label htmlFor="terms" className="text-sm text-brand-dark/70">
            I agree to the{' '}
            <a href="/terms" className="text-brand-light hover:text-brand-light/80">
              Terms and Conditions
            </a>
            {' '}and{' '}
            <a href="/privacy" className="text-brand-light hover:text-brand-light/80">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.terms_accepted && (
          <p className="text-sm text-red-600">{errors.terms_accepted.message}</p>
        )}
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Creating Profile...' : 'Create Freelancer Profile'}
        </button>
      </div>
    </form>
  );
}