import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_text">
            <img src="./src/img/logo_juve.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
            <p>Casa Vacanze Ogliastra<br/>Marina di Tertenia<br/>08047 Tertenia (NU)<br/>Sardegna</p>
        </div>
        {/* <div className="footer_Privacy_Cookies_Policy">
            <a href="privacy.html">Privacy Policy</a> | <a href="cookies.html">Cookies Policy</a>
        </div> */}
        <div className="footer_social">
            <a href="https://www.instagram.com/casa_vacanze_ogliastra" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" /></a>
        </div>
        {/* <div className="footer_back_to_top">
            <a href="#top" className="back_to_top">Back to top</a>
            </div> */}
    </footer>
  );
}

export default Footer;