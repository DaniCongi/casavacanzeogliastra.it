import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <banner className="banner">
        <div className="banner_text">
            <h3>Casa Vacanze Ogliastra vi da il benvenuto nella splendida <span className="highlight">Marina di Tertenia</span></h3>
                <p>Lasciatevi catturare dal fascino di una cittadina tipica ogliastrina, dal suo sapore antico, intenso ed autentico, dalle sue spiagge, dalla sua cucina, dall'atmosfera folkloristica.</p>
                <p>La Marina di Tertenia, con i suoi 12 km di costa, è racchiusa fra mare e montagna e rappresenta la meta ideale per trascorrere una vacanza all'insegna del relax, delle belle spiagge e delle tradizioni.</p>
                <p>Perché l'Ogliastra non è solo mare, è anche un entroterra ricco di cultura, tradizione, risorse naturali e paesaggistiche che aspetta soltanto di essere scoperto.</p>
                <Link to="/Villette" className="button"> Scopri di più </Link>
        </div>
        <div className="banner_image">
            <img src="./img/img1_index.jpg" alt="Casa Vacanze Ogliastra" className="img_resp"/>
        </div>
    </banner>
  );
}
export default Banner;

