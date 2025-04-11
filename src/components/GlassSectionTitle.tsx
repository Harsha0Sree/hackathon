
import React from 'react';

interface GlassSectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const GlassSectionTitle: React.FC<GlassSectionTitleProps> = ({ 
  title, 
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default GlassSectionTitle;
