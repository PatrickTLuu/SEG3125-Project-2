import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import Selector from '../components/Selector'
import "../index.css"
import "../css/pages/CreateTournament.css"
import { Controller, useForm } from "react-hook-form";

export default function CreateTournament() {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className="title">Create a tournament</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="margin-top">
                        <Form.Label>Tournament Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter tournament name" {...register("name", { required: true })}></Form.Control>
                        {errors.name && <Form.Text>Please enter a tournament name</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>Video Game</Form.Label>
                        <Form.Control type="text" placeholder="Enter video game" {...register("videoGame", { required: true })}></Form.Control>
                        {errors.videoGame && <Form.Text>Please enter a video game</Form.Text>}
                    </Form.Group>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>Genres</Form.Label>
                                <Multiselect type="genres"></Multiselect>
                                {errors.genres && <Form.Text>Please select at least one genre</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Level</Form.Label>
                                <Controller
                                    name="levels"
                                    control={control}
                                    rules={{required: true}}
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                        fieldState: { invalid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <Selector
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            checked={value}
                                            inputRef={ref}
                                            type="levels"
                                            use="form"
                                        />
                                    )}
                                />
                                {errors.levels && <Form.Text>Please select a skill level</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control className="date-input" type="date" {...register("date", { required: true })}></Form.Control>
                                {errors.levels && <Form.Text>Please select a date</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Controller
                                    name="duration"
                                    control={control}
                                    rules={{required: true}}
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                        fieldState: { invalid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <Selector
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            checked={value}
                                            inputRef={ref}
                                            type="timesStart"
                                            use="form"
                                        />
                                    )}
                                />
                                {errors.duration && <Form.Text>Please select an approximate starting time</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" {...register("city", { required: true })}></Form.Control>
                                {errors.city && <Form.Text>Please enter a city</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Max Players</Form.Label>
                                <Controller
                                    name="maxPlayers"
                                    control={control}
                                    rules={{required: true}}
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                        fieldState: { invalid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <Selector
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            checked={value}
                                            inputRef={ref}
                                            type="maxPlayers"
                                            use="form"
                                        />
                                    )}
                                />
                                {errors.maxPlayers && <Form.Text>Please select the max number of players</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Duration</Form.Label>
                                <Controller
                                    name="duration"
                                    control={control}
                                    rules={{required: true}}
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                        fieldState: { invalid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <Selector
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            checked={value}
                                            inputRef={ref}
                                            type="durations"
                                            use="form"
                                        />
                                    )}
                                />
                                {errors.duration && <Form.Text>Please select a duration</Form.Text>}
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

                    <Row className="margin-top margin-bottom text-align-center">
                        <Col>
                            <Button className="blue pill" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}