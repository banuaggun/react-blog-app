import React from 'react'
import '../assets/styles/about.css'

const About = () => {
  return (
    <div className='about__page'>
      <div className='about__page__title'>
        <span>About The Project</span>
      </div>
      <div className='about__page__body'>
        <p>
        In this project, I created a blog page that I designed using <b>Figma</b> and coded it using <b>ReactJs</b> and <b>Redux</b> frameworks. I got the blog data from a remote source using API. I did the decoding of the design with <b>PureCSS</b>.
        </p>
      </div>
      <div className='about__page__end'>
        <p>You can reach my other projects from the links below</p>
        <div className='about__page__end__links'>
        <a href="https://portfolio-banuaggun.vercel.app/" rel="noreferrer noopenner" target="_blank">
          <span className='icon icon-fill'>
            <i className=''></i>
          </span>  
          </a>
          <a href="https://www.linkedin.com/in/banuaggun/?locale=en_US" rel="noreferrer noopenner" target="_blank">
            <span className='icon icon-fill'>
            <i className="bi bi-linkedin"></i>
            </span>
            
          </a>
          <a href="https://www.behance.net/banuaggun" rel="noreferrer noopenner" target="_blank">
            <span className='icon icon-fill'>
            <i className="bi bi-behance"></i>
            </span>
            
          </a>
          <a href="https://dribbble.com/banuaggun" rel="noreferrer noopenner" target="_blank">
            <span className='icon icon-fill'>
            <i className="bi bi-dribbble"></i>
            </span>
            
          </a>
          
         
        </div>
      </div>
      
    </div>
  )
}

export default About