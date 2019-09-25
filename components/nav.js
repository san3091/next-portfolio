import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MainBackground from './mainBackground'

const Nav = () => (
  <>
    <Head>
      <title>Santiago Quintana</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>


    <MainBackground />

    {/* TODO turn these into <button>s */}
    <div className="link link--left"><Link href="/projects">projects</Link></div>
    <div className="link link--right"><Link href="/calendar">calendar</Link></div>
    <div className="link--container link--bottom">
      <div className="link link--horizontal"><a href="https://www.instagram.com/santiago_mvmt/">instagram</a></div>
      <div className="link link--horizontal"><a href="https://soundcloud.com/user-255736465">soundcloud</a></div>
      <div className="link link--horizontal"><a href="https://vimeo.com/santiagoqg">vimeo</a></div>
    </div>
    <div className="link--container link--top">
      <div className="link link--horizontal"><Link href="/"><a>home</a></Link></div>
      <div className="link link--horizontal"><Link href=""><a>tech portfolio</a></Link></div>
      <div className="link link--horizontal"><Link href=""><a>hire me</a></Link></div>
    </div>

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
       .link {
          padding: 7px 17px;
          font-size: 20px;
          border: 1px solid transparent;
          background-color: white;
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
      `}</style>


  </>
)

export default Nav
