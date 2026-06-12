import "./restricted.css";
import { BsArrowRight } from "react-icons/bs";

export function RestrictedPage() {
    return(
        <div className="restricted">
        <div className="restricted-header">
          <h1>Korlátozott oldal<p>Kezdőlap / Korlátozott</p></h1>
          
        </div>
            <div className="passwordPart">
                <div className="p-text-part">
                <h1>Jelszóval védett</h1>
                <p>Ez az oldal jelszóval védett. Ha Ön az oldal adminisztrátora, vagy jogosultsággal rendelkezik, adja meg alább a jelszót.
</p>
                </div>
                <div className="enterPassword">
                    <input placeholder="Adja meg a jelszót"/>
                    <button>Küldés <BsArrowRight style={{marginLeft:"5px"}} color="#6FE5D4"/></button>
                </div>
                    
            </div>
        </div>
    );
}