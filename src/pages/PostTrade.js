import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import "../index.css"
import "../css/pages/PostTrade.css"

export default function CreateTournament() {
    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className="title">Post a trade</h3>
                <Form>
                    <Form.Group className="margin-top">
                        <Form.Label>Contact email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>Video Game</Form.Label>
                        <Form.Control type="text" placeholder="Enter video game"></Form.Control>
                    </Form.Group>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>Genres</Form.Label>
                                <Multiselect type="genres"></Multiselect>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control className="date-input" type="date"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="margin-top">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"></Form.Control>
                    </Form.Group>
                    <Form.Group className="margin-top" controlId="formFile">
                        <Form.Label>Upload an image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Row className="margin-top text-align-center">
                        <Col>
                            <Button className="green pill" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}