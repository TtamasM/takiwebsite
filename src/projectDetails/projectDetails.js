import "./projectDetails.css";
import "./ImageGallery.css";
import { useState, useEffect } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useParams } from 'react-router-dom';
import projectDetailsData from './projectDetailsData';
import projectsData from '../project/projectsData';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function ProjectImageViewer({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) onPrev();
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) onNext();
          break;
        default:
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onPrev, onNext]);
  
  // Prevent body scroll when viewer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const image = images[currentIndex];
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className="image-viewer-overlay" onClick={handleOverlayClick}>
      <div className="image-viewer-content">
        <button className="viewer-close-btn" onClick={onClose} aria-label="Close viewer">
          <FaTimes />
        </button>
        
        <div className="viewer-navigation">
          <button 
            className="viewer-nav-btn prev" 
            onClick={onPrev}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>
          
          <div className="viewer-image-container">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="viewer-image"
            />
            <div className="viewer-image-info">
              {image.description && (
                <p className="viewer-image-description">{image.description}</p>
              )}  
              <p className="viewer-counter">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
          
          <button 
            className="viewer-nav-btn next" 
            onClick={onNext}
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageGallery({ images }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!images || images.length === 0) return null;
  
  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };
  
  const closeViewer = () => {
    setViewerOpen(false);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex(prev => Math.max(0, prev - 1));
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex(prev => Math.min(images.length - 1, prev + 1));
  };
  
  // Organize images into rows based on layout property
  const renderImageRows = () => {
    const rows = [];
    let currentRow = [];
    
    images.forEach((image, index) => {
      // If it's a single image or the first of a double layout, start a new row
      if (image.layout === "single" || currentRow.length === 2) {
        if (currentRow.length > 0) {
          rows.push([...currentRow]);
          currentRow = [];
        }
      }
      
      currentRow.push({ image, index });
      
      // If it's a single layout or the last image, push the current row
      if (image.layout === "single" || index === images.length - 1) {
        rows.push([...currentRow]);
        currentRow = [];
      }
    });
    
    return rows.map((row, rowIndex) => (
      <div key={`row-${rowIndex}`} className={`image-row ${row.length === 1 && row[0].image.layout === "single" ? "single-image-row" : "double-image-row"}`}>
        {row.map(({ image, index }) => (
          <div 
            key={`img-${index}`} 
            className={`image-container ${image.layout === "single" ? "single-image" : "double-image"}`}
            onClick={() => openViewer(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="project-image"
            />
            <div className="image-overlay">
              {image.description && (
                <p className="image-description">{image.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    ));
  };
  
  return (
    <div className="image-gallery">
      {renderImageRows()}
      <ProjectImageViewer 
        isOpen={viewerOpen}
        images={images}
        currentIndex={currentImageIndex}
        onClose={closeViewer}
        onPrev={goToPrevImage}
        onNext={goToNextImage}
      />
    </div>
  );
}

export function ProjectDetails() {
  const { id } = useParams();
  const meta = projectDetailsData[id] || {
    title: "Projekt részletek",
    date: "",
    paragraphs: [
      "Rövid leírás a projektről magyarul.",
      "További részletek és háttérinformációk a tervezett megoldásokról."
    ],
    images: []
  };
  
  // Find the project card image to use in the header
  const projectData = projectsData.find(project => project.id === id);
  const headerImage = projectData ? projectData.image : null;

  return (
    <div className="projectDetails">
      <div 
        className="pDetails-header"
        style={headerImage ? { backgroundImage: `url(${headerImage})` } : {}}
      ></div>
      <div className="details">
        <div className="d-project-info">
          <h2>{meta.title}</h2>
          {meta.paragraphs && meta.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
          {meta.date && (
            <div className="project-meta">
              <p><strong>Dátum:</strong> {meta.date}</p>
            </div>
          )}
        </div>
      </div>
      <ImageGallery images={(meta.images || []).map(img => ({ ...img, description: "" }))} />
    </div>
  );
}
