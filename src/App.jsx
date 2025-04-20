import { useState } from 'react'

// import reactLogo from './assets/react.svg'

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Banner from './components/Banner'


function App() {
   return (
    <>
        <Header/>
        <Hero/>
        <Banner/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default App

