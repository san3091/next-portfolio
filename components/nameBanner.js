import React from 'react'
import dynamic from 'next/dynamic'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const NameBanner = () => (
  <>
    <div className="name-banner--container">
      <P5Wrapper sketch={santiagoSketch} />
    </div>

    <style jsx>{`
      .name-banner--container {
        margin-top: 10px;
        margin-left: -60px;
      }
    `}</style>
  </>
)

const santiagoSketch = p => {
  const width = p.windowWidth + 100

  p.setup = () => {
    p.createCanvas(width, 250)
  }

  p.draw = () => {
    const x = p.mouseX / 8
    // p.background(255);
    p.clear()
    p.textSize(55)
    // SANTIAGO
    p.text("S", x * 2, 120)
    p.text("A", x * 4, 120)
    p.text("N", x * 6, 120)
    p.text("T", x * 8, 120)
    p.text("I", x * 10, 120)
    p.text("A", x * 12, 120)
    p.text("G", x * 14, 120)
    p.text("O", x * 16, 120)
    // QUINTANA
    p.text("Q", width - (x * 16), 190)
    p.text("U", width - (x * 14), 190)
    p.text("I", width - (x * 12), 190)
    p.text("N", width - (x * 10), 190)
    p.text("T", width - (x * 8), 190)
    p.text("A", width - (x * 6), 190)
    p.text("N", width - (x * 4), 190)
    p.text("A", width - (x * 2), 190)   
  }
}

export default NameBanner
