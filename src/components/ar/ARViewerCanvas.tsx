import React from 'react';
import { Canvas } from '@react-three/fiber';
import { isMobile } from '../../utils/deviceDetection';

interface ARViewerCanvasProps {
  children: React.ReactNode;
}

export const ARViewerCanvas: React.FC<ARViewerCanvasProps> = ({ children }) => {
  const isMobileDevice = isMobile();

  return (
    <Canvas
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%',
        width: '100%', 
        height: '100%',
        transform: 'translate(-50%, -50%)',
        touchAction: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        zIndex: 2 // Ensure Canvas is above video but below UI elements
      }}
      camera={{ 
        position: [0, 0, isMobileDevice ? 3 : 5], // Adjust camera position for mobile
        fov: isMobileDevice ? 75 : 85, // Adjust field of view for mobile
        near: 0.1,
        far: 1000
      }}
      gl={{ 
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
      }}
      shadows
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      touch-action="none"
      eventSource={document.documentElement}
      eventPrefix="client"
    >
      {children}
    </Canvas>
  );
};