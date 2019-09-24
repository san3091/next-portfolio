import React from 'react'
import List from '../components/list'

const Past = () => (
  <>
    <div className="main-container">
      <h1>Past Performances</h1>
      <List items={pastPerformances}/>
    </div>

    <style jsx>{`
      .main-container {
        max-width: 900px;
        margin: 220px auto;
      }
    `}</style>
  </>
)

export default Past

const pastPerformances = [
  {
    title: "Concentric",
    description: "An experiential introduction to dance improvisation around 45 minutes long consisting of three explorations that propose tools and entries into movement research. The workshop is a string of uninterrupted, continuous movement. It's inspired in the work and language of Bartenieff and Laban.",
    imageSrc: "static/concentric.jpg"
  },
  {
    title: "ADF Summer Dance Intensive",
    description: "Three pieces choreographed and performed at the student concert",
    imageSrc: "static/orWhat.jpg"
  }
]
