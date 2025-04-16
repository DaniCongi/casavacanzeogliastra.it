import { useState } from 'react'

// import reactLogo from './assets/react.svg'

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import Cover from './components/Cover'

function App() {
   return (
    <>
        <Header/>
        <Hero/>
        <Cover/>
        <Card/>
        <Footer/>
    </>
  )
}

export default App

// info utili: terminale - npm run dev