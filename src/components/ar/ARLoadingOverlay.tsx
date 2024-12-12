import React from 'react';

export const ARLoadingOverlay: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
    <div className="bg-white p-4 rounded-lg shadow-lg">
      Loading AR Model...
    </div>
  </div>
);