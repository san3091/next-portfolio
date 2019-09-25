import React, { useState } from 'react'
import Link from "next/link"

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

const ListItem = ({ title, description, imageSrc, link }) => (
  <>
    <Link href={link}>
      <div className="list--item">
        <img src={imageSrc} />
        <div className="list--info">
          <h3 className="list--title">{title}</h3>
          <p className="list--description">{description}</p>
        </div>
      </div>
    </Link>
    
    <style jsx>{`
      .list--item {
        position: relative;
        z-index: 1;
        width: 200px;
        height: 200px;
        margin: 10px;
        flex: 1;
        cursor: pointer;
      }
      .list--item img {
        height: 100%;
      }
      .list--item:hover img {
        visibility: hidden;
      }
      .list--item:hover .list--title, .list--item:hover .list--description {
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
        bottom: 0;
        right: 0;
        width: 200px;
        height: 200px;
        visibility: hidden;
      }
      .list--title {
        font-size: 28px;
        font-weight: 400;      
      }

      @media (min-width: 1100px) {
        .list--item {
          width: 400px;
          height: 400px;
        }

        .list--info {
          width: 400px;
          height: 400px;
        }
      }
    `}</style>
  </>
)

export default List
