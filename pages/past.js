import React from 'react'
import List from '../components/listItem'

const Past = () => (
  <>
    <div className="main-container">
      <h1>Past Performances</h1>
      <List />
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
