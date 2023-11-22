// It is useful for simulating shiny objects such as polished wood.
// It is more computationally-expensive to use than the MeshLambertMaterial,

import * as THREE from 'three'
import { useCubeTexture, useTexture } from '@react-three/drei'
import { useControls, folder } from 'leva'

export const MyStandardMaterial = () => {
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
    opacity: { value: 1, min: 0, max: 1 },
    depTest: false,
    depthWrite: false,
    alphaTest: { value: 0, min: 0, max: 1 },
    'Standard Material': folder({
      wireframe: true,
      wireframeLinewidth: { value: 1, min: 0, max: 10 },
      color: 'white',
      emissive: 'blue',
      metalness: { value: 0, min: 0, max: 1 },
      roughness: { value: 0, min: 0, max: 1 },
      combine: { options: [1, 2, 0], value: 0 },
    }),
  }) as THREE.MeshStandardMaterialParameters

  const currentMaterial = new THREE.MeshStandardMaterial({
    color: materialControls.color,
    wireframe: materialControls.wireframe,
    transparent: materialControls.transparent,
    opacity: materialControls.opacity,
    depthTest: materialControls.depthTest,
    depthWrite: materialControls.depthWrite,
    alphaTest: materialControls.alphaTest,
    map: texture,
    envMap: cubeTexture,
    emissive: materialControls.emissive,
    wireframeLinewidth: materialControls.wireframeLinewidth,
    roughness: materialControls.roughness,
    metalness: materialControls.metalness,
  })

  const boxGeometry = new THREE.BoxGeometry()
  const sphereGeometry = new THREE.SphereGeometry()
  const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0)
  const planeGeometry = new THREE.PlaneGeometry()
  const torusKnotGeometry = new THREE.TorusKnotGeometry()
  return (
    <>
      <pointLight color='0xffff' intensity={1000} position={[10, 10, 10]} />
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
