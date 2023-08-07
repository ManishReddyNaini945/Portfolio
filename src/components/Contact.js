import React from 'react'
import axios from "axios"
import { useState } from 'react'
import "./Contact.css"
import {BsLinkedin} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {IoIosCall} from "react-icons/io"
import {AiOutlineWhatsApp} from "react-icons/ai"

const Contact = () => {
    const[data,setData]=useState({"name":"","email":"","question":""})
    const changehandler=e=>{
      setData({...data,[e.target.name]:e.target.value})
    }
  
    const submitHandler=e=>{
      e.preventDefault()
      axios.post("https://test-api-2726f-default-rtdb.firebaseio.com/query.json",data).then(()=>alert("Submitted Sucessfully"))
      e.target.reset()
      
  
  
    
  
  
    }

   
    return (
      <>
     
      
      <div className='contact-container'>
         
              <form onSubmit={submitHandler}>
              <div className='contact-card'>
                  <h1 className='query-heading'>Ask a Query?</h1>
             
              <input type='text' className='contact-input' placeholder='Enter your Name' name="name" onChange={changehandler} />
  
              <input type='email' className='contact-input' placeholder='Enter your Email' name="email" onChange={changehandler}/>
              
             <textarea rows="6" cols="30" placeholder='Enter your Query' className='contact-input' name="question" onChange={changehandler}></textarea>
             <input type='submit' value="Submit" className='contact-btn'/>
             </div>
             </form>
             <h1 style={{color:"black"}}>or</h1>
             <div className='icons-container'>

                <a href='https://www.linkedin.com/in/manish-reddy-naini/' target='_blank' rel="noopener noreferrer" className='icon'>
                <BsLinkedin /> 

                </a>
                <a href='tel:9000502417'  target="_blank" rel="noopener noreferrer" className='icon'>
                <IoIosCall  /> 

                </a>
                <a href='https://wa.me/9000502417' target='_blank' rel="noopener noreferrer" className='icon'>
                <AiOutlineWhatsApp  /> 

                </a>
                <a href='mailto:naini.manishreddy123@gmail.com'   target='_blank' rel="noopener noreferrer"  className='icon'>
                <HiOutlineMail  /> 

                </a>


               


             </div>
             
         
      </div>
      
      </>
    )
  }
  
  export default Contact