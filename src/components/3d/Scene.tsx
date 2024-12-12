import React, { useEffect } from 'react';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { ModelLoader } from './ModelLoader';
import { isMobile } from '../../utils/deviceDetection';

interface SceneProps {
  onLoaded?: () => void;
  onError?: (error: Error) => void;
}

export const Scene: React.FC<SceneProps> = ({ onLoaded, onError }) => {
  useEffect(() => {
    // Only notify parent when scene is actually mounted and ready
    const timeout = setTimeout(() => {
      onLoaded?.();
    }, 1000); // Give a small delay to ensure everything is ready

    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, isMobile() ? 5 : 4]}
        fov={isMobile() ? 75 : 70}
        near={0.1}
        far={1000}
      />
      
      <ModelLoader 
        onLoad={() => {
          console.log('Model loaded in Scene');
          onLoaded?.();
        }} 
        onError={onError} 
      />
      
      <Environment preset="sunset" />
      
      <ambientLight intensity={1.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={1}
      />
      <directionalLight 
        position={[0, -5, 0]} 
        intensity={0.5}
      />
      
      <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        minDistance={isMobile() ? 2 : 1.5}
        maxDistance={isMobile() ? 10 : 8}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={isMobile() ? 0.5 : 1}
        target={[0, 0, 0]}
        makeDefault
      />
    </>
  );
};