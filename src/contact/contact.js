import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,

} from "react-icons/fa";
import portraitImage from "../images/pkhome_images/portraits/petyerak-katalin-pkhome.hu_.jpg";
import qrCode from "../images/qr-code.png";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">

      </div>
      <div className="contact-content">
        <div className="contact-intro">
          <div className="contact-portrait">
            <img src={portraitImage} alt="Petyerák Katalin" />
          </div>
          <div className="contact-info">
            <h2>Petyerák Katalin</h2>
            <h2>Keress bizalommal!</h2>
            <div className="contact-details">
              <p>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <a href="mailto:kpetyerak@hotmail.com">kpetyerak@hotmail.com</a>
              </p>
              <p>
                <span className="icon">
                  <BsTelephone />
                </span>
            

                <a href="tel:+36209686946">+36 (20) 96 86 946</a>
              
              </p>
            </div>
            <div className="contact-smedias">
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
          </div>
          <div className="contact-qr">
            <img src={qrCode} alt="Contact QR Code" />
          </div>
        </div>
        {/* <div className="contact-form">
          <h3>Kapcsolatfelvételi űrlap</h3>
          <div className="contact-form-fill">
            <div className="nameEmail">
              <input name="fullname" placeholder="Név" />
              <input name="mail" placeholder="E-mail" />
            </div>
            <div className="subjectPhone">
              <input name="subject" placeholder="Tárgy" />
              <input name="phone" placeholder="Telefon" />
            </div>
            <div className="interested">
              <textarea name="interested" placeholder="Szia! Érdekelne..." />
            </div>
            <div className="send">
              <button>
                Küldés
                <BsArrowRight style={{ marginLeft: "5px" }} color="#6FE5D4" />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
