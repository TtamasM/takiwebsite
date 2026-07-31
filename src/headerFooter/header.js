import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../taki_images/taki_logo.png";
import "./header.css";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-logo-text">
          <Link style={{display:"flex", alignItems:"center", gap:"15px"}} to="/">
            <div className="header-logo">
              <img src={logo} alt="logo"></img>
            </div>
            <div className="header-text">
              {/* <p>PK Home</p> */}
            </div>
          </Link>
        </div>
        
        <div className="header-pages">
          <ul>
              <li><Link to={`/`}>Kezdőlap</Link></li>
              <li><Link to={`/rolunk`}>Rólam</Link></li>
              <li><Link to={`/services`}>Szolgáltatások</Link></li>
              {/* <li><Link to={`/projects`}>Referenciáim</Link></li>
              <li><Link to={`/megjelenesek`}>Megjelenések</Link></li> */}
              <li><Link to={`/process`}>Folyamatom</Link></li>
              <li><Link to={`/contact`}>Kapcsolat</Link></li>
          </ul>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          ×
        </button>
        <ul>
          <li><Link to="/" onClick={closeMobileMenu}>Kezdőlap</Link></li>
          <li><Link to="/rolunk" onClick={closeMobileMenu}>Rólam</Link></li>
          <li><Link to="/services" onClick={closeMobileMenu}>Szolgáltatások</Link></li>
          <li><Link to="/process" onClick={closeMobileMenu}>Folyamatom</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Kapcsolat</Link></li>
        </ul>
      </div>
    </>
  );
}
