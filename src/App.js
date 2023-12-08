
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from './Model'

export default function Viewer() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage contactShadow shadows adjustCamera environment="city">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}