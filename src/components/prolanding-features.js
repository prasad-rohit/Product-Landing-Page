import "../css/app.css";

const ProLandingFeatures = (props) => {
  return (
    <div className="pro-container">
      <div className="pro">
        <img src={`${props.src}`} alt={props.alt} />
        <div className="details">
          <span className="pro-features">{props.proFeatures}</span>
          <p className="pro-details">{props.proDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default ProLandingFeatures;
