import './Hero.css';


function Hero () {
  return (
    <hero className="hero">
        <div className="hero_text">
          <h1>Casa Vacanze Ogliastra vi da il benvenuto nella splendida <span className="highlight">Marina di Tertenia</span>...</h1>
          <p>Lasciatevi catturare dal fascino di una cittadina tipica ogliastrina, dal suo sapore antico, intenso ed autentico, dalle sue spiagge, dalla sua cucina, dall'atmosfera folkloristica.</p>
          <p>La Marina di Tertenia, con i suoi 12 km di costa, è racchiusa fra mare e montagna e rappresenta la meta ideale per trascorrere una vacanza all'insegna del relax, delle belle spiagge e delle tradizioni.</p>
          <p>Perché l'Ogliastra non è solo mare, è anche un entroterra ricco di cultura, tradizione, risorse naturali e paesaggistiche che aspetta soltanto di essere scoperto.</p>
          <a href="villette.html" className='button'>Discover more</a>
        </div>
        <div className="hero_image">
          <img src="./src/img/img1_index.jpg" alt="Casa Vacanze Ogliastra"/>
        </div>   
      </hero>
  );
}

export default Hero;