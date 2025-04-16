import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="grid">
            <div className="col-25">
                <div className="footer_text">
                <img src="./src/img/logo_juve.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
                <p>Casa Vacanze Ogliastra<br/>Marina di Tertenia<br/>08047 Tertenia (NU)<br/>Sardegna</p>
                </div>
                <div className="footer_back_to_top">
                <a href="#top" className="back_to_top">Back to top</a>
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="dove-siamo.html">Dove Siamo</a></li>
                    <li><a href="villette.html">Villette</a></li>
                    <li><a href="cultura-e-cucina.html">Cultura e Cucina</a></li>
                    <li><a href="contatti.html">Contatti</a></li>
                </ul>
                </div>
            </div>
            <div className="col-25">
                <div className="footer_social">
                <a href="https://www.instagram.com/casa_vacanze_ogliastra" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" /></a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;