import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 300;

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function FloatingShapes() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = t * 0.1;
      mesh2Ref.current.rotation.z = t * 0.12;
      mesh2Ref.current.position.y = Math.cos(t * 0.4) * 0.4;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={mesh2Ref} position={[-3, 1, -3]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
      </mesh>
    </>
  );
}

const ParticleField = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <Particles />
      <FloatingShapes />
    </Canvas>
  </div>
);

export default ParticleField;
