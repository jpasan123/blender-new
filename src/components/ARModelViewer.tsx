import React, { Suspense } from 'react';
import { Scene } from './3d/Scene';
import { ErrorBoundary } from './ErrorBoundary';
import LoadingScreen from './LoadingScreen';
import { useARModelLoader } from '../hooks/useARModelLoader';
import { ARViewerCanvas } from './ar/ARViewerCanvas';
import { ARLoadingOverlay } from './ar/ARLoadingOverlay';
import { ARErrorMessage } from './ar/ARErrorMessage';

const ARModelViewer: React.FC = () => {
  const {
    isModelLoaded,
    isLoading,
    error,
    handleModelLoad,
    handleError
  } = useARModelLoader({
    redirectDelay: 15000,
    onLoadError: (err) => console.error('AR Model Error:', err)
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-auto touch-none select-none">
      <ErrorBoundary onError={handleError}>
        <Suspense fallback={<LoadingScreen />}>
          <ARViewerCanvas>
            <Scene onLoaded={handleModelLoad} onError={handleError} />
          </ARViewerCanvas>
        </Suspense>
      </ErrorBoundary>

      {error && <ARErrorMessage message={error} />}
      {isLoading && !isModelLoaded && !error && <ARLoadingOverlay />}
    </div>
  );
};

export default ARModelViewer;