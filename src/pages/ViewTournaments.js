import '../App.css';
import '../css/pages/ViewTournaments.css'
import {Row, Col, Form} from 'react-bootstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Entry from '../components/Entry';
import Tournaments from '../data/tournaments.json'
import { useState } from 'react';
import EntryModal from '../components/EntryModal';

const times = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
]

const partitionInto4 = () => {
    var lists = [[], [], [], [], []];
    var index = 0;

    Tournaments.forEach((tournament) => {
        lists.at(index).push(tournament);
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }
    });

    return lists;
}

export default function ViewTournaments() {
    const partitions = partitionInto4();
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);

    const handleOpen = (id) => {
        setId(id);
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return (
    <div>
        <Header/>
        <Row className="default-margin">
            <Form.Label className="static-text">Time:</Form.Label>
            <Form.Select column="true" className="selector">
                {times.map(time => (
                    <option>{time}</option>
                ))}
            </Form.Select>

            <Form.Label className="static-text">to</Form.Label>

            <Form.Select className="selector" column="true">
                {times.map(time => (
                    <option>{time}</option>
                ))}
            </Form.Select>
            
            <Col>

            </Col>
        </Row>

        <Row>
            {partitions.map(partition => (
                <Col>
                    {partition.map(entry => (
                        <Entry id={entry.id} handleOpen={handleOpen}></Entry>
                    ))}
                </Col>
            ))}
        </Row>

        <EntryModal id={id} show={show} handleClose={handleClose}></EntryModal>

        <Footer
            label={"Can’t find a tournament? Create your own!"}
            btnMsg={"Create a tournament"}
            colour={"blue"}
            href={"."}
        />
    </div>
    )
}