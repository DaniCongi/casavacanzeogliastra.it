import Layout from "./Layout";


function DoveSiamo() {
  return (
    <Layout>
       <banner className="banner">
        <div className="banner_text">
            <h3>Dove Siamo</h3>
            <p>
            La Marina di Tertenia si trova in Ogliastra, nella parte centro orientale della Sardegna.
          </p>
          <p>
            In nave può essere raggiunta attraverso i seguenti porti:
          </p>
              <ul>
                <li>• Arbatax = a soli 20 km, rappresenta la soluzione ottimale per raggiungere Tertenia e la sua Marina</li>
                <li>• Cagliari = 90 km</li>
                <li>• Olbia = 200 km</li>
                <li>• Golfo Aranci = 215 km</li>
                <li>• Porto Torres = 240 km</li>
              </ul>
          <p>
            Per chi volesse viaggiare in aereo è possibile raggiungere la Marina di Tertenia noleggiando una macchina dai seguenti aeroporti:
          </p>
              <ul>
                <li>• Cagliari Elmas</li>
                <li>• Olbia = 200 km</li>
                <li>• Alghero = 215 km</li>
              </ul>
        </div>
        <div className="banner_image">
            <img src="./src/img/DoveSiamo.jpg" alt="Casa Vacanze Ogliastra" className="img_resp"/>
        </div>
    </banner>
    </Layout>
  );
}

export default DoveSiamo;
    