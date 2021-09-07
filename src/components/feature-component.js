const FeatureComponent = (props) => {
  return (
    <>
      <div className="feature-containers">
        <img src={`${props.src}`} alt={props.alt_txt} />
        <span>{props.feature}</span>
        <p>{props.feature_details}</p>
      </div>
    </>
  );
};

export default FeatureComponent;
