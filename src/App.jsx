import { useState } from 'react'

// import reactLogo from './assets/react.svg'

import './App.css'

import Layout from "./components/Layout"
import Hero from './components/Hero'
import Banner from './components/Banner'
import Cards from './components/Cards'
import VideoSection from './components/VideoSection';
import CookieAlert from "./components/CookieAlert"

function App() {
  return (
    <Layout>
      <Hero />
      <Banner />
      <Cards />
      <VideoSection />
      <hr className="section-separator" />
      <CookieAlert />
    </Layout>
  );
}

export default App

