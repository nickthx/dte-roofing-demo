import React from 'react';
import { Calculator } from 'lucide-react';

interface RoofQuoteButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const RoofQuoteButton: React.FC<RoofQuoteButtonProps> = ({
  text = "Get Instant Roof Quote",
  variant = 'primary',
  icon = true
}) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).RoofleWidget) {
      (window as any).RoofleWidget.open();
    }
  };

  const baseClasses = "px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1";

  const variantClasses = {
    primary: "bg-primary-700 text-white hover:bg-primary-800",
    secondary: "bg-white text-charcoal-900 hover:bg-gray-100 border-2 border-white hover:border-gray-200",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal-900"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon && <Calculator className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default RoofQuoteButton;
