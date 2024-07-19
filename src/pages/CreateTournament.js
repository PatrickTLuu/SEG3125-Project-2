import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Multiselect from '../components/Multiselect'
import Header from '../components/Header'
import Selector from '../components/Selector'
import "../index.css"
import "../css/pages/CreateTournament.css"
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { storeData } from "../utils/StoreData";
import { getNextTournamentId } from "../utils/GetData";
import { getText } from "../utils/GetText";

export default function CreateTournament() {
    const { register, setValue, control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const dateObject = new Date(data.date);
        data.date = dateObject.toDateString();
        data.genres = data.genres == null ? [] : data.genres;
        data.id = getNextTournamentId();
        storeData("tournaments", data);
        navigate("/view_tournaments");
    };

    const handleMultiselect = (type, selected) => {
        register("genres");
        setValue("genres", selected);
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className="title-tournaments">{getText("CreateTournament", "title")}</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="margin-top">
                        <Form.Label>{getText("CreateTournament", "formLabelName")}</Form.Label>
                        <Form.Control type="text" placeholder={getText("CreateTournament", "formControlName")} {...register("name", { required: true })}></Form.Control>
                        {errors.name && <Form.Text>{getText("CreateTournament", "formTextName")}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>{getText("CreateTournament", "formLabelVideoGame")}</Form.Label>
                        <Form.Control type="text" placeholder={getText("CreateTournament", "formControlVideoGame")} {...register("videoGame", { required: true })}></Form.Control>
                        {errors.videoGame && <Form.Text>{getText("CreateTournament", "formTextVideoGame")}</Form.Text>}
                    </Form.Group>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelGenres")}</Form.Label>
                                <Multiselect type="genres" handlechange={handleMultiselect}></Multiselect>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelLevel")}</Form.Label>
                                <Controller
                                    name="level"
                                    control={control}
                                    rules={{ required: true }}
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
                                {errors.level && <Form.Text>{getText("CreateTournament", "formTextLevel")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelDate")}</Form.Label>
                                <Form.Control className="date-input" type="date" {...register("date", { required: true })}></Form.Control>
                                {errors.date && <Form.Text>{getText("CreateTournament", "formTextDate")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelTime")}</Form.Label>
                                <Controller
                                    name="time"
                                    control={control}
                                    rules={{ required: true }}
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
                                {errors.time && <Form.Text>{getText("CreateTournament", "formTextTime")}</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelCity")}</Form.Label>
                                <Form.Control type="text" placeholder={getText("CreateTournament", "formControlCity")} {...register("location", { required: true })}></Form.Control>
                                {errors.location && <Form.Text>{getText("CreateTournament", "formTextCity")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelMaxPlayers")}</Form.Label>
                                <Controller
                                    name="maxPlayers"
                                    control={control}
                                    rules={{ required: true }}
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
                                {errors.maxPlayers && <Form.Text>{getText("CreateTournament", "formTextMaxPlayers")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>{getText("CreateTournament", "formLabelDuration")}</Form.Label>
                                <Controller
                                    name="duration"
                                    control={control}
                                    rules={{ required: true }}
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
                                {errors.duration && <Form.Text>{getText("CreateTournament", "formTextDuration")}</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="margin-top">
                                <Form.Label>{getText("CreateTournament", "formLabelTournamentDescription")}</Form.Label>
                                <Form.Control as="textarea" {...register("tournamentDescription", { required: true })}></Form.Control>
                                {errors.tournamentDescription && <Form.Text>{getText("CreateTournament", "formTextTournamentDescription")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="margin-top">
                                <Form.Label>{getText("CreateTournament", "formLabelGameDescription")}</Form.Label>
                                <Form.Control as="textarea" {...register("gameDescription", { required: true })}></Form.Control>
                                {errors.gameDescription && <Form.Text>{getText("CreateTournament", "formTextGameDescription")}</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="margin-top" controlId="formFile">
                        <Form.Label>{getText("CreateTournament", "formLabelImage")}</Form.Label>
                        <Form.Control type="file" {...register("src", { required: true })}></Form.Control>
                        {errors.src && <Form.Text>{getText("CreateTournament", "formTextImage")}</Form.Text>}
                    </Form.Group>

                    <Row className="margin-top margin-bottom text-align-center">
                        <Col>
                            <Button className="blue pill" type="submit">{getText("CreateTournament", "submitButton")}</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}