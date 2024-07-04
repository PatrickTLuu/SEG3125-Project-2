import '../App.css';
import '../css/pages/ViewTournaments.css'
import {Row, Col, Form} from 'react-bootstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Entry from '../components/Entry';
import Tournaments from '../data/tournaments.json'
import { useState } from 'react';
import EntryModal from '../components/EntryModal';
import Multiselect from '../components/Multiselect';
import Selector from '../components/Selector';

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
            <div className="fit-content">
                <Form.Label column={true} className="fit-content">Time:</Form.Label>
            </div>
            
            <Col>
                <Selector type="times"></Selector>
            </Col>

            <div className="fit-content">
                <Form.Label column={true} className="fit-content">to</Form.Label>
            </div>

            <Col>
                <Selector type="times"></Selector>
            </Col>
            
            <Col>
                <Multiselect type="genres"></Multiselect>
            </Col>

            <Col>
                <Multiselect type="locations"></Multiselect>
            </Col>

            <Col>
                <Multiselect type="levels"></Multiselect>
            </Col>

        </Row>

        <Row>
            {partitions.map(partition => (
                <Col>
                    {partition.map(entry => (
                        <Entry id={entry.id} handleOpen={handleOpen} type="tournaments"></Entry>
                    ))}
                </Col>
            ))}
        </Row>

        <EntryModal id={id} show={show} handleClose={handleClose} type="tournaments" btnMsg="Join"></EntryModal>

        <Footer
            label={"Can’t find a tournament? Create your own!"}
            btnMsg={"Create a tournament"}
            colour={"blue"}
            href={"."}
        />
    </div>
    )
}