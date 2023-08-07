import React from 'react'
import "./Skills.css"
import { Link } from 'react-router-dom'
const Skills = () => {
  return (
   
        
      
    <div className='skills-container'>
        <h1 className='skill-title'>Skills</h1>
        <div className='skills-card'>
       
        <div className='skill-card'>
        <Link to="/html">
        <img src="https://res.cloudinary.com/dwoafhj8h/image/upload/v1663932615/html_hlpnzk.png" className="skill-img" alt='skill'/>
        </Link>
        </div>
       
        <div className='skill-card'>
        <Link to="/css">
        <img src="https://res.cloudinary.com/dwoafhj8h/image/upload/v1663932699/css_euxffp.png" className="skill-img" alt='skill' />
        </Link>
        </div>
       
        <div className='skill-card'>
        <Link to="/bootstrap">
        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png" className="skill-img" alt='skill' />
        </Link>
        </div>
      
        <div className='skill-card'>
        <Link to="/javascript">
        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png" className="skill-img" alt='skill' />
        </Link>
        </div>
      
        <div className='skill-card'>
        <Link to="/python">
        <img src="https://res.cloudinary.com/dwoafhj8h/image/upload/v1663931490/python_totosw.png" className="skill-img" alt='skill' />
        </Link>
        </div>
   
        <div className='skill-card'>
        <Link to="/sql">
        <img src="https://res.cloudinary.com/dwoafhj8h/image/upload/v1663931609/mysql_dgsa3g.png" className="skill-img" alt='skill' />
        </Link>
        </div>
      
        <div className='skill-card'>
        <Link to="/reactjs">
            <img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp" alt='skill' className='skill-img'/>
            </Link>
        </div>
        
        </div>

    </div>

   
  )
}

export default Skills