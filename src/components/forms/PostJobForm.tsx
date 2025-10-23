import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const jobSchema = z.object({
  title: z.string().min(5, 'Job title must be at least 5 characters'),
  description: z.string().min(200, 'Job description must be at least 200 characters'),
  required_skills: z.array(z.string()).min(1, 'Select at least one required skill'),
  employment_type: z.enum(['full-time', 'part-time', 'contract', 'internship'], {
    required_error: 'Please select employment type',
  }),
  salary_range: z.object({
    min: z.number().min(0, 'Minimum salary must be greater than 0'),
    max: z.number().min(0, 'Maximum salary must be greater than 0'),
  }),
  location: z.string().min(2, 'Location is required'),
  industry: z.string().min(2, 'Please select an industry'),
  application_deadline: z.string().min(1, 'Application deadline is required'),
  qualifications: z.object({
    education: z.string().min(2, 'Education requirements are required'),
    experience_level: z.enum(['entry', 'mid', 'senior', 'expert'], {
      required_error: 'Please select experience level',
    }),
    certifications: z.array(z.string()).optional(),
  }),
  company_info: z.object({
    name: z.string().min(2, 'Company name is required'),
    website: z.string().url('Invalid website URL'),
    contact_email: z.string().email('Invalid email address'),
  }),
  benefits: z.array(z.string()).optional(),
  terms_accepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type JobFormData = z.infer<typeof jobSchema>;

const industries = [
  'AI',
  'Healthcare',
  'Finance',
  'IT',
  'Retail',
  'Manufacturing',
  'Education',
  'Other',
];

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

const benefits = [
  'Health Insurance',
  'Dental Insurance',
  'Vision Insurance',
  '401(k)',
  'Remote Work',
  'Flexible Hours',
  'Professional Development',
  'Stock Options',
  'Paid Time Off',
  'Parental Leave',
];

export function PostJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobFormData) => {
    try {
      const { error } = await supabase.from('jobs').insert([{
        ...data,
        status: 'active',
        posted_at: new Date().toISOString(),
      }]);

      if (error) throw error;

      reset();
      // Show success message
    } catch (error) {
      console.error('Error posting job:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-playfair">Post a Job</h2>
        <p className="text-brand-dark/70">
          Create a detailed job listing to attract the best AI talent for your organization.
        </p>
      </div>

      {/* Job Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold font-playfair">Job Information</h3>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-brand-dark mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="e.g., Senior AI Engineer"
            {...register('title')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-brand-dark mb-2">
            Job Description
          </label>
          <textarea
            id="description"
            rows={6}
            placeholder="Describe the role, responsibilities, and requirements..."
            {...register('description')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Required Skills
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <label key={skill} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={skill}
                  {...register('required_skills')}
                  className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
                />
                <span className="text-sm text-brand-dark/70">{skill}</span>
              </label>
            ))}
          </div>
          {errors.required_skills && (
            <p className="mt-1 text-sm text-red-600">{errors.required_skills.message}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Employment Type
            </label>
            <select
              {...register('employment_type')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            >
              <option value="">Select type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
            {errors.employment_type && (
              <p className="mt-1 text-sm text-red-600">{errors.employment_type.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Industry
            </label>
            <select
              {...register('industry')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            >
              <option value="">Select industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            {errors.industry && (
              <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Salary Range
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Min"
                  {...register('salary_range.min', { valueAsNumber: true })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
                />
              </div>
              <span className="text-brand-dark/70">-</span>
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Max"
                  {...register('salary_range.max', { valueAsNumber: true })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
                />
              </div>
            </div>
            {(errors.salary_range?.min || errors.salary_range?.max) && (
              <p className="mt-1 text-sm text-red-600">Please enter a valid salary range</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Application Deadline
            </label>
            <input
              type="date"
              {...register('application_deadline')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.application_deadline && (
              <p className="mt-1 text-sm text-red-600">{errors.application_deadline.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold font-playfair">Qualifications</h3>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Education Required
          </label>
          <input
            type="text"
            placeholder="e.g., Bachelor's in Computer Science"
            {...register('qualifications.education')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.qualifications?.education && (
            <p className="mt-1 text-sm text-red-600">{errors.qualifications.education.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Experience Level
          </label>
          <select
            {...register('qualifications.experience_level')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          >
            <option value="">Select level</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
            <option value="expert">Expert Level</option>
          </select>
          {errors.qualifications?.experience_level && (
            <p className="mt-1 text-sm text-red-600">{errors.qualifications.experience_level.message}</p>
          )}
        </div>
      </div>

      {/* Company Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold font-playfair">Company Information</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Company Name
            </label>
            <input
              type="text"
              {...register('company_info.name')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_info?.name && (
              <p className="mt-1 text-sm text-red-600">{errors.company_info.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Company Website
            </label>
            <input
              type="url"
              {...register('company_info.website')}
              className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
            />
            {errors.company_info?.website && (
              <p className="mt-1 text-sm text-red-600">{errors.company_info.website.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-dark mb-2">
            Contact Email
          </label>
          <input
            type="email"
            {...register('company_info.contact_email')}
            className="w-full px-4 py-2 rounded-lg border border-brand-dark/10 focus:border-brand-light focus:ring-2 focus:ring-brand-light/20"
          />
          {errors.company_info?.contact_email && (
            <p className="mt-1 text-sm text-red-600">{errors.company_info.contact_email.message}</p>
          )}
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold font-playfair">Benefits</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {benefits.map((benefit) => (
            <label key={benefit} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={benefit}
                {...register('benefits')}
                className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
              />
              <span className="text-sm text-brand-dark/70">{benefit}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register('terms_accepted')}
            className="rounded border-brand-dark/10 text-brand-light focus:ring-brand-light/20"
          />
          <label className="text-sm text-brand-dark/70">
            I agree to the{' '}
            <Link to="/terms" className="text-brand-light hover:text-brand-light/80">
              Terms and Conditions
            </Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-brand-light hover:text-brand-light/80">
              Privacy Policy
            </Link>
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
          {isSubmitting ? 'Posting Job...' : 'Post Job'}
        </button>
      </div>
    </form>
  );
}