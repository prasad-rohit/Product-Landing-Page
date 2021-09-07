import ProLandingFeatures from "./prolanding-features";
import "../css/app.css";

const ProLandingComponent = () => {
  return (
    <>
      <h1>ProLanding Features</h1>
      <p>
        Continually network virtual strategic theme areas vis-a-vis ubiquitous
        potentialities. Holisticly negotiate focused e-tailers without premium
        solutions.
      </p>
      <div className="prolandingfeatures-container">
        <img src="img/feature-image.png" alt="" />
        <div>
          <ProLandingFeatures src="https://img.icons8.com/ios-glyphs/96/000000/heart-monitor.png" />
          <ProLandingFeatures src="https://img.icons8.com/ios/100/000000/step-length.png" />
          <ProLandingFeatures />
          <ProLandingFeatures />
        </div>
        <div>
          <ProLandingFeatures />
          <ProLandingFeatures />
          <ProLandingFeatures />
          <ProLandingFeatures />
        </div>
      </div>
    </>
  );
};

export default ProLandingComponent;
