/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from '@react-three/fiber'

import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  Stats,
} from '@react-three/drei'

import { MyLambertMaterial, MyNormalMaterial, MyPhongMaterial, MyStandardMaterial } from '../scenes'

export const Materials = () => {
  return (
    <>
      <Canvas
        className='canvas'
        shadows
        camera={{ position: [0, 0, 3], fov: 75, near: 0.1, far: 1000 }}
      >
        {/* <MyBasicMaterial /> */}
        {/* <MyNormalMaterial/> */}
        {/* <MyLambertMaterial /> */}
        {/* <MyPhongMaterial/> */}
        <MyStandardMaterial/>

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
