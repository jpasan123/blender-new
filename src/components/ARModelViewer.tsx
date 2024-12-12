import React, { Suspense } from 'react';
import { Scene } from './3d/Scene';
import { ErrorBoundary } from './ErrorBoundary';
import LoadingScreen from './LoadingScreen';
import { useARModelLoader } from '../hooks/useARModelLoader';
import { ARViewerCanvas } from './ar/ARViewerCanvas';
import { ARLoadingOverlay } from './ar/ARLoadingOverlay';
import { ARErrorMessage } from './ar/ARErrorMessage';
import { CameraView } from './ar/CameraView';

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
    <div className="relative w-full h-full">
      <CameraView onError={handleError}>
        <ErrorBoundary onError={handleError}>
          <Suspense fallback={<LoadingScreen />}>
            <ARViewerCanvas>
              <Scene onLoaded={handleModelLoad} onError={handleError} />
            </ARViewerCanvas>
          </Suspense>
        </ErrorBoundary>

        {error && <ARErrorMessage message={error} />}
        {isLoading && !isModelLoaded && !error && <ARLoadingOverlay />}
      </CameraView>
    </div>
  );
};

export default ARModelViewer;