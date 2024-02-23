import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls, folder, Leva, button } from 'leva';



const TweakableBox = () => {
  const [{ scale, color, wireframe, position }, set] = useControls("Box", () => ({
    transform: folder({
      scale: {
        value: 1,
        min: 0.4,
        max: 4,
        step: 0.2
      },
      position: [0, 0, 0]
    }),
    material: folder({
      color: '#333',
      wireframe: false
    }),
    reset: button(() => {
      set({
        scale: 1,
        position: [0, 0, 0],
        color: '#333',
        wireframe: false
      });
    })
  }));
  return (
    <Box scale={scale} position={position}>
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </Box>
  );
};


const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls />
      <TweakableBox />
    </Canvas>
  );
};

const App = () => {
  return (
    <div>
      {/* <Leva hidden /> */}
      <ThreeScene />
    </div>
  );
};

export default App;
