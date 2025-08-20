import Layout from "./Layout";
import "./Banner.css";
import GalleryDoveSiamo from "./GalleryDoveSiamo";


function DoveSiamo() {
  return (
    <Layout>
       <section className="banner">
        <div className="banner_text">
          <h3>Dove Siamo</h3>
          <p>
            La Marina di Tertenia si trova in Ogliastra, nella costa orientale della Sardegna.
          </p>
          <p>
            In nave può essere raggiunta attraverso i seguenti porti:
          </p>
              <ul>
                <li>• Porto di Arbatax = 40 km</li>
                <li>• Porto di Cagliari = 120 km</li>
                <li>• Porto di Olbia = 200 km</li>
                <li>• Porto di Golfo Aranci = 220 km</li>
                <li>• Porto di Porto Torres = 230 km</li>
              </ul>
          <p>
            Per chi volesse viaggiare in aereo è possibile raggiungere la Marina di Tertenia noleggiando una macchina dai seguenti aeroporti:
          </p>
              <ul>
                <li>• Aeroporto di Cagliari Elmas = 110 km</li>
                <li>• Aeroporto di Olbia = 200 km</li>
                <li>• Aeroporto di Alghero = 240 km</li>
              </ul>
        </div>
        <div className="banner_image">
            <img src="./img/DoveSiamo.jpg" alt="Casa Vacanze Ogliastra" className="img_resp"/>
        </div>
    </section>
    
    {/* Galleria fotografica della Marina di Tertenia */}
    <GalleryDoveSiamo />

    <hr className="section-separator" />
    
    </Layout>
  );
}

export default DoveSiamo;
    