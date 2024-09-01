import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'



function App() {

  return (
    <>
    <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/testimonials' element={ <LandingPage />} />
    <Route path='/gallery' element={  <Gallery />} />
    <Route path='/contact' element={  <Contact />} />
    
   </Routes>
  
  
  
   
   <Footer />
    </>
  )
}

export default App
