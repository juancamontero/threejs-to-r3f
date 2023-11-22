import * as THREE from 'three'
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  Stats,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'

export const Geometries = () => {
  const materialControls = useControls({
    transparent: false,
    wireframe: true,
    color: 'red',
    opacity: { value: 1, min: 0, max: 1 },
    depTest: false,
    depthWrite: false,
    alphaTest: { value: 1, min: 0, max: 1 },
  }) as THREE.MeshBasicMaterialParameters

  const myBasicMaterial = new THREE.MeshBasicMaterial({
    color: materialControls.color,
    wireframe: materialControls.wireframe,
    transparent: materialControls.transparent,
    opacity: materialControls.opacity,
    depthTest: materialControls.depthTest,
    depthWrite: materialControls.depthWrite,
    alphaTest: materialControls.alphaTest,
    
  })

  const myNormalMaterial = new THREE.MeshNormalMaterial({
    wireframe: materialControls.wireframe,
    transparent: materialControls.transparent,
    opacity: materialControls.opacity,
  })

  const boxGeometry = new THREE.BoxGeometry()
  const sphereGeometry = new THREE.SphereGeometry()
  const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0)
  const planeGeometry = new THREE.PlaneGeometry()
  const torusKnotGeometry = new THREE.TorusKnotGeometry()

  return (
    <>
      <Canvas
        className='canvas'
        shadows
        camera={{ position: [0, 1, 5], fov: 75, near: 0.1, far: 1000 }}
      >
        <mesh
          position={[5, 0, 0]}
          material={myBasicMaterial}
          geometry={boxGeometry}
        />
        <mesh
          position={[3, 0, 0]}
          material={myNormalMaterial}
          geometry={sphereGeometry}
        />
        <mesh
          position={[0, 0, 0]}
          material={myBasicMaterial}
          geometry={icosahedronGeometry}
        />
        <mesh
          position={[-2, 0, 0]}
          material={myBasicMaterial}
          geometry={planeGeometry}
        />
        <mesh
          position={[-5, 0, 0]}
          material={myBasicMaterial}
          geometry={torusKnotGeometry}
        />
        <mesh>
          <meshBasicMaterial />
        </mesh>

        {/* HELPERS*/}
        <Grid args={[15, 8]} />
        <OrbitControls />
        <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor='white'
          />
        </GizmoHelper>
        <Stats />
      </Canvas>
    </>
  )
}
