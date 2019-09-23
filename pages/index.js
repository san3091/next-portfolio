import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Nav from '../components/nav'
import MainBackground from '../components/mainBackground'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const Home = () => (
  <div>
    <div className="name-container">
      <P5Wrapper sketch={sketch}/>
    </div>
    <div className="content">
      <h3 className="header">performance &amp; web development</h3>
      <p>
        I make dance and music and the internet
      </p>
    </div>

    <style jsx>{`
      .header {
        font-size: 28px;
        font-weight: 400;
      }
      .name-container {
        margin-top: 200px;
      }
      .content {
        margin-left: 400px;
        max-width: 600px;
      }`}</style>
   </div>
)

export default Home

const sketch = p => {
  let xPosition, font

  p.preload = () => {
    font = p.loadFont("static/Montserrat-Regular.otf")
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, 250)
    p.textFont("Fira Mono")
  }

  p.draw = () => {
    xPosition = p.map(p.mouseX, 0, p.windowWidth, 600, 700)

    p.clear()
    p.textSize(40)
    p.fill(80)
    p.text("s a n t i a g o".toUpperCase(), xPosition + 100, 120)
    p.text("q u i n t a n a".toUpperCase(), p.windowWidth - xPosition - 100, 190)
  }
}

