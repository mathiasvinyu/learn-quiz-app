import React from 'react';
import { Button } from '../components/Button';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-charcoal leading-tight">
              Transform Your Idea Into an{' '}
              <span className="text-gradient">App Users Love</span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Great ideas fail with poor user experience. Clunky navigation and confusing design
                drive users away, costing you engagement and revenue.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We bridge the gap between your vision and user delight. 3rd Edge Creative designs
                and develops intuitive, beautiful, and high-performing digital products that solve
                real problems and drive growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="#contact" variant="primary">
                Start Your Project →
              </Button>
              <Button href="#pricing" variant="secondary">
                Book a Free Consult
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 gradient-primary rounded-[3rem] animate-pulse-slow glow-primary opacity-20" />
              <div className="absolute inset-8 gradient-accent rounded-[2.5rem] animate-pulse-slow glow-accent opacity-30 animation-delay-150" />
              <div className="absolute inset-16 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-32 h-32 text-primary animate-pulse-slow" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-50 blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-30 blur-3xl animate-pulse-slow animation-delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
