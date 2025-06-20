import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home 
          // imgsrc="https://img.freepik.com/premium-photo/illustration-of-school-girl_635702-1714.jpg"
          // title="My Project"
          // description="This is a sample React project showcasing various cards with links to different projects."
          // link="https://mywebreact.netlify.app/"
          
         />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
