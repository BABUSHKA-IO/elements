import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import bgImg from "../media/backimg.png";
import homeDot1 from "../media/homeImg1.png";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  const handleEventsClick = () => {
    navigate("events");
  };

  const handleCreateEvent = () => {
    navigate("createevent");
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", height: "1657px" }}>
        <img
          src={bgImg}
          style={{
            position: "absolute",
            width: "1124px",
            height: "773.66px",
            left: "596px",
            top: "299.02px",
          }}
          alt="dsad"
        ></img>
        <img className="homeDot1" src={homeDot1} alt="dot" />
        <img className="homeDot2" src={homeDot1} alt="dot" />
        <div
          style={{
            width: "60%",
            height: "100%",
            background:
              "radial-gradient(98.15% 98.15% at 50% 1.85%, #F8FCFA 1.05%, rgba(235, 239, 237, 0.88) 100%)",
          }}
        >
          <div className="homeTitle">
            Make someone’s <span style={{ color: "#BC4D4D" }}>Life</span> by
            giving of <span style={{ color: "#A8378F" }}>yours</span>
          </div>

          <button
            className="buttonBase"
            style={{
              position: "absolute",
              width: "199px",
              height: "74.51px",
              left: "150px",
              top: "653.66px",
            }}
            onClick={handleEventsClick}
          >
            Events
          </button>

          <button
            className="buttonBaseOutlined"
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: "199px",
              height: "74.51px",
              left: "370px",
              top: "653.66px",
            }}
            onClick={handleCreateEvent}
          >
            Create
          </button>

          <div className="homeTextBack">
            <div className="homeTextTitle" style={{ width: "max-content" }}>
              About
            </div>

            <div
              className="homeTextBody"
              style={{ textAlign: "left", marginTop: 28 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ornare senectus sem libero nulla lobortis. Urna egestas nunc
              rhoncus nisl lorem scelerisque adipiscing et curabitur. Justo,
              fringilla a ut pharetra gravida rhoncus. Lectus
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgba(92, 173, 170, 0.88)",
            width: "40%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
