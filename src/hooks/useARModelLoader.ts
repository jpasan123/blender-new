import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from '../utils/deviceDetection';

interface UseARModelLoaderProps {
  redirectDelay?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: string) => void;
}

export const useARModelLoader = ({
  redirectDelay = 15000,
  onLoadStart,
  onLoadComplete,
  onLoadError
}: UseARModelLoaderProps = {}) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const loadStartTime = useRef<number>(Date.now());
  const modelLoadedTime = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      loadStartTime.current = Date.now();
      onLoadStart?.();
    }
  }, [isLoading, onLoadStart]);

  useEffect(() => {
    let redirectTimer: NodeJS.Timeout;

    if (isModelLoaded && !error) {
      modelLoadedTime.current = Date.now();
      const loadTime = modelLoadedTime.current - loadStartTime.current;
      const baseDelay = Math.max(0, redirectDelay - loadTime);
      
      // Add extra time for mobile devices
      const finalDelay = isMobile() ? baseDelay + 8000 : baseDelay;

      console.log(`Setting up redirect timer for ${finalDelay}ms`);
      
      redirectTimer = setTimeout(() => {
        console.log('Redirecting to thank you page');
        onLoadComplete?.();
        navigate('/thank-you');
      }, finalDelay);
    }

    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [isModelLoaded, error, redirectDelay, navigate, onLoadComplete]);

  const handleModelLoad = () => {
    console.log('Model loaded successfully');
    setIsModelLoaded(true);
    setIsLoading(false);
  };

  const handleError = (error: Error | string) => {
    const errorMessage = error instanceof Error ? error.message : error;
    console.error('Model loading error:', errorMessage);
    setError(errorMessage);
    setIsLoading(false);
    onLoadError?.(errorMessage);
  };

  return {
    isModelLoaded,
    isLoading,
    error,
    handleModelLoad,
    handleError
  };
};