import { Button, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_addCharityEvent } from "../api/api";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUri, setImageUri] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await api_addCharityEvent(name, desc, imageUri);
    navigate("/events");
  };

  return (
    <div>
      <Typography variant="h2">Create Event</Typography>

      <div
        style={{
          margin: "auto",
          width: 600,
          display: "flex",
          flexDirection: "column",
          marginTop: 50,
        }}
      >
        <img src={imageUri} alt="haha" style={{ maxHeight: 300 }} />
        <br />
        <TextField
          value={name}
          placeholder="Event Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          value={desc}
          placeholder="Event Description"
          variant="outlined"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <TextField
          value={imageUri}
          placeholder="Event image url"
          variant="outlined"
          onChange={(e) => setImageUri(e.target.value)}
        />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateEvent;
