import { useState } from "react";
import "./CookieAlert.css";

function CookieAlert() {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem("cookieAccepted");
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-alert">
      Questo sito utilizza cookie tecnici e di terze parti per migliorare l’esperienza di navigazione. 
      <a href="/cookies.html" target="_blank" rel="noopener noreferrer">Maggiori info</a>
      <button onClick={acceptCookies}>Accetta</button>
    </div>
  );
}

export default CookieAlert;