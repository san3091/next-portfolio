import React from 'react'

const List = ({ items }) => (
  <>
    <ul className="list--container">
      <li className="list--item">
        <img src="static/kick.jpg" />
      </li>
      <li className="list--item">
        <img src="static/kick.jpg" />
      </li>
      <li className="list--item">
        <img src="static/kick.jpg" />
      </li>
      <li className="list--item">
        <img src="static/kick.jpg" />
      </li>
    </ul>

    <style jsx>{`
      .list--container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
        text-indent: 0;
      }
      .list--item {
        max-width: 400px;
        max-height: 400px;
        padding: 10px;
        flex: 1;
        list-style-type: none;
      }
      .list--item > img {
        height: 100%;
      }
    `}</style>
  </>
)

// const ListItem = (item) => ()

export default List
