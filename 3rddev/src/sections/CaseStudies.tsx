import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { CaseStudyCard } from '../components/CaseStudyCard';
import caseStudiesData from '../data/caseStudiesData.json';

export const CaseStudies: React.FC = () => {
  return (
    <SectionContainer id="case-studies" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-charcoal mb-6">
          From Concept to <span className="text-gradient">Market Success</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          See how we've helped businesses like yours overcome challenges and grow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudiesData.map((study, index) => (
          <div
            key={study.id}
            className={`opacity-0 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <CaseStudyCard
              client={study.client}
              industry={study.industry}
              challenge={study.challenge}
              solution={study.solution}
              result={study.result}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
