import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { ServiceCard } from '../components/ServiceCard';
import servicesData from '../data/servicesData.json';

export const Services: React.FC = () => {
  return (
    <SectionContainer id="services" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-charcoal mb-6">
          Our End-to-End{' '}
          <span className="text-gradient">Digital Product Expertise</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <ServiceCard
              title={service.title}
              icon={service.icon}
              process={service.process}
              outcome={service.outcome}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
