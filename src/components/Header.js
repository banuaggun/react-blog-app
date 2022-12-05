import {useState} from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/header.css"

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header>
      
      <Link to="/" className="brand__name">
      <h1>React Redux Blog</h1>
      </Link>
      <button className='mobileMenu'  onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
      |||
      </button>
      <nav>
        <ul  className={isNavExpanded ? "navigation expanded" : "navigation"
        }>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="about">Information</Link>
          </li>
          <li>
            <Link to="user">Authors</Link>
          </li>
          <li>
            <Link to="post">New Post</Link>
          </li>
          
        </ul>
        
      </nav>
    </header>
  )
}

export default Header