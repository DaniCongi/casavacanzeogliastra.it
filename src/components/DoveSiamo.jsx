import Layout from "./Layout";
import "./DoveSiamo.css";
import "./Banner.css";
import GalleryDoveSiamo from "./GalleryDoveSiamo";


function DoveSiamo() {
  return (
    <Layout>
       <section className="banner">
        <div className="banner_text">
          <h3>DOVE SIAMO</h3>
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
          <p>Per chi volesse viaggiare in aereo è possibile raggiungere la Marina di Tertenia noleggiando una macchina dai seguenti aeroporti:</p>
              <ul>
                <li>• Aeroporto di Cagliari Elmas = 110 km</li>
                <li>• Aeroporto di Olbia = 200 km</li>
                <li>• Aeroporto di Alghero = 240 km</li>
              </ul>
          <p>È vero che il mare in Sardegna è tutto stupendo ma è anche vero che ogni costa ha le sue peculiarità.</p> 
          <p>Una volta arrivati nella Marina di Tertenia, potrete godere di un ambiente tranquillo e rilassante, immerso nella natura.</p>  
          <p>Fanno da cornice a questo magnifico scenario le nostre due splendide spiagge di sabbia fine e chiara, acqua cristallina e basso fondale.</p>
         
        </div>
        <div className="banner_image">
            <img src="./img/DoveSiamo.jpg" alt="Casa Vacanze Ogliastra" className="img_resp"/>
        </div>
    </section>

     <div className="beaches">
          <div className="beach-info">
            <h4>🏖️ Spiaggia di Foxi Manna</h4>
            <p>
              La più grande della Marina, lunga circa un chilometro, si posiziona ai piedi 
              del bellissimo Monte Cartucceddu. La sabbia è finissima e chiara, mentre 
              l'acqua si caratterizza per il suo colore cristallino e per la bassa profondità.
            </p>
          </div>
          
          <div className="beach-info">
            <h4>🏖️ Spiaggia di Melisenda</h4>
            <p>
              Anche conosciuta come Foxi Murdegu, è dominata dalla torre di avvistamento 
              spagnola di San Giovanni. Il mare presenta un fondale basso e sabbioso, 
              perfetto per famiglie con bambini.
            </p>
          </div>
        </div>
    
    <GalleryDoveSiamo />

    <hr className="section-separator" />
    
    </Layout>
  );
}
export default DoveSiamo;
    