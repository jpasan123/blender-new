import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CANVAS_SETTINGS } from '../../config/arSettings';

interface ARViewerCanvasProps {
  children: React.ReactNode;
}

export const ARViewerCanvas: React.FC<ARViewerCanvasProps> = ({ children }) => {
  return (
    <Canvas
      style={CANVAS_SETTINGS.style}
      camera={CANVAS_SETTINGS.camera}
      gl={CANVAS_SETTINGS.gl}
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