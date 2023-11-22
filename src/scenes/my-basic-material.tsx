import * as THREE from 'three'
import { useCubeTexture, useTexture } from '@react-three/drei'
import { useControls, folder  } from 'leva'

export const MyBasicMaterial = () => {
  const texture = useTexture('/imgs/grid.webp')
  const cubeTexture = useCubeTexture(
    [
      'px_50.webp',
      'nx_50.webp',
      'py_50.webp',
      'ny_50.webp',
      'pz_50.webp',
      'nz_50.webp',
    ],
    { path: '/imgs/' }
  )
  cubeTexture.mapping = THREE.CubeReflectionMapping 
//   cubeTexture.mapping=THREE.CubeRefractionMapping

  const materialControls = useControls('Material', {
    transparent: false,
    wireframe: true,
    opacity: { value: 1, min: 0, max: 1 },
    depTest: false,
    depthWrite: false,
    alphaTest: { value: 0, min: 0, max: 1 },
    'Basic Material': folder({
      color: 'white',
      reflectivity: { value: 0, min: 0, max: 1 },
      refractionRatio: { value: 0, min: 0, max: 1 },
      combine: {options :[1, 2, 0] , value: 0 }
    }),
  }) as THREE.MeshBasicMaterialParameters

  const currentMaterial = new THREE.MeshBasicMaterial({
    color: materialControls.color,
    wireframe: materialControls.wireframe,
    transparent: materialControls.transparent,
    opacity: materialControls.opacity,
    depthTest: materialControls.depthTest,
    depthWrite: materialControls.depthWrite,
    alphaTest: materialControls.alphaTest,
    map: texture,
    envMap: cubeTexture,
    reflectivity: materialControls.reflectivity,
    refractionRatio: materialControls.refractionRatio,
    combine: materialControls.combine //   MultiplyOperation: 0 , MixOperation: 1 ,AddOperation: 2
    
  })


  const boxGeometry = new THREE.BoxGeometry()
  const sphereGeometry = new THREE.SphereGeometry()
  const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0)
  const planeGeometry = new THREE.PlaneGeometry()
  const torusKnotGeometry = new THREE.TorusKnotGeometry()
  return (
    <>
      <mesh
        position={[5, 0, 0]}
        material={currentMaterial}
        geometry={boxGeometry}
      />
      <mesh
        position={[3, 0, 0]}
        material={currentMaterial}
        geometry={sphereGeometry}
      />
      <mesh
        position={[0, 0, 0]}
        material={currentMaterial}
        geometry={icosahedronGeometry}
      />
      <mesh
        position={[-2, 0, 0]}
        material={currentMaterial}
        geometry={planeGeometry}
      />
      <mesh
        position={[-5, 0, 0]}
        material={currentMaterial}
        geometry={torusKnotGeometry}
      />
    </>
  )
}
