import React, { useState } from 'react';
import './YouTubeEmbed.css';

export function YouTubeEmbed({ videoId, title, description, thumbnail }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Use custom thumbnail if provided, otherwise fall back to YouTube default
  const thumbnailSrc = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isLoaded) {
    return (
      <div className="youtube-embed-container">
        <div className="youtube-thumbnail" onClick={handleLoadVideo}>
          {!imageError ? (
            <img 
              src={thumbnailSrc}
              alt={title}
              className="youtube-thumbnail-img"
              onError={handleImageError}
            />
          ) : (
            // Fallback when thumbnail is not available
            <div className="youtube-thumbnail-fallback">
              <div className="youtube-fallback-content">
                <h4 className="youtube-fallback-title">{title}</h4>
                <p className="youtube-fallback-text">Kattints a lejátszáshoz</p>
              </div>
            </div>
          )}
          <div className="youtube-play-button">
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42-6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </div>
        <div className="op-pro-info">
          <p className="op-prj-title">{title}</p>
          {description && <p className="youtube-description">{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="youtube-embed-container">
      <div className="youtube-iframe-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="youtube-iframe"
        ></iframe>
      </div>
      <div className="op-pro-info">
        <p className="op-prj-title">{title}</p>
        {description && <p className="youtube-description">{description}</p>}
      </div>
    </div>
  );
}
