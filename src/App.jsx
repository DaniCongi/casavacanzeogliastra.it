import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home Page</h1>
      <h2>Casa Vacanze Ogliastra vi da il benvenuto nella splendida Marina di Tertenia</h2>
          <p> 
          Lasciatevi catturare dal fascino di una cittadina tipica ogliastrina, dal suo sapore antico, intenso ed autentico, dalle sue spiagge, dalla sua cucina, dall'atmosfera folkloristica. La Marina di Tertenia, con i suoi 12 km di costa, è racchiusa fra mare e montagna e rappresenta la meta ideale per trascorrere una vacanza all'insegna del relax, delle belle spiagge e delle tradizioni. Perché l'Ogliastra non è solo mare, è anche un entroterra ricco di cultura, tradizione, risorse naturali e paesaggistiche che aspetta soltanto di essere scoperto.
          </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

