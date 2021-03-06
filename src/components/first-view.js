import NavBar from "./nav";
import Header from "./header";
import "../css/app.css";

const FirstView = () => {
  return (
    <div
      className="top"
      style={{
        background: ` url(/img/download-bg.jpg)`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,288L26.7,245.3C53.3,203,107,117,160,117.3C213.3,117,267,203,320,234.7C373.3,267,427,245,480,213.3C533.3,181,587,139,640,122.7C693.3,107,747,117,800,128C853.3,139,907,149,960,170.7C1013.3,192,1067,224,1120,218.7C1173.3,213,1227,171,1280,128C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="overlay">
        <NavBar />
        <Header />
      </div>
    </div>
  );
};

export default FirstView;
