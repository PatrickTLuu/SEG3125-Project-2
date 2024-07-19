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
                <h3 className="title-tournaments" aria-label="Create Tournament Title">{getText("CreateTournament", "title")}</h3>
                <Form onSubmit={handleSubmit(onSubmit)} aria-label="Tournament Form">
                    <Form.Group className="margin-top" aria-labelledby="formLabelName" role="group">
                        <Form.Label id="formLabelName">{getText("CreateTournament", "formLabelName")}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={getText("CreateTournament", "formControlName")}
                            aria-required="true"
                            aria-describedby="formTextName"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("name", { required: true })}
                        ></Form.Control>
                        {errors.name && <Form.Text id="formTextName">{getText("CreateTournament", "formTextName")}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top" aria-labelledby="formLabelVideoGame" role="group">
                        <Form.Label id="formLabelVideoGame">{getText("CreateTournament", "formLabelVideoGame")}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={getText("CreateTournament", "formControlVideoGame")}
                            aria-required="true"
                            aria-describedby="formTextVideoGame"
                            aria-invalid={errors.videoGame ? "true" : "false"}
                            {...register("videoGame", { required: true })}
                        ></Form.Control>
                        {errors.videoGame && <Form.Text id="formTextVideoGame">{getText("CreateTournament", "formTextVideoGame")}</Form.Text>}
                    </Form.Group>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group aria-labelledby="genres-label" role="group">
                                <Form.Label id="genres-label">{getText("CreateTournament", "formLabelGenres")}</Form.Label>
                                <Multiselect type="genres" handlechange={handleMultiselect}></Multiselect>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group aria-labelledby="level-label" role="group">
                                <Form.Label id="level-label">{getText("CreateTournament", "formLabelLevel")}</Form.Label>
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
                                            aria-required="true"
                                            aria-describedby="level-description"
                                            aria-invalid={invalid}
                                        />
                                    )}
                                />
                                {errors.level && <Form.Text id="level-description">{getText("CreateTournament", "formTextLevel")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group aria-labelledby="date-label" role="group">
                                <Form.Label id="date-label">{getText("CreateTournament", "formLabelDate")}</Form.Label>
                                <Form.Control
                                    className="date-input"
                                    type="date"
                                    aria-required="true"
                                    aria-describedby="date-description"
                                    aria-invalid={errors.date ? "true" : "false"}
                                    {...register("date", { required: true })}
                                ></Form.Control>
                                {errors.date && <Form.Text id="date-description">{getText("CreateTournament", "formTextDate")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group aria-labelledby="timeLabel" role="group">
                                <Form.Label id="timeLabel">{getText("CreateTournament", "formLabelTime")}</Form.Label>
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
                                            aria-required="true"
                                            aria-labelledby="timeLabel"
                                            aria-invalid={invalid}
                                        />
                                    )}
                                />
                                {errors.time && <Form.Text id="timeError">{getText("CreateTournament", "formTextTime")}</Form.Text>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="margin-top">
                        <Col>
                            <Form.Group aria-labelledby="cityLabel" role="group">
                                <Form.Label id="cityLabel">{getText("CreateTournament", "formLabelCity")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={getText("CreateTournament", "formControlCity")}
                                    {...register("location", { required: true })}
                                    aria-labelledby="cityLabel"
                                    aria-required="true"
                                    aria-invalid={errors.location ? "true" : "false"}
                                ></Form.Control>
                                {errors.location && <Form.Text id="cityError">{getText("CreateTournament", "formTextCity")}</Form.Text>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group aria-labelledby="maxPlayersLabel" role="group">
                                <Form.Label id="maxPlayersLabel">{getText("CreateTournament", "formLabelMaxPlayers")}</Form.Label>
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
                                            aria-labelledby="maxPlayersLabel"
                                            aria-required="true"
                                            aria-invalid={invalid}
                                        />
                                    )}
                                />
                                {errors.maxPlayers && <Form.Text id="maxPlayersError">{getText("CreateTournament", "formTextMaxPlayers")}</Form.Text>}
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group aria-labelledby="durationLabel" role="group">
                                <Form.Label id="durationLabel">{getText("CreateTournament", "formLabelDuration")}</Form.Label>
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
                                            aria-labelledby="durationLabel"
                                            aria-required="true"
                                            aria-invalid={invalid}
                                        />
                                    )}
                                />
                                {errors.duration && <Form.Text id="durationError">{getText("CreateTournament", "formTextDuration")}</Form.Text>}
                            </Form.Group>

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="margin-top" aria-labelledby="tournamentDescriptionLabel" role="group">
                                <Form.Label id="tournamentDescriptionLabel">
                                    {getText("CreateTournament", "formLabelTournamentDescription")}
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    aria-labelledby="tournamentDescriptionLabel"
                                    aria-required="true"
                                    aria-invalid={errors.tournamentDescription ? "true" : "false"}
                                    {...register("tournamentDescription", { required: true })}
                                ></Form.Control>
                                {errors.tournamentDescription && (
                                    <Form.Text id="tournamentDescriptionError">
                                        {getText("CreateTournament", "formTextTournamentDescription")}
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="margin-top" aria-labelledby="gameDescriptionLabel" role="group">
                                <Form.Label id="gameDescriptionLabel">
                                    {getText("CreateTournament", "formLabelGameDescription")}
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    aria-labelledby="gameDescriptionLabel"
                                    aria-required="true"
                                    aria-invalid={errors.gameDescription ? "true" : "false"}
                                    {...register("gameDescription", { required: true })}
                                ></Form.Control>
                                {errors.gameDescription && (
                                    <Form.Text id="gameDescriptionError">
                                        {getText("CreateTournament", "formTextGameDescription")}
                                    </Form.Text>
                                )}
                            </Form.Group>

                        </Col>
                    </Row>

                    <Form.Group className="margin-top" controlId="formFile" aria-labelledby="imageLabel" role="group">
                        <Form.Label id="imageLabel">
                            {getText("CreateTournament", "formLabelImage")}
                        </Form.Label>
                        <Form.Control
                            type="file"
                            aria-labelledby="imageLabel"
                            aria-required="true"
                            aria-invalid={errors.src ? "true" : "false"}
                            {...register("src", { required: true })}
                        ></Form.Control>
                        {errors.src && (
                            <Form.Text id="imageError">
                                {getText("CreateTournament", "formTextImage")}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Row className="margin-top margin-bottom text-align-center">
                        <Col>
                            <Button className="blue pill" type="submit" aria-label={getText("CreateTournament", "submitButton")}>
                                {getText("CreateTournament", "submitButton")}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}