import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, DoubleSide, PerspectiveCamera } from 'three';

const Box = () => {

  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' side={DoubleSide} />
    </mesh>
  );
};

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <orbitControls args={[camera, domElement]} />
  );
};

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <group position={[0, 0, 2]}><cameraHelper args={[camera]} />
  </group>
}

const ThreeScene = () => {
  return (
    <Canvas camera={{position: [0, 0, 2], fov: 60, near: 1, far: 3}}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-3, -3, 2]} />
      <Controls />
      <Box />
      <CameraHelper />
    </Canvas>
  );
};

const App = () => {
  return (
    <div>
      <ThreeScene />
    </div>
  );
};

export default App;
