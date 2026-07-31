import processData from "./process.json";
import "./process.css";

export function Process() {
  return (
    <div className="process">
      <div className="process-header">
        <h1>Folyamatom</h1>
      </div>

      <div className="process-section">
        <h2>Hogyan dolgozom?</h2>
        <p className="process-intro">
          Lépésről lépésre végigvezetlek az együttműködésünk útján.
        </p>
        <div className="process-steps">
          {processData.process.map((item, index) => (
            <div className="process-step" key={index}>
              <div className="process-number-circle">
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
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