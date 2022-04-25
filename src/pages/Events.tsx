import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api_listCharityEvents, api_sendDonation } from "../api/api";
import { weiToEth } from "../eth";

const EventItem = ({ event }: { event: any }) => {
  const [showPopup, setShowPopup] = useState(false);
  const closeModal = () => {
    setShowPopup(false);
  };
  return (
    <Paper
      sx={{
        width: "50%",
        margin: "auto",
        padding: 2,
        height: "max-content",
        marginTop: 5,
      }}
    >
      <div style={{ height: 250 }}>
        <img
          src={event.imageUri}
          alt="my image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <Typography variant="h3">{event.name}</Typography>
      <Typography>{event.description}</Typography>
      <br />
      <Button variant="contained" onClick={() => setShowPopup(true)}>
        Fund It
      </Button>
      <br />
      <br />
      <Typography variant="h4">$ {weiToEth(event.money)}</Typography>
      <Paymentpopup
        eventId={event.id}
        show={showPopup}
        closeModal={closeModal}
      />
    </Paper>
  );
};

const Paymentpopup = ({
  eventId,
  show,
  closeModal,
}: {
  eventId: number;
  show: boolean;
  closeModal: any;
}) => {
  const [amount, setAmount] = useState("");

  const handleDonation = async () => {
    await api_sendDonation(eventId, amount);
    closeModal();
    window.location.reload();
  };

  return (
    <Modal open={show} onClose={closeModal}>
      <Paper sx={{ width: 800, margin: "auto", marginTop: "20%", padding: 4 }}>
        <Typography variant="h4" textAlign="center">
          Donate
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <br />
          <TextField
            variant="outlined"
            placeholder="Ammount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={handleDonation}>
            Donate
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    api_listCharityEvents().then((result) => setEvents(result));
  }, []);

  return (
    <div>
      <Typography variant="h2">Charities</Typography>
      {events.map((item) => (
        <EventItem key={item.id} event={item} />
      ))}
    </div>
  );
};

export default Events;
