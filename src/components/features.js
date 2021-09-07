import FeatureComponent from "./feature-component";
import "../css/app.css";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <FeatureComponent
          src="https://img.icons8.com/material/96/000000/naruto-sign.png"
          feature="Interactive Design"
          feature_details="Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt."
        />
        <FeatureComponent
          src="https://img.icons8.com/ios-filled/96/000000/pied-piper-2.png"
          feature="Latest Technology"
          feature_details="Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt."
        />
        <FeatureComponent
          src="https://img.icons8.com/color/96/000000/valorant.png"
          feature="Install Apps"
          feature_details="Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt."
        />
        <FeatureComponent
          src="https://img.icons8.com/nolan/96/new-world.png"
          feature="Gps Tracking"
          feature_details="Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt."
        />
      </div>
    </>
  );
};

export default Feature;
