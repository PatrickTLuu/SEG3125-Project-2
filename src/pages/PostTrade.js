import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import "../index.css"
import "../css/pages/PostTrade.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getNextTradeId } from "../utils/GetData";
import { storeData } from "../utils/StoreData";

export default function CreateTournament() {
    const { register, setValue, control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const dateObject = new Date(data.date);
        data.date = dateObject.toDateString();
        data.time = "23:59";
        data.name = data.videoGame;
        data.genres = data.genres == null ? [] : data.genres;
        data.id = getNextTradeId();
        storeData("trades", data);
        navigate("/view_trades");
    };

    const handleMultiselect = (type, selected) => {
        register("genres");
        setValue("genres", selected);
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className="title">Post a trade</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="margin-top">
                        <Form.Label>Contact email</Form.Label>
                        <Form.Control type="email" placeholder="example@example.com" {...register("email", { required: true })}></Form.Control>
                        {errors.email && <Form.Text>Please enter your email</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>Video Game</Form.Label>
                        <Form.Control type="text" placeholder="Enter a video game" {...register("videoGame", { required: true })}></Form.Control>
                        {errors.videoGame && <Form.Text>Please enter your video game</Form.Text>}
                    </Form.Group>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>Genres</Form.Label>
                                <Multiselect type="genres" handlechange={handleMultiselect}></Multiselect>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control className="date-input" type="date" {...register("date", { required: true })}></Form.Control>
                                {errors.date && <Form.Text>Please enter an expiry name</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter a city" {...register("location", { required: true })}></Form.Control>
                                {errors.location && <Form.Text>Please enter your city</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="margin-top">
                                <Form.Label>Trade Description</Form.Label>
                                <Form.Control as="textarea" {...register("tournamentDescription", { required: true })}></Form.Control>
                                {errors.tournamentDescription && <Form.Text>Please enter a description of the game&#39;s quality</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="margin-top">
                                <Form.Label>Game Description</Form.Label>
                                <Form.Control as="textarea" {...register("gameDescription", { required: true })}></Form.Control>
                                {errors.gameDescription && <Form.Text>Please enter a game description</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="margin-top" controlId="formFile">
                        <Form.Label>Upload an image</Form.Label>
                        <Form.Control type="file" {...register("src", { required: true })}></Form.Control>
                        {errors.src && <Form.Text>Please upload an image</Form.Text>}

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