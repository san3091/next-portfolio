import React, { useState } from 'react'
import Link from "next/link"

class List extends React.Component {
  state = {
    imagesLoaded: 0
  }

  render () {
    const { items } = this.props
    return <>
      <ul className="list--container">
        {items && items.map((item, index) => <ListItem key={index} onLoad={this.handleImageLoaded} {...item} />)}
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
  }

  handleImageLoaded = () => {
    console.log("loaded!")
    this.setState({
      imagesLoaded: ++this.state.imagesLoaded
    }) 
  }

  imagesLoaded = () => this.state.imagesLoaded === this.props.items.length
}

const ListItem = ({ title, description, imageSrc, link, onLoad }) => (
  <>
    <Link href={link}>
      <div className="list--item">
        <img src={imageSrc} onLoad={onLoad}/>
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
        width: 400px;
        height: 400px;
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
