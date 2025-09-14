// app/components/LoadingSpinner.tsx - Reusable loading spinner component

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  color?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = 'md',
  text = 'Loading...',
  color = 'text-blue-600',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">{text}</span>
      </div>
      {text && (
        <span className={`text-sm ${color}`}>
          {text}
        </span>
      )}
    </div>
  );
}
