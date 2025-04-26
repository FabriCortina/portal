import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({
  children,
  className,
  onSubmit,
  ...props
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={twMerge('space-y-6', className)}
      {...props}
    >
      {children}
    </form>
  );
};

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div className={twMerge('space-y-2', className)}>
      {children}
    </div>
  );
};

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className,
  required,
  ...props
}) => {
  return (
    <label
      className={twMerge(
        'block text-sm font-medium text-gray-700',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-red-500" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};

interface FormErrorProps {
  children: React.ReactNode;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({
  children,
  className,
}) => {
  if (!children) return null;

  return (
    <p
      className={twMerge(
        'mt-2 text-sm text-red-600',
        className
      )}
    >
      {children}
    </p>
  );
};

interface FormHelperTextProps {
  children: React.ReactNode;
  className?: string;
}

export const FormHelperText: React.FC<FormHelperTextProps> = ({
  children,
  className,
}) => {
  if (!children) return null;

  return (
    <p
      className={twMerge(
        'mt-2 text-sm text-gray-500',
        className
      )}
    >
      {children}
    </p>
  );
};

interface FormActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const FormActions: React.FC<FormActionsProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-end space-x-2',
        className
      )}
    >
      {children}
    </div>
  );
}; 