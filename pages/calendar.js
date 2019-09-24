import React from 'react'
import SpinningTorus from '../components/spinningTorus'

const Calendar = () => (
  <>
    <div className="main-container">
      <SpinningTorus />
    </div>

    <style jsx>{`
      .main-container {
        max-width: 900px;
        margin: 220px auto;
      }
    `}</style>
  </>
)

export default Calendar
