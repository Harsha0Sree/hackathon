
import React from 'react';
import { Link } from 'react-router-dom';

interface GlassButtonProps {
  to: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  to, 
  variant = 'primary', 
  children,
  className = '' 
}) => {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <Link to={to} className={`${buttonClass} inline-block ${className}`}>
      {children}
    </Link>
  );
};

export default GlassButton;
