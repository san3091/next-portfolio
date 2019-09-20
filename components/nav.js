import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const P5Wrapper = dynamic(() => import('react-p5-wrapper'), {ssr: false})

const links = [
  { href: '/about', label: 'about' },
  { href: '/dance', label: 'dance' },
  { href: '/tech', label: 'tech' },
  { href: '/calendar', label: 'calendar' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link href='/'>
//           <a>home</a>
//         </Link>
//       </li>
//       {links.map(({ key, href, label }) => (
//         <li key={key}>
//           <a href={href}>{label}</a>
//         </li>
//       ))}
//     </ul>
// 
//     <style jsx>{`
//       :global(body) {
//         margin: 0;
//         font-family: Montserrat, sans-serif;
//         color: #32292F;
//       }
//       nav {
//         height: 500px;
//       }
//       ul {
//         display: flex;
//         flex-direction: column;
//       }
//       nav > ul {
//         padding: 4px 30px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: #575366;
//         text-decoration: none;
//         font-size: 30px;
//       }
//       a:hover {
//         color: #ff00bf;
//       }
//     `}</style>
//   </nav>
// )

const Nav = () => (
  <nav>
    <P5Wrapper sketch={navSketch}/>
     <style jsx>{`
       :global(body) {
         margin: 0;
         font-family: Montserrat, sans-serif;
         color: #32292F;
       }
       nav {
         height: 500px;
       }
       ul {
         display: flex;
         flex-direction: column;
       }
       nav > ul {
         padding: 4px 30px;
       }
       li {
         display: flex;
         padding: 6px 8px;
       }
       a {
         color: #575366;
         text-decoration: none;
         font-size: 30px;
       }
       a:hover {
         color: #ff00bf;
       }
     `}</style>

  </nav>
   
)

const navSketch = p => {
  let navPosition, montserrat

  // p.preload = () => {
  //   montserrat = p.loadFont("static/Montserrat-Regular.otf")
  // }

  p.setup = () => {
    p.createCanvas(400, 500)
    p.textSize(28)
  }

  p.draw = () => {
    p.clear()
    navPosition = p.map(p.mouseX, 0, p.windowWidth, 300, -100, true)

    // Circles
    // p.push()
    // p.noFill()
    // p.strokeWeight(2)
    // p.stroke(90)

    // p.circle(navPosition * 1.2, 35, 58)
    // p.circle(navPosition, 105, 58)
    // p.pop()
    
    // Nav Items
    p.push()
    p.fill(0)
    p.text("about", navPosition, 45)
    p.text("dance", navPosition * 0.8, 110)
    p.text("tech", navPosition * 0.6, 175)
    p.text("calendar", navPosition * 0.4, 240)
    p.pop()
  }
}

export default Nav
