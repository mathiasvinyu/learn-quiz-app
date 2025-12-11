import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { Card } from '../components/Card';
import * as LucideIcons from 'lucide-react';
import featuresData from '../data/featuresData.json';

export const Differentiator: React.FC = () => {
  return (
    <SectionContainer background="light">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-charcoal mb-6">
          The 3rd Edge Difference: Where Strategic Design Meets{' '}
          <span className="text-gradient">Flawless Engineering</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We don't just build apps; we build business assets. Our integrated process ensures
          every pixel and line of code serves a strategic purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => {
          const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Zap;

          return (
            <Card
              key={feature.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center glow-primary">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-primary font-semibold">
                  {feature.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
};
