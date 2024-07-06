import '../App.css';
import '../css/pages/ViewTournaments.css'
import {Row, Col, Form} from 'react-bootstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Entry from '../components/Entry';
import Trades from '../data/trades.json'
import { useState } from 'react';
import EntryModal from '../components/EntryModal';
import Multiselect from '../components/Multiselect';

const partitionInto4 = () => {
    var lists = [[], [], [], [], []];
    var index = 0;

    Trades.forEach((trade) => {
        lists.at(index).push(trade);
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }
    });

    return lists;
}

export default function ViewTrades() {
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
            <Col lg={2}>
                <Multiselect type="genres"></Multiselect>
            </Col>

            <Col lg={2}>
                <Multiselect type="locations"></Multiselect>
            </Col>
        </Row>

        <Row>
            {partitions.map(partition => (
                <Col>
                    {partition.map(entry => (
                        <Entry id={entry.id} handleOpen={handleOpen} type="trades"></Entry>
                    ))}
                </Col>
            ))}
        </Row>

        <EntryModal id={id} show={show} handleClose={handleClose} type="trades" btnMsg="Send a message"></EntryModal>

        <Footer
            label={"Want to trade your own game? Create a trade!"}
            btnMsg={"Post a trade"}
            colour={"green"}
            href={"/post_trade"}
        />
    </div>
    )
}