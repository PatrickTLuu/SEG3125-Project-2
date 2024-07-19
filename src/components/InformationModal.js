import "../index.css"
import "../css/components/InformationModal.css"
import { Card, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function InformationModal(params) {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setSubmitted(true);
        reset();
    }

    return (
        <Modal show={params.show} onHide={() => {
            params.handleClose();
            setSubmitted(false);
            reset();
        }}>
            <Modal.Header closeButton>
                <Modal.Title className="align">Your Information</Modal.Title>
            </Modal.Header>
            <Card className="information-modal">
                <Card.Body>
                    {!submitted && <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="margin-top">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" {...register("name", { required: true })}></Form.Control>
                            {errors.name && <Form.Text>Please enter your name</Form.Text>}
                        </Form.Group>
                        <Form.Group className="margin-top">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control type="email" placeholder="example@example.com" {...register("email", { required: true })}></Form.Control>
                            {errors.email && <Form.Text>Please enter your email</Form.Text>}
                        </Form.Group>
                        {params.btnMsg === "Send" &&
                            <Form.Group className="margin-top">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control type="text" as="textarea" {...register("msg", { required: true })}></Form.Control>
                                {errors.msg && <Form.Text>Please enter a message</Form.Text>}
                            </Form.Group>}
                        <Row className="margin-top justify-content-center">
                            <Button className="join-button" type="submit">{params.btnMsg}</Button>
                        </Row>
                    </Form>}

                    {params.btnMsg === "Join" && submitted && <Form.Text className="confirmation-text">Thank you for joining {params.tournament}. You will soon be contacted with more details.</Form.Text>}
                    {params.btnMsg === "Send" && submitted && <Form.Text className="confirmation-text">Message sent. You will soon be contacted with more details.</Form.Text>}
                </Card.Body>
            </Card>
        </Modal>
    );
}