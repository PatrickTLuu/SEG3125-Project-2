import "../index.css"
import "../css/components/InformationModal.css"
import { Card, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const SendMessage = (params) => {
    if (params.isTrade) {
        return (                    
        <Form.Group className="margin-top">
            <Form.Label>Your message</Form.Label>
            <Form.Control type="text" as="textarea"></Form.Control>
        </Form.Group>  
        );
    } else {
        return null;
    }
}

export default function InformationModal(params) {
    return (
        <Modal show={params.show} onHide={params.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="align">Your Information</Modal.Title>
            </Modal.Header>
            <Card className="entry-modal">
                <Card.Body>
                    <Form.Group className="margin-top">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name"></Form.Control>
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>Your email</Form.Label>
                        <Form.Control type="text" placeholder="Enter your email"></Form.Control>
                    </Form.Group> 
                    <SendMessage isTrade={params.btnMsg === "Send"}></SendMessage>
                    <Row className="margin-top justify-content-center">
                        <Button className="join-button">{params.btnMsg}</Button>
                    </Row>
                </Card.Body>
            </Card>
        </Modal>
    );
}