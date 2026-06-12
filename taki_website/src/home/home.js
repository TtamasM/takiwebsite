import "./home.css";
import "./homeResponsive.css";
import { useEffect, useMemo, useState } from "react";
import thoughts from "./peopleThoughts.json";
import slide1 from "../images/pkhome_images/home_slides/slider-1.jpg";
import slide3 from "../images/pkhome_images/home_slides/slider-3.jpg";
import slide4 from "../images/pkhome_images/home_slides/slider-4.jpg";
import slide5 from "../images/pkhome_images/home_slides/slider-5.jpg";
import slide6 from "../images/pkhome_images/margit/KJA_25062024_075.jpg";
import slide7 from "../images/pkhome_images/margit/KJA_25062024_085.jpg";
import slide8 from "../images/pkhome_images/budakeszi/240126_4_PK_Budakeszi_3_002.jpg";
import slide9 from "../images/pkhome_images/pascal_garden/kep_7.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function HomeSlider() {
  const slides = useMemo(() => [slide1, slide3, slide4, slide5, slide6, slide7, slide8, slide9], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="home-slider">
      <button className="hs-nav hs-prev" onClick={prev} aria-label="Előző">‹</button>
      <button className="hs-nav hs-next" onClick={next} aria-label="Következő">›</button>
      {slides.map((src, i) => (
        <div key={i} className={`hs-slide ${i === currentIndex ? "active" : ""}`}>
          <img src={src} alt={`slide-${i + 1}`} />
        </div>
      ))}
      <div className="hs-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hs-dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ugrás a ${i + 1}. képre`}
          />
        ))}
      </div>
    </div>
  );
}
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
        <HomeSlider />
      </div>
      <div className="homeOther" style={{ marginTop: '10%' }}>
        {/* <div className="homeAboutUs">
            <div className="hp-subtext">
              <h1>Stílusos élettereket alkotunk</h1>
              <p>
                Régóta ismert tény, hogy az oldal elrendezése elterelheti az
                olvasó figyelmét a tartalomról; mi az áttekinthetőségre és a
                harmóniára törekszünk.
              </p>
              <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel:+36209686946">
              <p>
                +36 (20) 96 86 946
                <br />
                <span>Hívjon minket bizalommal</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Ingyenes árajánlatot kérek
              <BsArrowRight style={{ marginLeft: "2%", color: "#6FE5D4" }} />
            </button>
          </Link>
        </div>
            </div>
            <div className="hp-img">
              <img src={home1} alt="concept"></img>
            </div>
        </div> */}
        {/* <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel:+36209686946">
              <p>
                +36 (20) 96 86 946
                <br />
                <span>Call Us Anytime</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#6FE5D4" }} />
            </button>
          </Link>
        </div> */}

        <div className="people-thoughts">
          <h1 style={{ color: 'white' }}>Visszajelzések</h1>
          <TestimonialsSlider testimonials={thoughts.people} />
        </div>
        
      </div>
      {/* Blog section removed */}
      {/* <div className="h-interno">
        <h1>Csatlakozna az Internóhoz?</h1>
        <p>Vegye fel velünk a kapcsolatot még ma.</p>
        <Link to={`/contact`}>
          <button>
            Lépjen kapcsolatba velünk
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#3E3F43"
            />
          </button>
        </Link>
      </div> */}
    </div>
  );
}
