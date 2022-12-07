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
      <h1>React Redux Blog</h1>
      </Link>
      <button className='mobileMenu'  onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
      |||
      </button>
      <nav>
        <ul  className={isNavExpanded ? "navigation expanded" : "navigation"
        }>
            {topbarNav.map((nav, index) => (
          <Link to={nav.link} key={`nav-${index}`} className={`topbar_menu_item ${activeIndex === index && "active"}`}>
            <div className='topbar_menu_item_area'>
              <div className='topbar_menu_item_area_list'>
                <div className='topbar_menu_item_area_list_text'>
                  {nav.text}
                </div>
              </div>
            </div>
          </Link>
        ))}
          
        </ul>
        
      </nav>
    </header>
  )
}

export default Header