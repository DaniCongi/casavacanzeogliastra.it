import Layout from "./Layout";
import "./Contatti.css";

function Contatti () {
  return (
    <Layout>
    <div className="contatti">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d41320.70398185191!2d9.61126755727196!3d39.6679694732924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sit!2sit!4v1755794899788!5m2!1sit!2sit" 
            className="contatti-map"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Marina di Tertenia">
        </iframe>
        
        <p><span className="contatti-emoji">📍</span> Marina di Tertenia - Tertenia (OG) - Sardegna - Italy</p>
        <p><span className="contatti-emoji">📞</span> +39 3496057518</p>
    </div>
    </Layout>
    );
}

export default Contatti;



    
