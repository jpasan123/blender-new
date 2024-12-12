export const CANVAS_SETTINGS = {
  style: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    touchAction: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none'
  },
  camera: {
    position: [0, 0, 5],
    fov: 85,
    near: 0.1,
    far: 1000
  },
  gl: {
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance' as const,
    logarithmicDepthBuffer: true
  }
};