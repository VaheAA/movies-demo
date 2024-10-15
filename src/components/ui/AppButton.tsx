import { ReactNode } from 'react';

interface IButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

function AppButton(props: IButtonProps) {
  const { disabled, label, type, variant, className, onClick, icon, iconPosition = 'left' } = props;
  const baseClasses = `flex items-center justify-center gap-2 min-w-[240px] py-4 px-4 font-semibold rounded-[50px] focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all text-3xl ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const variantClasses = (() => {
    switch (variant) {
      case 'primary':
        return 'bg-white text-black hover:bg-blue-700 hover:text-white focus:ring-blue-400';
      case 'secondary':
        return 'bg-gradient-to-r from-blue-600 to-blue-900 text-white hover:from-white hover:to-white hover:text-black focus:ring-gray-400';
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400';
      default:
        return '';
    }
  })();

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex">{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
}

export default AppButton;
