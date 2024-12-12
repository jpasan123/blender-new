import React, { useRef, useEffect, useState } from 'react';

interface CameraViewProps {
  children: React.ReactNode;
  onError: (error: string) => void;
}

export const CameraView: React.FC<CameraViewProps> = ({ children, onError }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          await videoRef.current.play();
          setIsCameraReady(true);
        }
      } catch (error) {
        console.error('Camera access error:', error);
        onError('Failed to access camera. Please ensure camera permissions are granted.');
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onError]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted
        style={{
          transform: 'scaleX(-1)',
          WebkitTransform: 'scaleX(-1)',
          zIndex: 10
        }}
      />
      {isCameraReady && (
        <div className="absolute inset-0 z-20">
          {children}
        </div>
      )}
    </div>
  );
};