import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../../lib/supabase';

const quoteSchema = z.object({
  project_id: z.string().uuid(),
  price_amount: z.number().min(1, 'Price must be greater than 0'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  projectId: string;
  projectTitle: string;
}

export function QuoteForm({ projectId, projectTitle }: QuoteFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      project_id: projectId,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const { error } = await supabase.from('quotes').insert([{
        ...data,
        status: 'pending',
      }]);

      if (error) throw error;

      reset();
      // Show success message
    } catch (error) {
      console.error('Error submitting quote:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-playfair">Submit Quote</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900">Project: {projectTitle}</h3>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="price_amount" className="block text-sm font-medium text-gray-700">
            Quoted Price ($)
          </label>
          <input
            type="number"
            id="price_amount"
            min="0"
            step="0.01"
            {...register('price_amount', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.price_amount && (
            <p className="mt-1 text-sm text-red-600">{errors.price_amount.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Quote Description
          </label>
          <textarea
            id="description"
            rows={6}
            {...register('description')}
            placeholder="Describe your approach, timeline, and why you're the best fit for this project..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting Quote...' : 'Submit Quote'}
        </button>
      </div>
    </form>
  );
}