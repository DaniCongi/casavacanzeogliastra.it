import { useState } from 'react'

// import reactLogo from './assets/react.svg'

import './App.css'

import Layout from "./components/Layout"
import Hero from './components/Hero'
import Banner from './components/Banner'
// import CardTailwind from "./components/CardTailwind"
import Cards from './components/Cards'

function App() {
  return (
    <Layout>
      <Hero />
      <Banner />
      <Cards />
      {/* <CardTailwind /> */}
      </Layout>
  );
}

export default App

