import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Card } from './Card';

interface ServiceCardProps {
  title: string;
  icon: string;
  process: string;
  outcome: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, process, outcome }) => {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Zap;

  return (
    <Card className="group border-2 border-transparent hover:border-primary">
      <div className="flex flex-col items-start space-y-4">
        <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center group-hover:glow-primary transition-all duration-300">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold font-display text-charcoal">{title}</h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Process</p>
            <p className="text-gray-600 mt-1">{process}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Outcome</p>
            <p className="text-gray-600 mt-1">{outcome}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
