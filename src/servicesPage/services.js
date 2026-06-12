import "./services.css";
import services from "./services.json";

export function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Szolgáltatások
        </h1>
      </div>

      <div className="services-intro">
        <h2>Mi a coaching velem?</h2>
        <p>{services.intro}</p>
      </div>

      <div className="service-packages">
        <h2>Csomagajánlatok</h2>
        <div className="package-grid">
          {services.packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.service_name}</h3>
              {pkg.subtitle && <p className="package-subtitle">{pkg.subtitle}</p>}
              <p><strong>Kinek ajánlom?</strong> {pkg.for_whom}</p>
              <p><strong>Értékígéret:</strong> {pkg.value}</p>
              <p className="package-price"><strong>Ár:</strong> {pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="training-topics">
        <h2>Tréning Témák <span className="coming-soon">(Hamarosan)</span></h2>
        <ul>
          {services.training_topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="howWeWork">
        <div className="how-title">
          <h1>Hogyan dolgozom?</h1>
        </div>
        <div className="process-steps">
          {services.process.map((item, index) => (
            <div className="process-step" key={index}>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="process-content">
                <h3>{item.step}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
