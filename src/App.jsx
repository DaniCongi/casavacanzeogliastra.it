import { useState } from 'react'

// import reactLogo from './assets/react.svg'

import './App.css'

import Layout from "./components/Layout"
import Hero from './components/Hero'
import Banner from './components/Banner'
import Cards from './components/Cards'
import CookieAlert from "./components/CookieAlert"

function App() {
  return (
    <Layout>
      <Hero />
      <Banner />
      <Cards />
      <CookieAlert />
    </Layout>
  );
}

export default App

