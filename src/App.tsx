import { ContactShadows, Float } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Boombox } from './Boombox';

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <orbitControls args={[camera, domElement]} />
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[1, 1, 1]} intensity={5} />
      <pointLight position={[-2, -2, 3]} />
      <Controls />
      <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        <Boombox />
      </Float>
      <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={20} far={10} />
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
