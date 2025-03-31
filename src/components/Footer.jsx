import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        {/* <div className="grid"> */}
            <div className="col-25">
                <img src="./src/img/logo_juve.png" alt="Logo Casa Vacanze Ogliastra" className="logo" />
                <p>Casa Vacanze Ogliastra - La tua vacanza in Sardegna inizia da qui</p>
            </div>
            <div className="col-25">
                <p>Marina di Tertenia</p>
                <p>Tertenia (NU)</p>
                <p>Sardegna</p>
            </div>
            <div className="col-25">
                <p>Privacy e Cookies Policy</p>
            </div>
            <div className="col-25">
                <p>Social</p>
                {/* qui mettici i pulsanti social */}
            </div>
        {/* </div> */}
    </footer>
  );
}

export default Footer;