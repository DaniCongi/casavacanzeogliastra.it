import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom
import './Header.css';


function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('open', !isOpen); // Aggiunge/rimuove la classe al body
  };
  return (
    <header className="header">
    <img src="./src/img/Logo.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DoveSiamo">Dove Siamo</Link></li>
          <li><Link to="/Villette">Villette</Link></li>
          <li><Link to="/CulturaCucina">Cultura e Cucina</Link></li>
      </ul>
    </nav>
    <Link to="/Contatti" className="button">Contattaci</Link>
    <div className="hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>     
    </div>
    </header>
  );
}

export default Header;

