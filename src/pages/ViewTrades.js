import '../App.css';
import '../css/pages/ViewTournaments.css'
import {Row, Col} from 'react-bootstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Entry from '../components/Entry';
import Trades from '../data/trades.json'
import { useEffect, useState } from 'react';
import EntryModal from '../components/EntryModal';
import Multiselect from '../components/Multiselect';

export const partitionInto4 = (list) => {
    var lists = [[], [], [], [], []];
    var index = 0;

    list.forEach((item) => {
        lists.at(index).push(item);
        if (index === 4) {
            index = 0;
        } else {
            index++;
        }
    });

    return lists;
}

const getTrades = (filters) => {
    const filtered = Trades.filter(trade => {
        
        if (filters.genres.length !== 0 && !filters.genres.every(genre => {return trade.genres.includes(genre, 0)})) {
            return false;
        }

        if (filters.locations.length !== 0 && !filters.locations.includes(trade.location)) {
            return false;
        }    

        return true;
    })

    return filtered;
}

export default function ViewTrades() {
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState({
        "genres": [],
        "locations": []
    });
    const [trades, setTrades] = useState(partitionInto4(getTrades(filters)));

    const handleOpen = (id) => {
        setId(id);
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleFilterChange = (type, selected) => {
        setFilters({
            ...filters,
            [type]: selected
        });
    }
    const TradeList = () => {
        if (trades.at(0).length === 0) {
            return <Row className="text-align-center">
                <h1 className="header-text">No trades found</h1>
            </Row>
    
        } else {
            return <Row>
                {trades.map(partition => (
                    <Col key={trades.indexOf(partition)}>
                        {partition.map(entry => (
                            <Entry key={entry.id} id={entry.id} handleOpen={handleOpen} type="trades"></Entry>
                        ))}
                    </Col>
                ))}
            </Row>
        }
    }

    useEffect(() => {
        const fetchData = () => {
            const data = getTrades(filters);
            setTrades(partitionInto4(data));
        }

        fetchData();
    }, [filters])

    return (
    <div>
        <Header/>
        <Row className="default-margin">
            <Col lg={2}>
                <Multiselect type="genres" handlechange={handleFilterChange}></Multiselect>
            </Col>

            <Col lg={2}>
                <Multiselect type="locations" handlechange={handleFilterChange}></Multiselect>
            </Col>
        </Row>

        <TradeList/>

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