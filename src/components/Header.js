import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import topbarNav from '../configs/topbarNav'
import "../assets/styles/header.css"

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [inactive, setInactive] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];

    const activeItem = topbarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  return (
    <header>
      
      <Link to="/" className="brand__name">
        <span>BLOG APP</span>
      </Link>
      <button className='mobile__menu'  onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-three-dots-vertical" 
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </button>
      <nav>
        <div  className={isNavExpanded ? "navigation expanded" : "navigation"
        }>
            {topbarNav.map((nav, index) => (
          <Link to={nav.link} key={`nav-${index}`} className={`topbar__menu__item ${activeIndex === index && "active"}`}>
             <span className='topbar__menu__item__area'>
                  {nav.text}
                </span>
            
          </Link>
        ))}
          
        </div>
        
      </nav>
    </header>
  )
}

export default Header