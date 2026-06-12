import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/pkhome_images/pkhome-logo-rs.png";
import privacyPolicy from "../images/pk_home_pdfs/pkhome-adatkezelesi-tajekoztato.pdf";

import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{display:"flex", alignItems:"center", gap:"15px"}} to="/">
              <div className="f-logo">
                <img src={logo} alt="logo"></img>
              </div>
            </Link>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/kpetyerakhome/?locale=hu_HU">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pkhome.design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="f-privacy">
          <a href={privacyPolicy} target="_blank" rel="noopener noreferrer">Adatkezelési tájékoztató</a>
        </section>

        <section className="f-designer">
          <p>Designed by AndrasJuice</p>
        </section>
        {/* <section className="f-pages">
          <p>Oldalak</p>
          <div className="f-pages-grid">
            <div className="f-pages-column">
              <ul>
                <li>
                  <Link to={`/rolunk`}>Rólam</Link>
                </li>
                <li>
                  <Link to={`/projects`}>Projektjeink</Link>
                </li>
                <li>
                  <Link to={`/megjelenesek`}>Megjelenéseim</Link>
                </li>
              </ul>
            </div>
            <div className="f-pages-column">
              <ul>
                <li>
                  <Link to={`/contact`}>Kapcsolat</Link>
                </li>
                <li>
                  <Link to={`/services`}>Szolgáltatásaim</Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
    
        <section className="f-contact">
          <p>Kapcsolat</p>
          <p>
            <a href="mailto:takacstamasmark@gmail.com">takacstamasmark@gmail.com</a>
          </p>
          <p>
            <a href="tel:+36301783902">+36 30 178 3902</a>
          </p>
        </section>
      </div>
      
      <div className="f-copyright">
        <p>Copyright © PK Home</p>
      </div>
    </div>
  );
}
