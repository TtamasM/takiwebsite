import "./serviceSingle.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


export function ServiceSingle() {
  return (
    <div className="serviceSingle">
      <div className="serviceS-header">
        <h1>
          Szolgáltatás részletei<p>Kezdőlap / Szolgáltatás</p>
        </h1>
      </div>
      <div className="serviceS-info">
        <div className="ss-info-detail">
          <h1>Mi teremtjük a modern lakberendezés trendjeit.</h1>
          <p>
            <span>
              Régóta ismert tény, hogy az oldal elrendezése elterelheti a
              figyelmet a tartalomról.{" "}
            </span>
            <br />
            <br />
            Az átlátható tervezés és a letisztult elrendezés segít a lényegre
            fókuszálni. A harmonikus terek megnyugtató, inspiráló légkört
            teremtenek. <br />
            <br />
            Tervezéseinkben az esztétika és a funkcionalitás egyensúlyára
            törekszünk – a mindennapok kényelméért.
          </p>
        </div>
        <div className="ss-info-video">
          <ReactPlayer
            width="100%"
            height="350px"
            className="react-player"
            controls
            light
            url="https://www.youtube.com/embed/PqvlU9WI5pU"
          />
        </div>
        <div className="ss-pointers">
          <div className="ss-pointer one">
            <h1>A belső terek használata</h1>
            <ul>
              <li>Magas minőségű tervezési Szolgáltatásaim.</li>
              <li>Határidőre, naprakész designnal.</li>
              <li>Funkcionális, jól működő megoldások.</li>
              <li>Felújítások: kézzelfogható előnyök.</li>
              <li>Bizalommal állunk minden projektünk mögött.</li>
            </ul>
          </div>
          <div className="ss-pointer two">
            <h1>Művészetet teremtünk</h1>
            <ul>
              <li>Magas minőségű tervezési Szolgáltatásaim.</li>
              <li>Határidőre, naprakész designnal.</li>
              <li>Funkcionális, jól működő megoldások.</li>
              <li>Felújítások: kézzelfogható előnyök.</li>
              <li>Bizalommal állunk minden projektünk mögött.</li>
            </ul>
          </div>
        </div>
        <div className="go-portfolio">

            <div className="gp-text">
                <h1>Szeretjük a designt. Ezért jutottunk idáig.</h1>
                <p>Régóta ismert tény, hogy az elrendezés elvonhatja a figyelmet a tartalomról.</p>
                <Link to={`/ourportfolio`}><button>Portfóliónk <BsArrowRight style={{marginLeft:"2%", color:"#6FE5D4"}} /></button></Link>
            </div>
        </div>
        
      </div>
      <div className="experience">
            <div className="years">
                <p className="year num">12</p>
                <p>Év tapasztalat</p>
            </div>
            <div className="s-project">
                <p className="sp num">85</p>
                <p>Sikeres projekt</p>
            </div>
            <div className="a-project">
                <p className="ap num">15</p>
                <p>Futó projekt</p>
            </div>
            <div className="customers">
                <p className="cust num">95</p>
                <p>Elégedett ügyfél</p>
            </div>
        </div>
    </div>
  );
}
