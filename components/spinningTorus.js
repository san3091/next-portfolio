import React from 'react'
import dynamic from 'next/dynamic'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const SpinningTorus= () => (
  <P5Wrapper sketch={sketch} />
)

const sketch = p => {
  let rateX, rateY 
  p.setup = () => {
    p.createCanvas(250, 250, p.WEBGL)
    rateX = generateRotationRate()
    rateY = generateRotationRate()
  }

  p.draw = () => {
    
    p.clear()
    p.rotateX(p.frameCount * rateX)
    p.rotateY(p.frameCount * rateY)
    p.torus(45, 20)
  }
}

const generateRotationRate = () => Math.random() * (0.035 - 0.005) + 0.005

export default SpinningTorus 
