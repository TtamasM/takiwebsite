import "./home.css";
import "./homeResponsive.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import thoughts from "./peopleThoughts.json";
import heroImage from "../taki_images/doorstep.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function TestimonialsSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  const hasMultipleTestimonials = totalTestimonials > 1;
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className="testimonials-slider">
      {hasMultipleTestimonials && (
        <button 
          className="testimonial-nav side-nav prev" 
          onClick={handlePrev}
          aria-label="Előző vélemény"
        >
          <BsArrowLeft />
        </button>
      )}
      
      <div className="people single-testimonial">
        <div className="person">
          <div className="person-title">
            <p>
              {currentTestimonial.fullname}
              <br />
              <span>{currentTestimonial.country}</span>
            </p>
          </div>
          <p className="thought">{currentTestimonial.thoughts}</p>
        </div>
      </div>
      
      {hasMultipleTestimonials && (
        <button 
          className="testimonial-nav side-nav next" 
          onClick={handleNext}
          aria-label="Következő vélemény"
        >
          <BsArrowRight />
        </button>
      )}
      
      {hasMultipleTestimonials && (
        <div className="testimonials-dots-container">
          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`${i + 1}. vélemény`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Home() {
  return (
    <div className="home">
      <div className="fullscreen-slider">
        <div className="home-slider">
          <img src={heroImage} alt="Küszöb" className="home-hero-image" />
        </div>
        <div className="hero-overlay">
          <h1>Alakítsd át a következő fejezeted a legjobb fejezeteddé.</h1>
          <p className="hero-subtitle">
            A küszöbről bármerre fordulhatsz. Ne csak építsd a céged, hanem éld is az életed.
          </p>
          <Link to="/contact">
            <button className="hero-cta">
              Időpontot foglalok egy ingyenes beszélgetésre
              <BsArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </Link>
        </div>
      </div>
      {/* Reduced margin-top from 10% to 5% */}
      <div className="homeOther" style={{ marginTop: '5%' }}>
        <div className="home-problem-solution">
          <h1>Küszöbön állsz. Mi van mögötted? És mi vár rád?</h1>
          <p>
            A változás tere tele van bizonytalansággal, de lehetőséggel is. Legyen szó
            karrierváltásról, vezetői elakadásról vagy magánéleti útkeresésről, ezek a
            pillanatok nem pusztán átmenetek – hanem meghatározó fejezetek.
          </p>
          <h2>Mit nyerhetsz a közös munkával?</h2>
          <ul>
            <li><strong>Időt:</strong> Spórolj meg éveket a tanulási görbén gyakorlatias stratégiákkal.</li>
            <li><strong>Fókuszt:</strong> Lépj ki a napi tűzoltásból és lásd tisztán a jövődet.</li>
            <li><strong>Biztonságot:</strong> Egy objektív partnert, aki segít a kockázatok csökkentésében.</li>
          </ul>
        </div>

        <div className="home-intro-teaser">
          <p>
            Takács Tamás vagyok, Life &amp; Business Coach, szervezetfejlesztő tréner. A mérnöki
            precizitást ötvözöm a segítői empátiával, hogy a káoszból rendet, a bizonytalanságból
            pedig cselekvési tervet formáljunk.
          </p>
          <Link to="/rolunk">Tovább a Rólam oldalra →</Link>
        </div>

        <div className="people-thoughts">
          <h1 style={{ color: 'white' }}>Visszajelzések</h1>
          <TestimonialsSlider testimonials={thoughts.people} />
        </div>
        
      </div>
    </div>
  );
}