import React from 'react';
import { ProjectForm } from '../components/forms/ProjectForm';

export function PostProject() {
  return (
    <div className="min-h-screen bg-brand-dark/5 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 font-playfair">
            Post Your AI Project
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Share your project details and get connected with the perfect AI agency for your needs.
          </p>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}