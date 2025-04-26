import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  children,
  className,
  variant = 'info',
  title,
  onClose,
}) => {
  const variants = {
    success: {
      icon: CheckCircleIcon,
      styles: 'bg-green-50 text-green-800',
      iconColor: 'text-green-400',
    },
    warning: {
      icon: ExclamationTriangleIcon,
      styles: 'bg-yellow-50 text-yellow-800',
      iconColor: 'text-yellow-400',
    },
    error: {
      icon: XCircleIcon,
      styles: 'bg-red-50 text-red-800',
      iconColor: 'text-red-400',
    },
    info: {
      icon: InformationCircleIcon,
      styles: 'bg-blue-50 text-blue-800',
      iconColor: 'text-blue-400',
    },
  };

  const Icon = variants[variant].icon;

  return (
    <div
      className={twMerge(
        'rounded-md p-4',
        variants[variant].styles,
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className={twMerge('h-5 w-5', variants[variant].iconColor)}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium">{title}</h3>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className={twMerge(
                  'inline-flex rounded-md p-1.5',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  variants[variant].styles.replace('bg-', 'hover:bg-').replace('50', '100')
                )}
              >
                <span className="sr-only">Dismiss</span>
                <XCircleIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert; 