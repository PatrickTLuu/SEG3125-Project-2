import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import Selector from '../components/Selector'
import "../index.css"
import "../css/pages/CreateTournament.css"

export default function CreateTournament() {
    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className="title">Create a tournament</h3>
                <Form>
                    <Form.Group className="margin-top">
                        <Form.Label>Tournament Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter tournament name"></Form.Control>
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
                                <Form.Label>Level</Form.Label>
                                <Selector type="levels"></Selector>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control className="date-input" type="date"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Selector type="times"></Selector>
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
                        <Col>
                            <Form.Group>
                                <Form.Label>Max Players</Form.Label>
                                <Selector type="maxPlayers"></Selector>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Duration</Form.Label>
                                <Selector type="durations"></Selector>
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
                            <Button className="blue pill" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}