import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Html from './components/Html'
import Css from './components/Css'
import Javascipt from './components/Javascipt'
import Bootstrap from './components/Bootstrap'
import Python from './components/Python'
import Sql from './components/Sql'
import Reactjs from './components/Reactjs'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />}/>
        
        <Route path='/html' element={<Html />}/>  
        <Route path='/css' element={<Css />}/>  
        <Route path='/javascript' element={<Javascipt />}/>  
        <Route path='/bootstrap' element={<Bootstrap />}/>  
        <Route path='/python' element={<Python />}/>  
        <Route path='/reactjs' element={<Reactjs />}/>  
        <Route path='/sql' element={<Sql />}/>  
           
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App