import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/adminlogin");
  };

  const handleEventsClick = () => {
    navigate("/events");
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "1620px",
        height: "59.6px",
        left: "150px",
        top: "55px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "28px",
            lineHeight: "34px",
            color: "#000000",
            width: "max-content",
          }}
        >
          Tru Charity
        </div>

        <div
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#010101",
            width: "max-content",
            marginLeft: 80,
          }}
        >
          About
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          onClick={handleEventsClick}
          style={{
            fontFamily: "'Montserrat'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#FFFFFF",

            width: "max-content",
          }}
        >
          Events
        </div>

        <button
          style={{
            border: "2px solid #FFFFFF",
            color: "white",
            borderRadius: "15px",
            backgroundColor: "transparent",
            marginLeft: 100,
          }}
          onClick={handleAdminLogin}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default Header;
