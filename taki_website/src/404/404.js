import "./404.css";
import { BsArrowRight } from "react-icons/bs";
// import photo from "../images/backgroung/404Bg.jpg";

export function NotFound() {
    return(
        <div className="notFound">
            <div className="error-text">
                <h1>404</h1>
                <p>Sajnáljuk, a keresett oldal nem található.</p>
                <button>Vissza a kezdőlapra<BsArrowRight style={{ marginLeft: "5px" }} color="#6FE5D4" /></button>
            </div>
            {/* <div className="error-img">
                <img src={photo} alt="error"></img>
            </div> */}
        </div>
    );
}