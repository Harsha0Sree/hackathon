
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
          <Icon className="h-8 w-8 text-verdex-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
