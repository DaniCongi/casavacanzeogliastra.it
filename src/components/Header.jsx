import './Header.css';

function Header () {
  return (
    <header className="header">
    <img src="./src/img/logo_juve.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
    <nav className="menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="dove-siamo.html">Dove Siamo</a></li>
        <li><a href="villette.html">Villette</a></li>
        <li><a href="cultura-e-cucina.html">Cultura e Cucina</a></li>
      </ul>
    </nav>
    <a href="contatti.html" className="button">Contact</a>
    </header>
  );
}

export default Header;

/*nel logo ricorda di mettere:Casa Vacanze Ogliastra - La tua vacanza in Sardegna inizia da qui*/