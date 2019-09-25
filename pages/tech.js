import React from 'react'
import List from '../components/list'

const Tech = () => (
  <>
    <div className="main-container">
      <h1>TECH PORTFOLIO</h1>
      <List items={techPortfolio}/>
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

const Placeholder= () => (
  <>
    <div className="main-container">
      <p>Haven't gotten to this part yet!</p>
      <p>Check back in a bit, it's gonna be good.</p>
    </div>

    <style jsx>{`
      .main-container {
        max-width: 900px;
        height: 400px;
        margin: 220px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      p {
        font-size: 20px;
      }
     
    `}</style>
  </>
)



export default Placeholder

const techPortfolio = [
  {
    title: "Ursula",
    description: "Machine Learning",
    imageSrc: "static/concentric.jpg",
    link: "/"
  }
]
