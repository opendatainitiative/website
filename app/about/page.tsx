import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">About Open Data Initiative</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The Open Data Initiative to improve transparency and efficiency in government operations through data-driven analysis.
          </p>
        </section>
      </div>
    </div>
  );
}