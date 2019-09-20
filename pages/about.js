import React from 'react'
import Link from 'next/link'
import NameBanner from '../components/nameBanner'

const About = () => (
  <div>
    <Link href="/">Home</Link>
    <NameBanner />
    <nav className="about__nav">
    </nav>
  </div>
)

export default About
