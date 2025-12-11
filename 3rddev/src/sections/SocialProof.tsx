import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import clientLogosData from '../data/clientLogosData.json';

export const SocialProof: React.FC = () => {
  return (
    <SectionContainer background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-charcoal">
          Trusted by <span className="text-gradient">Innovative Brands</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {clientLogosData.map((client, index) => (
          <div
            key={client.id}
            className="w-full h-24 flex items-center justify-center opacity-0 animate-fade-in grayscale hover:grayscale-0 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-gray-400">{client.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
