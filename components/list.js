import React, { useState } from 'react'

const List = ({ items }) => (
  <>
    <ul className="list--container">
      {items && items.map((item, index) => <ListItem key={index} {...item}/>)}
    </ul>

    <style jsx>{`
      .list--container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
        text-indent: 0;
      }
    `}</style>
  </>
)

const ListItem = ({ title, description, imageSrc }) => (
  <>
    <div className="list--item">
      <img src="static/kick.jpg" />
      <div className="list--info">
        <h3 className="list--title">{title}</h3>
      </div>
    </div>
    
    <style jsx>{`
      .list--item {
        position: relative;
        z-index: 1;
        width: 400px;
        height: 400px;
        margin: 10px;
        flex: 1;
      }
      .list--item img {
        height: 100%;
      }
      .list--item:hover img {
        visibility: hidden;
      }
      .list--item:hover .list--title {
        visibility: visible;
      }
      .list--info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
      }
      .list--title {
        font-size: 28px;
        font-weight: 400;      
      }
    `}</style>
  </>
)

export default List
