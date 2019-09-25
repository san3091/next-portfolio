import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MainBackground from './mainBackground'

const Nav = () => {
  const [ mobileHidden, setMobileHidden ] = useState(true)
  return <>
    <Head>
      <title>Santiago Quintana</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>


    <MainBackground />

    <button className="mobile-toggle" onClick={() => setMobileHidden(!mobileHidden)}>CLICK ME</button>
    {/* TODO turn these into <button>s */}
    <nav className={`nav-container ${mobileHidden ? "nav-container__hidden" : ""}`}>

      <div className="link link--left"><Link href="/projects">projects</Link></div>
      <div className="link link--right"><Link href="/calendar">calendar</Link></div>
      <div className="link--container link--bottom">
        <div className="link link--horizontal"><a href="https://www.instagram.com/santiago_mvmt/" target="_blank">instagram</a></div>
        <div className="link link--horizontal"><a href="https://soundcloud.com/user-255736465" target="_blank">soundcloud</a></div>
        <div className="link link--horizontal"><a href="https://vimeo.com/santiagoqg" target="_blank">vimeo</a></div>
      </div>
      <div className="link--container link--top">
        <div className="link link--horizontal"><Link href="/"><a>home</a></Link></div>
        <div className="link link--horizontal"><Link href="/tech"><a>tech portfolio</a></Link></div>
        <div className="link link--horizontal"><Link href="/contact"><a>hire me</a></Link></div>
      </div>
    </nav>

    <style global jsx>{`
      body {
         margin: 0;
         font-family: Montserrat, sans-serif;
         line-height: 1.8em;
         box-sizing: border-box;
      }
      a {
         text-decoration: none;
         color: #696969;
      }
      h1 {
        font-family: 'Fira Mono', sans-serif;
      }
    `}</style>

    <style jsx>{`
       .nav-container {
         position: fixed;
         transform: translate(0);
         transition: 0.3s linear;
       }
       .nav-container__hidden {
         transform: translate(-200px)
       }
       .link {
          padding: 7px 17px;
          font-size: 20px;
          border: 1px solid transparent;
          background-color: white;
        }
        @media (min-width: 1100px) {
          .nav-container {
            position: static;
            transform: none;
          }
          nav-container__hidden {
            transform: none;
          }
          .mobile-toggle {
            display: none;
          }
          .link:hover {
            border: 1px solid #696969;
          }
         .link--bottom {
            bottom: 110px;
          }
          .link--top {
            top: 110px;
          }
          .link--container {
            z-index: 3;
            position: fixed;
            display: flex;
            justify-content: center;
            left: 0;
            right: 0;
          }
          .link--horizontal {
            margin: 0 50px;
          }
          .link--left {
            transform: rotate(270deg);
            position: fixed;
            left: 60px;
            top: 50%;
            margin-top: -30px;
          }
          .link--right {
            transform: rotate(90deg);
            position: fixed;
            right: 60px;
            top: 50%;
            margin-top: -30px;
          }
        }
       
      `}</style>


  </>
}

export default Nav
