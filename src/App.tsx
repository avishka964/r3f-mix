import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

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
      <meshStandardMaterial color='pink' />
    </mesh>
  );
};

const Controls = () => {
  const {
    camera,
    gl: { domElement},
  } = useThree();

  return (
    <orbitControls args={[camera, domElement]} />
  )
}

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <axesHelper args={[10]}/>
      <Controls />
      <Box />
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
