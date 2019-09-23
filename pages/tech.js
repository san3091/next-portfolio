import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Nav from '../components/nav'
import MainBackground from '../components/mainBackground'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const Home = () => (
  <div>
    <Head>
      <title>Santiago Quintana</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap" rel="stylesheet" />
    </Head>


    <MainBackground />
    <div className="name-container">
      <P5Wrapper sketch={sketch}/>
    </div>
    <div className="content">
      <h3 className="header">performance &amp; web development</h3>
      <p>
        I make dance and music and the internet
      </p>
    </div>
    <div className="link link--left"><a href="">past performances</a></div>
    <div className="link link--right"><a href="">future performances</a></div>
    <div className="link--container">
      <div className="link link--social"><a href="">instagram</a></div>
      <div className="link link--social"><a href="">soundcloud</a></div>
      <div className="link link--social"><a href="">vimeo</a></div>
    </div>

    <style jsx>{`
      :global(body) {
         margin: 0;
         font-family: Montserrat, sans-serif;
         line-height: 1.8em;
         box-sizing: border-box;
       }
       a {
         text-decoration: none;
         color: black;
       }
      .header {
        font-size: 30px;
        font-weight: 400;
      }
      .name-container {
        margin-top: 200px;
      }
      .content {
        margin-left: 300px;
        max-width: 600px;
      }
      .link {
        padding: 7px 17px;
        font-size: 20px;
        border: 1px solid transparent;
      }
      .link:hover {
        border: 1px solid black;
      }
      .link--container {
        position: fixed;
        display: flex;
        justify-content: center;
        bottom: 110px;
        left: 0;
        right: 0;
      }
      .link--social {
        margin: 0 50px;
      }
      .link--left {
        transform: rotate(270deg);
        position: fixed;
        left: 15px;
        top: 50%;
        margin-top: -30px;
      }
      .link--right {
        transform: rotate(90deg);
        position: fixed;
        right: 15px;
        top: 50%;
        margin-top: -30px;
      }
    `}</style>

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
    p.text("s a n t i a g o".toUpperCase(), xPosition + 200, 120)
    p.text("q u i n t a n a".toUpperCase(), p.windowWidth - xPosition, 190)
  }
}

