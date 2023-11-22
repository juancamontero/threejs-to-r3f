import * as THREE from 'three'
import { useControls, folder } from 'leva'

export const MyNormalMaterial = () => {
  const materialControls = useControls('Material', {
    transparent: false,
    opacity: { value: 1, min: 0, max: 1 },
    depTest: false,
    depthWrite: false,
    alphaTest: { value: 0, min: 0, max: 1 },
    'Normal Material': folder({
      color: 'white',
      wireframe: true,
      flatShading: false,
    }),
  }) as THREE.MeshNormalMaterialParameters

  const currentMaterial = new THREE.MeshNormalMaterial({
    wireframe: materialControls.wireframe,
    transparent: materialControls.transparent,
    opacity: materialControls.opacity,
    depthTest: materialControls.depthTest,
    depthWrite: materialControls.depthWrite,
    alphaTest: materialControls.alphaTest,
    flatShading: materialControls.flatShading,
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
