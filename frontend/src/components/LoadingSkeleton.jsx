import React from 'react';
import { Skeleton } from './ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Skeleton className="h-8 w-12 bg-gray-800" />
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <Skeleton key={item} className="h-5 w-20 bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <Skeleton className="h-16 w-96 mx-auto bg-gray-800" />
            <div className="flex items-center justify-center gap-4">
              <Skeleton className="h-8 w-48 bg-gray-800" />
              <Skeleton className="h-8 w-32 bg-gray-800" />
            </div>
            <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-gray-800" />
            <div className="flex items-center justify-center gap-4 pt-8">
              <Skeleton className="h-12 w-40 bg-gray-800" />
              <Skeleton className="h-12 w-40 bg-gray-800" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-48 mx-auto bg-gray-800 mb-4" />
            <Skeleton className="h-1 w-20 mx-auto bg-gray-800" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Skeleton className="h-4 w-full bg-gray-800" />
              <Skeleton className="h-4 w-full bg-gray-800" />
              <Skeleton className="h-4 w-3/4 bg-gray-800" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <Skeleton key={item} className="h-20 w-full bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto bg-gray-800 mb-4" />
            <Skeleton className="h-1 w-20 mx-auto bg-gray-800" />
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <Skeleton key={item} className="h-48 w-full bg-gray-800" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-72 mx-auto bg-gray-800 mb-4" />
            <Skeleton className="h-1 w-20 mx-auto bg-gray-800" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Skeleton key={item} className="h-64 w-full bg-gray-800" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;