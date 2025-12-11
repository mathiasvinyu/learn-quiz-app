import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface PricingCardProps {
  tier: string;
  bestFor: string;
  value: string;
  cta: string;
  recommended?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  bestFor,
  value,
  cta,
  recommended = false
}) => {
  return (
    <div className="relative">
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="gradient-accent text-charcoal px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Recommended
          </span>
        </div>
      )}
      <Card className={`h-full flex flex-col ${recommended ? 'border-2 border-accent scale-105' : ''}`}>
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-bold font-display text-charcoal">{tier}</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Best For</p>
              <p className="text-gray-700 mt-1">{bestFor}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Value</p>
              <p className="text-gray-700 mt-1">{value}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button variant={recommended ? 'primary' : 'secondary'} className="w-full">
            {cta}
          </Button>
        </div>
      </Card>
    </div>
  );
};
