import "../index.css"
import "../css/components/EntryModal.css"
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Tournaments from "../data/tournaments.json"
import Trades from "../data/trades.json"
import InformationModal from "./InformationModal";
import { useState } from "react";

const getTournamentFromJson = (id) => {
    return Tournaments.find(entry => entry.id == id);
}

const getTradesFromJson = (id) => {
  return Trades.find(entry => entry.id == id);
}

const getLevelBackground = (level) => {
    switch (level) {
        case "Beginner":
            return "success";

        case "Intermediate":
            return "warning";

        case "Expert":
            return "danger";
    
        default:
            return "primary";
    }
}

export default function EntryModal(params) {
    const [show, setShow] = useState(false);
    const handleOpen = () => {setShow(true)}
    const handleClose = () => {setShow(false)}

    var item;
    var infoModalBtnMsg;

    switch (params.type) {
      case "tournaments":
        item = getTournamentFromJson(params.id);
        infoModalBtnMsg = "Join";
        break;

      case "trades":
          item = getTradesFromJson(params.id);
          infoModalBtnMsg = "Send";
          break;
    
      default:
        break;
    }

    const levelBackground = getLevelBackground(item.level);

    return (
        <div>
            <Modal show={params.show} onHide={params.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="align">{item.name}</Modal.Title>
                </Modal.Header>
                <Card className="entry-modal">
                    <Card.Img variant="top" src={item.src}/>
                    <Card.Body>
                        <Stack direction="horizontal" className="justify-content-center modal-stack" gap={2}>
                            <Badge pill>{item.date} @ {item.time}</Badge>
                            <Badge pill>{item.location}</Badge>
                            <Badge bg={levelBackground} pill>{item.level}</Badge>
                            {item.genres.map(genre => (
                                <Badge pill>{genre}</Badge>
                            ))}
                        </Stack>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Footer className="text-align-center">
                            <Button onClick={handleOpen} className="join-button">{params.btnMsg}</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Modal>

            <InformationModal show={show} handleClose={handleClose} btnMsg={infoModalBtnMsg}></InformationModal>
        </div>
    );
}