import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Nav from '../components/nav'
import MainBackground from '../components/mainBackground'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const Content = () => (
  <div>
    <div className="name-container">
      <P5Wrapper sketch={sketch}/>
    </div>
    <div className="mobile-name">
      <h1>Santiago</h1>
      <h1>Quintana</h1>
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
      .mobile-name {
        position: fixed;
        bottom: 0;
        right: 50px;
      }
      .name-container {
        display: none;
        margin-top: 200px;
      }
      .content {
        width: 100px;
        position: absolute;
        top: 200px;
        right: 0;
      }
      @media (min-width: 1100px) {
        .mobile-name {
          visibility: hidden;
        }
        .name-container {
          display: block;
        }
        .content {
          position: static;
          margin-left: 20%;
          max-width: 600px;
          transform: none;
        }
      }
    `}</style>
   </div>
)

const Animation = () => (
  <>
    <img src="static/twirl-loop.gif"/>
    
    <style jsx>{`
      img {
        height: 250px;
      }
    `}</style>

  </>
)

class Home extends React.Component {

  state = {
    animating: true,
    timeout: null,
  }

  componentDidMount() {
    this.startAnimationTimer()
  }

  render() {
    return (
      <>
        <div className="animation">
          <Animation />
        </div>
        <div className="content">
          <Content />
        </div>

        <style jsx>{`
          .animation {
            ${this.state.animating ? "display: flex;" : "display: none;"}
            justify-content: center;
            align-items: center;
            margin: 220px auto;
          }

          .content {
            ${this.state.animating ? "visibility: hidden;" : null}
            ${this.state.animating ? "opacity: 0;" : "opacity: 1;"}
            transition: visibility 0.8s linear, opacity 0.8s linear;
          }

          @media (min-width: 1100px) {
            .animation {
              height: 400px;
            }
          }
        `}</style>
      </>
    )
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout)
  }

  startAnimationTimer = () => {
    this.timeout = setTimeout(() => {
      this.setState({animating: false})
    }, 4000)
  }
}

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

