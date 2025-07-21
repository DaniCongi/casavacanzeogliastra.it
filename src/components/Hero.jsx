import { Link } from 'react-router-dom';
import './Hero.css';


function Hero () {
  return (
    <hero className="heroCover">
        <div className="heroCover_filter"></div>
        <div className="heroCover_text">
          <h1> CASA VACANZE OGLIASTRA</h1> 
          <br />
          <h2>
            <Link to="/DoveSiamo" className="clickable-text">
             La tua vacanza in <span className="highlight">Sardegna</span> inizia da <span className="highlight">qui</span>
            </Link>
          </h2>
        </div>
    </hero>
  );
}

export default Hero;