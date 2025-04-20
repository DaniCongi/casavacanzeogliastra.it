import './Hero.css';


function Hero () {
  return (
    <hero className="heroCover">
        <div className="heroCover_filter"></div>
        <div className="heroCover_text">
          <h1> Casa Vacanze Ogliastra...</h1> 
          <h2>
            <a href="dove-siamo.html" className="clickable-text">
             La tua vacanza in <span className="highlight">Sardegna</span> inizia da <span className="highlight">qui</span>!
            </a>
          </h2>
        </div>
    </hero>
  );
}

export default Hero;