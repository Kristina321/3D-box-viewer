import { useRef } from "react";
import { Mesh } from "three";
import { extend } from "@react-three/fiber";

extend({ Mesh });

export const Box = (props) => {
  const meshRef = useRef(null);

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial
        receiveShadow
        metalness={0.75}
        roughness={0.25}
        color={0x7cfc00}
      />
    </mesh>
  );
}
