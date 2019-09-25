import React from 'react'
import dynamic from 'next/dynamic'
import SpinningTorus from './spinningTorus'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const MainBackground = () => (
  <div className="container">
    <div className="torus torus-top-right">
      <SpinningTorus />
    </div>
    <div className="torus torus-top-left">
      <SpinningTorus />
    </div>
    <div className="torus torus-bottom-left">
      <SpinningTorus />
    </div>
    <div className="torus torus-bottom-right">
      <SpinningTorus />
    </div>

    <style jsx>{`
      .torus {
        position: fixed;
        display: none;
      }
      @media (min-width: 1100px) {
        .torus {
          display: block;
        }
        .torus-top-right {
          top: 0;
          right: 0;
        }
        .torus-top-left {
          top: 0;
          left: 0;
        }
        .torus-bottom-left {
          bottom: 0;
          left: 0;
        }
        .torus-bottom-right {
          bottom: 0;
          right: 0;
        }
      }
    `}</style>
  </div>
)


export default MainBackground
