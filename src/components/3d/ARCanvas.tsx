import React from 'react';
import { Canvas } from '@react-three/fiber';

interface ARCanvasProps {
  children: React.ReactNode;
}

export const ARCanvas: React.FC<ARCanvasProps> = ({ children }) => {
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
        userSelect: 'none'
      }}
      camera={{ 
        position: [0, 0, 5],
        fov: 85,
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