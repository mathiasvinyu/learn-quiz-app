import React from 'react';
import { Card } from './Card';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  client,
  industry,
  challenge,
  solution,
  result
}) => {
  return (
    <Card className="group relative overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold font-display text-charcoal">{client}</h3>
            <p className="text-sm text-gray-500 mt-1">{industry}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Challenge</p>
            <p className="text-gray-700 mt-1">{challenge}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Solution</p>
            <p className="text-gray-700 mt-1">{solution}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-accent uppercase tracking-wider">Result</p>
            <p className="text-charcoal font-semibold mt-1">{result}</p>
          </div>
        </div>
      </div>
      <button className="relative mt-6 flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors">
        Read Full Story
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </Card>
  );
};
