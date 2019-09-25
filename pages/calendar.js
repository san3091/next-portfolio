import React from 'react'
import SpinningTorus from '../components/spinningTorus'

const Calendar = () => (
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

export default Calendar
