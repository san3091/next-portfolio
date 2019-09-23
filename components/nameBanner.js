import React from 'react'
import dynamic from 'next/dynamic'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const NameBanner = () => (
  <>
    <div className="container">
      <P5Wrapper sketch={santiagoSketch} />
    </div>

    <style jsx>{`
      .container {
        margin-top: 10px;
        margin-left: -150px;
      }
    `}</style>
  </>
)

const santiagoSketch = p => {
  const width = p.windowWidth + 300

  p.setup = () => {
    p.createCanvas(width, 250)
  }

  p.draw = () => {
    const x = p.mouseX / 8
    // p.background(255);
    p.clear()
    p.textSize(55)
    // SANTIAGO
    p.text("S", (x * 3) - 100, 120)
    p.text("A", (x * 5) - 100, 120)
    p.text("N", (x * 7) - 100, 120)
    p.text("T", (x * 9) - 100, 120)
    p.text("I", (x * 11) - 100, 120)
    p.text("A", (x * 13) - 100, 120)
    p.text("G", (x * 15) - 100, 120)
    p.text("O", (x * 17) - 100, 120)
    // QUINTANA
    p.text("Q", width - (x * 17), 190)
    p.text("U", width - (x * 15), 190)
    p.text("I", width - (x * 13), 190)
    p.text("N", width - (x * 11), 190)
    p.text("T", width - (x * 9), 190)
    p.text("A", width - (x * 7), 190)
    p.text("N", width - (x * 5), 190)
    p.text("A", width - (x * 3), 190)   
  }
}

export default NameBanner
