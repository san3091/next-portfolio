import React from 'react'
import List from '../components/list'

const Past = () => (
  <>
    <div className="main-container">
      <h1>PAST PROJECTS</h1>
      <List items={pastPerformances}/>
    </div>

    <style jsx>{`
      .main-container {
        max-width: 900px;
        margin: 220px auto;
      }
      
      h1 {
        color: #696969;
      }
    `}</style>
  </>
)

export default Past

const pastPerformances = [
  {
    title: "Concentric",
    description: "An experiential introduction to dance improvisation around 45 minutes long consisting of three explorations that propose tools and entries into movement research. The workshop is a string of uninterrupted, continuous movement inspired in the work and language of Bartenieff and Laban.",
    imageSrc: "static/concentricThumbnail.jpg",
    link: "/"
  },
  {
    title: "ADF Summer Dance Intensive",
    description: "Three pieces choreographed and performed at the ADF SDI student concert in Duke University.",
    imageSrc: "static/orWhat.jpg",
    link: "/"
  },
  {
    title: "After The Function",
    description: "Choreography by Taylor Mitchell, presented at Harvest Chicago Contemporary Dance Festival.",
    imageSrc: "static/afterTheFunction.png",
    link: "/"
  },
  {
    title: "Ritual series",
    description: "Exploring instagram live as a platform for sacred spaces and movement rituals.",
    imageSrc: "static/ritual.jpg",
    link: "/"
  }
]
