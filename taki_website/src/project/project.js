import "./project.css";
// Using dynamic data with images from pkhome_images
import { ProjectCard } from "./projectCard";
import projectsData from "./projectsData";

export function Project() {
  const projectsList = projectsData;
  const templateType = "grid"; // "grid" or "alternating"

  // Create alternating layout: 1 image, then 2 images, then 1 image, etc.
  const createAlternatingLayout = (projects) => {
    const rows = [];
    let currentIndex = 0;
    
    while (currentIndex < projects.length) {
      const isOddRow = Math.floor(rows.length) % 2 === 0; // 0, 2, 4... are odd rows (1 image)
      
      if (isOddRow) {
        // Single image row
        if (currentIndex < projects.length) {
          rows.push(
            <div key={`row-${rows.length}`} className="project-row single-image-row">
              <ProjectCard props={projects[currentIndex]} key={currentIndex} />
            </div>
          );
          currentIndex++;
        }
      } else {
        // Double image row
        const projectsInRow = [];
        for (let i = 0; i < 2 && currentIndex < projects.length; i++) {
          projectsInRow.push(projects[currentIndex]);
          currentIndex++;
        }
        
        const startIndex = currentIndex - projectsInRow.length;
        rows.push(
          <div key={`row-${rows.length}`} className="project-row double-image-row">
            {projectsInRow.map((project, index) => (
              <ProjectCard 
                props={project} 
                key={startIndex + index} 
                isHalfWidth={true}
              />
            ))}
          </div>
        );
      }
    }
    
    return rows;
  };

  const renderProjects = () => {
    if (templateType === "alternating") {
      return (
        <div className="our-projects-alternating">
          {projectsList !== undefined && !!projectsList.length 
          && createAlternatingLayout(projectsList)}
        </div>
      );
    } else {
      return (
        <div className="our-projects">
          {projectsList !== undefined && !!projectsList.length 
          && projectsList.map((pro, ind)=>{
            return (
            <ProjectCard props = {pro} key={ind}/>
            )
          })}
        </div>
      );
    }
  };

  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Referenciáim
        </h1>
      </div>
    
      {renderProjects()}
    </div>
  );
}
