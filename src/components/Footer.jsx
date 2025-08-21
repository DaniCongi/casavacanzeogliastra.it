import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="grid">
            <div className="col-25">
                <div className="footer_text">
                <img src="./img/Logo.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
                <p>Marina di Tertenia - 08047 Tertenia (NU) - Sardegna</p>
                </div>
                <div className="footer_back_to_top">
                <a href="#top" className="back_to_top">↑ Torna su</a>
                </div>
            </div>
            <div className="col-25">
                <div className="footer_Privacy_Cookies_Policy">
                <ul>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="cookies.html">Cookies Policy</a></li>
                </ul>               
                </div>
            </div>
            <div className="col-25">
                <div className="footer_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/DoveSiamo">Dove Siamo</Link></li>
                    <li><Link to="/Villette">Villette</Link></li>
                    <li><Link to="/CulturaCucina">Cultura e Cucina</Link></li>
                </ul>
                </div>
            </div>
            <div className="col-25">
                <div className="footer_social">
                <a href="https://www.instagram.com/casa_vacanze_ogliastra" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" /></a>
                </div>
            </div>
        </div>
        
        {/* Link Instagram per mobile - posizionato in basso a sinistra */}
        <a href="https://www.instagram.com/casa_vacanze_ogliastra" target="_blank" rel="noopener noreferrer" className="instagram-mobile" aria-label="Instagram">
        </a>
        
            <div className="footer_copyright">
            © {new Date().getFullYear()} Casa Vacanze Ogliastra. Tutti i diritti riservati.
            </div>
    </footer>
  );
}

export default Footer;