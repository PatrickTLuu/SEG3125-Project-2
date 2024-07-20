import "../index.css"
import { Button, Card, Modal } from "react-bootstrap";

export default function ResultModal(params) {
    return (
        <div>
            <Modal show={params.show} onHide={params.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{params.tournament + " result"}</Modal.Title>
                </Modal.Header>
                <Card className="entry-modal">
                    <Card.Img variant="top" src={params.src}/>
                    <Card.Body className="entry-body">
                        <Card.Footer className="text-align-center">
                            <Button variant="danger" onClick={params.handleClose} className="join-button">Close</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Modal>
        </div>
    );
}