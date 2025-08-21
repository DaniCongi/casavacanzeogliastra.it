import { Link } from "react-router-dom";
import Layout from "./Layout";
import "./Villette.css";
import GalleryVillaAntina from "./GalleryVillaAntina";

function VillaAntina() {
  return (
  <Layout>
    <div className="villaAntina">
    <h3>VILLA ANTINA</h3>
    <p>
        Distante 5 minuti in macchina dalla spiaggia di Foxi Manna, la villetta è composta da 3 camere da letto, di cui due matrimoniali e una doppia, la cucina abitabile e il bagno con doccia. In totale i metri quadri della villetta sono 80. All'esterno è presente l'ampia veranda, una doccia esterna e il barbecue. La villetta è dotata di tutto il necessario: tv, lavatrice, ferro da stiro, phon, zanzariere, lenzuola, asciugamani.
    </p>
    </div>
    <GalleryVillaAntina/>
    <hr className="section-separator" />
  </Layout>
  );    
}
export default VillaAntina;