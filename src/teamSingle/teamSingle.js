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
          <img src={photo} alt="Petyerák Kati"></img>
        </div>
        <div className="p-d-content">
          <div className="p-d-info">
            <h1>Petyerák Kati</h1>
            <p className="job">Lakberendező, Az Év Lakberendezője 2016</p>
            <p className="subcontent">
            20 év repülés után elhatároztam, hogy professzionális szintre emelem azt a tevékenységet, amit hobbiként mindig is gyakoroltam, és amihez barátaim szerint tehetségem van. Célom olyan enteriőrök létrehozása, ahol a jó térszervezés, praktikus megoldások és a burkolatok, bútorok, textíliák, kiegészítők, valamint a világítás harmonikus összhangja biztosítja a kényelmet és jó közérzetet.
            </p>
            <p className="subcontent">
            Lakásokból és házakból otthonokat szeretnék varázsolni, ahova jó hazatérni, és ahol feltöltődve indulhat a nap. A 2016-ban elnyert „Az Év Lakberendezője” díj óta számos megtisztelő felkérés és sajtómegjelenés kíséri munkámat. Hálás vagyok, hogy mindig azt csinálhattam, amit szeretek és megvalósíthatom nemcsak a saját, hanem ügyfeleim álmait is.
            </p>
          </div>
          <div className="icons">
            
          </div>
        </div>
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
