import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { NavLink, Routes, Route } from "react-router"
import Home from './components/home'
import Topcontainerwsearch from './components/topcontainerwsearch'
import Bottomcards from './components/bottomcards'




function App() {
  

  return (
    <>
    <Navbar/>
    <Topcontainerwsearch/>
    <Bottomcards/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/navbar" element={<Navbar />} />
  <Route path="/topcontainerwsearch" element={<Topcontainerwsearch />} />
  <Route path="/bottomcards" element={<Bottomcards />} />
  </Routes>
    </>
  )
}

export default App
