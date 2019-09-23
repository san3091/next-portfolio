import React from 'react'
import App from 'next/app'
import Nav from "../components/nav"

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
