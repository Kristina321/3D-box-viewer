import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./Box";
import { Buttons } from "./ZoomButton";
import { useApp } from "../useApp";
import "../styles/App.css";

export const App = () => {
  const {
    size,
    handleZoomIn,
    handleZoomOut,
    handleWheel,
  } = useApp();

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
    } return () => {
      if (canvas) {
        canvas.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);


  return (
    <div className="app">
      <Buttons
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
      />
      <Canvas
        ref={canvasRef}
        className="app__canvas"
        shadows
        camera={{
          fov: 50,
          position: [50, 50, 50],
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          position={[10, 50, 30]}
          intensity={5}
        />
        <directionalLight
          castShadow
          position={[-10, -50, -30]}
          intensity={3} />
        <OrbitControls enableZoom={false} />
        <Box
          scale={[size, size, size]}
          position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
