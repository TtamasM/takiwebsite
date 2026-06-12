import "../project/project.css";
import "../project/projectCard.css";
import "./appearances.css";
import { appearancesBySource } from "./appearancesData";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function Appearances() {
  const renderAppearanceItem = (item, idx) => {
    if (item.type === 'youtube') {
      return (
        <YouTubeEmbed
          key={`${item.id}-${idx}`}
          videoId={item.videoId}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      );
    }

    // Handle external links (like Fem3 Cafe)
    if (item.type === 'external') {
      return (
        <div className="op-project" key={`${item.id}-${idx}`}>
          <div className="op-pro-img">
            <img src={item.thumbnail || item.image} alt="appearance"></img>
          </div>
          <div className="op-pro-detail">
            <div className="op-pro-info">
              <p className="op-prj-title">{item.title}</p>
              <p className="op-prj-path">Külső link</p>
              {item.description && (
                <p className="op-prj-description">{item.description}</p>
              )}
            </div>
            <div className="op-pro-btn">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>
                  {/* simple chevron */}
                  &rarr;
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Default PDF/image appearance
    return (
      <div className="op-project" key={`${item.id}-${idx}`}>
        <div className="op-pro-img">
          <img src={item.image} alt="appearance"></img>
        </div>
        <div className="op-pro-detail">
          <div className="op-pro-info">
            <p className="op-prj-title">{item.title}</p>
            <p className="op-prj-path">Publikáció</p>
            {item.description && (
              <p className="op-prj-description">{item.description}</p>
            )}
          </div>
          <div className="op-pro-btn">
            <a href={item.pdf} target="_blank" rel="noopener noreferrer">
              <button>
                {/* simple chevron */}
                &rarr;
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project">
      <div className="appearances-header">
      </div>
      
      {Object.entries(appearancesBySource).map(([sourceName, items]) => (
        <div key={sourceName} className="appearances-section">
          <div className="section-header">
            <h2 className="section-title">{sourceName}</h2>
            <div className="section-divider"></div>
          </div>
          <div className="our-projects">
            {items.map((item, idx) => renderAppearanceItem(item, idx))}
          </div>
        </div>
      ))}
    </div>
  );
}


