import "../index.css"
import "../css/components/InformationModal.css"
import { Card, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function InformationModal(params) {
    const [submitted, setSubmitted] = useState(false);
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setSubmitted(true);
        reset();
    }

    const Information = () => {
        return (
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="margin-top">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" {...register("name", { required: true })}></Form.Control>
                        {errors.name && <Form.Text>Please enter your name</Form.Text>}
                    </Form.Group>
                    <Form.Group className="margin-top">
                        <Form.Label>Your email</Form.Label>
                        <Form.Control type="text" placeholder="example@example.com" {...register("email", { required: true })}></Form.Control>
                        {errors.email && <Form.Text>Please enter your email</Form.Text>}
                    </Form.Group>
                    <SendMessage isTrade={params.btnMsg === "Send"}></SendMessage>
                    <Row className="margin-top justify-content-center">
                        <Button className="join-button" type="submit">{params.btnMsg}</Button>
                    </Row>
                </Form>
            </div>)
    }

    const SendMessage = () => {
        if (params.isTrade) {
            return (
                <Form.Group className="margin-top" {...register("msg", { required: true })}>
                    <Form.Label>Your message</Form.Label>
                    <Form.Control type="text" as="textarea"></Form.Control>
                    {errors.msg && <Form.Text>Please enter a message</Form.Text>}
                </Form.Group>
            );
        } else {
            return null;
        }
    }
    
    const ConfirmationTournament = () => {
        return (
            <Form.Text className="confirmation-text">Thank you for joining {params.tournament}. You will soon be contacted with more details.</Form.Text>
        )
    }

    const [body, setBody] = useState(Information());
    useEffect(() => {
        setBody(submitted ? ConfirmationTournament() : Information());
    }, [submitted, errors]);
    
    return (
        <Modal show={params.show} onHide={() => {
            params.handleClose();
            setSubmitted(false);
        }}>
            <Modal.Header closeButton>
                <Modal.Title className="align">Your Information</Modal.Title>
            </Modal.Header>
            <Card className="entry-modal">
                <Card.Body>
                    {body}
                </Card.Body>
            </Card>
        </Modal>
    );
}