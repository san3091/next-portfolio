import React from 'react'

const Contact = () => (
  <div className="main-container">
    <form className="form" action="https://formspree.io/contact@santiagoqg.com" method="POST">
      <input className="field" type="text" name="name" placeholder="What is your name?"/>
      <textarea className="field message" name="message" placeholder="What can I do for you?"></textarea>
      <button className="button" type="submit">Send Message</button>
    </form>

    <style jsx>{`
      .main-container {
        max-width: 900px;
        margin: 220px auto;
      }
      
      h1 {
        color: #696969;
      }

      .form {
        max-width: 600px;
        margin: 0 auto;
      }

      .field {
        width: 100%;
        border: 1px solid #696969;
        background-color: none;
        outline: 0;
        height: 30px;
        font-size: 25px;
        margin: 25px 0;;
        padding: 15px 20px;
        font-family: Montserrat, sans-serif;
      }

      .message {
        height: 120px;
      }

      .button {
        color: #696969;
        font-size: 25px;
        overflow : visible;
        margin: 25px 0;;
        padding : 15px 20px;;
        border : 1px solid #696969;
        background : transparent;
        font : inherit;
        line-height : normal;
        cursor : pointer;
        -moz-user-select : text;
      }

      .button:hover {
        border: 1px solid black;
        color: black;
      }

      .button:focus {
        outline: 0;
        border: 2px solid #696969;
      }

    `}</style>
  </div>
)

export default Contact
