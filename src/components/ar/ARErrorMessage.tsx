import React from 'react';

interface ARErrorMessageProps {
  message: string;
}

export const ARErrorMessage: React.FC<ARErrorMessageProps> = ({ message }) => (
  <div className="absolute top-4 left-4 right-4 bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
    {message}
  </div>
);