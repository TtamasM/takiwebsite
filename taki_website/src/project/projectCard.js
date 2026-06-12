import "./projectCard.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export function ProjectCard(props) {
    const cardClass = props.isHalfWidth ? "op-project op-project-half" : "op-project";
    
    return(
        <div className={cardClass}>
          <div className="op-pro-img">
            <img src={props.props.image} alt="project"></img>
          </div>
          <div className="op-pro-detail">
            <div className="op-pro-info">
              <p className="op-prj-title">{props.props.project_name}</p>
              {/* {props.data.projects.projectName} */}
              {props.props.category && <p className="op-prj-path">{props.props.category}</p>}
            </div>
            <div className="op-pro-btn">
              <Link to={`/project-details/${props.props.id}`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
    );
}