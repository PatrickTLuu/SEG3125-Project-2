import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import "../index.css"
import "../css/pages/PostTrade.css"
import { useForm } from "react-hook-form";

export default function CreateTournament() {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

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
                                <Multiselect type="genres"></Multiselect>
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
                                <Form.Control type="text" placeholder="Enter a city" {...register("city", { required: true })}></Form.Control>
                                {errors.city && <Form.Text>Please enter your city</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="margin-top">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" {...register("description", { required: true })}></Form.Control>
                        {errors.description && <Form.Text>Please enter a description</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top" controlId="formFile">
                        <Form.Label>Upload an image</Form.Label>
                        <Form.Control type="file" {...register("file", { required: true })}></Form.Control>
                        {errors.file && <Form.Text>Please upload an image</Form.Text>}

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