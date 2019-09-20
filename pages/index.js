import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import NameBanner from '../components/nameBanner'

const Home = () => (
  <div>
    <Head>
      <title>Santiago Quintana</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
    </Head>

    <div className="big-container">
      <NameBanner />
      <div className="content-container">
        <Nav />
        <div>
          <h2>dancer queer performer tech witch in chicago</h2>
          <p>This could be my bio maybe</p>
        </div>
        <div className="image-container">
        </div>
      </div>
    </div>

    <style jsx>{`
      .big-container {
      }

      .content-container {
        display: flex;
        justify-content: space-between;
      }

      .image-container {
        height: 500px;
      }

      .image-container img {
        height: 100%;
      }
    `}</style>
  </div>
)

export default Home

// <img src="/static/kick.jpg" alt="Santiago with" />
