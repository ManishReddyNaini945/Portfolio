import React from 'react'
import aboutimg from "../assests/1.jpg"
import "./About.css"
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className='about-container'>
            <h1 className='about-me-heading'>About Me:</h1>
           
            <div className='about-card'>
                <div className='description-container'>
                    <ul>
                    <li className="about-me-paragraph">My Name is Manish Reddy Naini ,I am born and raised in Hyderabad.I Completed My bachelor's degree in computer sceince and engineering from Narsimha reddy engineering college.I completed 10th and Intermediate in Hyderabad.And Iam Currently looking for a job in Fullstack Developer role.I have trained 8 months as a Fullstack Development in NXTwave ccbp 4.0 program.People find me to be an upbeat,self-motivated team player with excellent communication skills.</li>
                  <li className="about-me-paragraph"> My Hobbies are playing & watching cricket and creating lyrical videos.Whenever I get free time,I will be creating lyrical videos ,it gives me creativeness and I'll browse about technologies.</li>
                  <li className="about-me-paragraph">I Have create few projects with frontend technologies such as portfolio website,todolist application,pizza application e,t,c</li>

                  </ul>
                </div >
                <div className='about-image-container'>
                    <img src={aboutimg} className='about-image' alt='about-img' />

                </div>

            </div>
            
        </div>
    )
}

export default About;