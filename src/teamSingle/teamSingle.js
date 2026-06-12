import "./teamSingle.css";
import photo from "../images/pkhome_images/portraits/petyerak-kati-bemutatkozo-rs-pkhome.hu_.jpg";
// removed other members components for single-person "Rólam" page


export function TeamSingle() {
  return (
    <div className="teamSingle">
      <div className="single-header">
        <h1>
          Rólam
        </h1>
      </div>
      <div className="personal-detail">
        <div className="personal-img">
          <img src={photo} alt="Takács Tamás Márk"></img>
        </div>
        <div className="p-d-content">
          <div className="p-d-info">
            <p className="story-section-label">A &quot;Két Cipő&quot; Története (Személyes Brand Sztori)</p>
            <h1>Az én küszöbeim</h1>
            <p className="subcontent">
              2018-ban két nagyon különböző cipő volt a lábamon. Az egyikben a BME ipari termék- és formatervező szakának hallgatójaként jártam, a másikban a Kalazancius Mozgalom önkéntes vezetőjeként.
            </p>
            <p className="subcontent">
              Lánézetem a lábamra, és a cipőim aligha hasonlítottak. De egy dolog közös volt bennük: egyikkel sem tudtam pontosan, mi lesz a következő lépés. Ez a bizonytalanság tanított meg arra, hogy a küszöbön állás nem egy passzív állapot, hanem a legnagyobb potenciál tere.
            </p>
            <h2 className="profession-label">Szakmai hitvallás:</h2>
            <p className="subcontent">
              Ma már látom az összefüggést. Tervezőmérnökként rendszerekben és megoldásokban gondolkodom (Design Thinking), coachként pedig teret tartok és kísérek. Ez a kettősség teszi lehetővé, hogy az ügyfeleim ne csak &quot;jól érezzék magukat&quot;, hanem valódi, tervezhető változást érjenek el.
            </p>
          </div>
        </div>
      </div>

      <div className="trust-markers">
        <h2>Amire támaszkodhatsz</h2>
        <ul>
          <li>8 év aktív közösségvezetői tapasztalat</li>
          <li>Life &amp; Business Coach képesítés (Coaching Centrum)</li>
          <li>Design Thinking és Rendszerszemléletű megközelítés</li>
          <li>Szakmai fókusz: Változásmenedzsment, Reziliencia, Vezetői attitűd fejlesztés</li>
        </ul>
      </div>
      
      {/* Csapatunk tagjai szekció eltávolítva: egyetlen bemutatkozó oldal */}
      {/* <div className="single-contact">
        <h1>Lépjen kapcsolatba velem</h1>
        <div className="nameEmail">
            <input name="fulname" type="text" placeholder="Név" required />
            <input name="email" type="text" placeholder="E-mail" required />
        </div>
        <div className="single-mail-content">
        <textarea name="emailContent" type="text" placeholder="Üzenet szövege" required />
        </div>
        <div className="single-mail-send">
            <div className="saving">
            <input type="checkbox" name="remember-mail"/>
            <label>Mentse a nevemet, e-mail címemet és weboldalamat a böngészőben a következő hozzászóláshoz.</label>
            </div>
            <div className="send-button">
            <button>
                Küldés
                <BsArrowRight style={{ marginLeft: "5px" }} color="#6FE5D4" />
            </button>
            </div>
        </div>
      </div> */}
    </div>
  );
}
