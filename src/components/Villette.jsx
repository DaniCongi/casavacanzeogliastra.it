import { Link } from "react-router-dom";
import Layout from "./Layout";

function Villette() {
  return (
    <Layout>
    <div className="villette">
       <h1>Villette Marina di Tertenia</h1>
        <p>
        Le spiagge principali della Marina di Tertenia sono la spiaggia di Foxi Manna e la spiaggia di Melisenda.
        La spiaggia di Foxi Manna è la più grande della Marina. Lunga circa un chilometro si posiziona ai piedi del bellissimo Monte Cartucceddu. La sabbia è finissima e chiara, mentre l'acqua si caratterizza per il suo colore cristallino e per la bassa profondità.
        <br /><br />
        Altrettanto bella è la spiaggia di Melisenda, anche conosciuta come Foxi Murdegu, dominata dalla torre di avvistamento spagnola di San Giovanni. Anche qui il mare presenta un fondale basso e sabbioso.
        Disponiamo di una villetta sita nella zona di Foxi Manna e di una villetta sita in zona Melisenda.
        <br /><br />
        Entrambe le villette sono situate in una zona tranquilla e silenziosa, a pochi minuti di macchina dalle spiagge. Sono dotate di tutti i comfort e di un ampio giardino con barbecue.
        <br /><br />
        Per maggiori informazioni, consultare la sezione dedicata alle villette.
        </p>
        <ul>
            <li><Link to="/VillaCongera">Villa Congera</Link></li>
            <li><Link to="/VillaAntina">Villa Antina</Link></li>
        </ul>
    </div>
    </Layout>
  );    
}
export default Villette;
