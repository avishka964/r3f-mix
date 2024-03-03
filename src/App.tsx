import { OrbitControls, Plane, useHelper, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { PointLight, PointLightHelper } from 'three';


const Terrain = () => {
  const terrainTexture = useTexture({
    map: "/textures/aerial_rocks_02_diff_4k.jpg",
    displacementMap: "/textures/aerial_rocks_02_disp_4k_edited.jpg",
    aoMap: "/textures/aerial_rocks_02_arm_4k_ao_edited.jpg",
    roughnessMap: "/textures/aerial_rocks_02_arm_4k_roughness_edited.jpg",
    metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
    normalMap: "/textures/aerial_rocks_02_nor_gl_4k_edited.jpg",
    alphaMap: "/textures/alpha.png",

  });
  return (
    <Plane args={[10, 10, 128, 128]} rotation-x={-Math.PI / 2}>
      <meshStandardMaterial {...terrainTexture} transparent />
    </Plane>
  );
};

const ThreeContent = () => {
  const lightRef = useRef<PointLight>(null);
  useHelper(lightRef, PointLightHelper, 1, "red");

  return (
    <>
      <ambientLight />
      <pointLight ref={lightRef} position={[5, 5, 0]} intensity={4} />
      <OrbitControls />
      <Terrain />
    </>
  );
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 10, 5] }}>
      <ThreeContent />

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
