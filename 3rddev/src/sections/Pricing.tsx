import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { PricingCard } from '../components/PricingCard';
import pricingData from '../data/pricingData.json';

export const Pricing: React.FC = () => {
  return (
    <SectionContainer id="pricing" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-charcoal mb-6">
          Clear Plans, <span className="text-gradient">Tailored to Your Journey</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          From one-time builds to ongoing partnerships, we have a model that fits.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
        {pricingData.map((plan, index) => (
          <div
            key={plan.id}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <PricingCard
              tier={plan.tier}
              bestFor={plan.bestFor}
              value={plan.value}
              cta={plan.cta}
              recommended={plan.recommended}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
