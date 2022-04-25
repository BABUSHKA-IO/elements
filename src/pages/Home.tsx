import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      <Typography variant="h2">Tru Charity</Typography>

      <div
        style={{
          margin: "auto",
          width: 600,
          display: "flex",
          flexDirection: "column",
          marginTop: 50,
        }}
      >
        <Button variant="contained" onClick={handleEventsClick}>
          Charity Events
        </Button>
        <br />
        <Button variant="contained" onClick={handleCreateEvent}>
          Create Charity Events
        </Button>
      </div>
    </div>
  );
};

export default Home;
