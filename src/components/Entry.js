import "../index.css"
import "../css/Entry.css"
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import tournaments from "../data/tournaments.json"
import { useState } from "react";

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

function EntryModal(item) {
    const levelBackground = getLevelBackground(item.level);

    return (
        <Modal show={item.show} onHide={item.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="align">{tournaments.name}</Modal.Title>
            </Modal.Header>
            <Card className="entry-modal">
                <Card.Img variant="top" src={tournaments.src}/>
                <Card.Body>
                    <Stack direction="horizontal" className="justify-content-center" gap={2}>
                        <Badge pill>{tournaments.datetime}</Badge>
                        <Badge pill>{tournaments.location}</Badge>
                        <Badge bg={levelBackground} pill>{tournaments.level}</Badge>
                    </Stack>
                    <Card.Text>
                        {tournaments.description}
                    </Card.Text>
                    <Card.Footer className="text-align-center">
                        <Button className="join-button">Join</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Modal>
    );
}

export default function Entry(item) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
    <div>
      <Card onClick={handleOpen} border="secondary" className="entry">
        <Card.Img variant="top" src={item.src}/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.datetime}<br/>
                {item.location}<br/>
                {item.level}<br/>
            </Card.Text>
        </Card.Body>
      </Card>

      <EntryModal show={show} handleClose={handleClose}></EntryModal>
    </div>
    );
}