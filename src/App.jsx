import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './components/Header'
import Header from './components/Header'
import './components/Header.css'


// import './components/Navbar'
// import Navbar from './components/Navbar'
// import './components/Navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        {/* <Navbar /> */}
        <h1>Casa Vacanze Ogliastra</h1>
        <h2>La tua vacanza in Sardegna inizia da qui</h2>
      </div>

      <div>
        <p><b>Casa Vacanze Ogliastra</b> vi da il benvenuto nella splendida <b>Marina di Tertenia</b></p>
      </div>
      
      <div>
        <p>Lasciatevi catturare dal fascino di una cittadina tipica ogliastrina, dal suo sapore antico, intenso ed autentico, <br />dalle sue spiagge, dalla sua cucina, dall'atmosfera folkloristica.</p>
        <p>La Marina di Tertenia, con i suoi 12 km di costa, è racchiusa fra mare e montagna <br /> e rappresenta la meta ideale per trascorrere una vacanza all'insegna del relax, delle belle spiagge e delle tradizioni.</p>
        <p>Perché l'Ogliastra non è solo mare, è anche un entroterra ricco di cultura, tradizione, <br /> risorse naturali e paesaggistiche che aspetta soltanto di essere scoperto.</p>
      </div>

    </>
  )
}

export default App

