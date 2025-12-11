import React from 'react';
import { Button } from '../components/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden gradient-dark">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container relative z-10 max-w-4xl px-6 mx-auto text-center md:px-12 lg:px-20">
        <div className="space-y-8 animate-fade-up">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-display">
            Ready to Build Something{' '}
            <span className="text-transparent gradient-accent bg-clip-text">Extraordinary?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300 md:text-2xl">
            Your vision, our expertise. Let's create a digital product that stands out and drives results.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Button variant="primary" className="animate-pulse-slow">
              Start Your Project Today
            </Button>
            <Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-charcoal">
              Book a Free 30-Min Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute rounded-full top-1/4 -left-24 w-96 h-96 bg-primary opacity-10 blur-3xl" />
      <div className="absolute rounded-full bottom-1/4 -right-24 w-96 h-96 bg-accent opacity-10 blur-3xl" />
    </section>
  );
};
