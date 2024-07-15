import '../App.css';
import '../css/pages/ViewTournaments.css'
import {Row, Col, Form} from 'react-bootstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Entry from '../components/Entry';
import Tournaments from '../data/tournaments.json'
import { useEffect, useState } from 'react';
import EntryModal from '../components/EntryModal';
import Multiselect from '../components/Multiselect';
import Selector from '../components/Selector';
import { partitionInto4 } from '../utils/Partition';

const getTournaments = (filters) => {
    const filtered = Tournaments.filter(tournament => {
        const tournamentTime = new Date("1/1/1970 " + tournament.time);
        const startTime = filters.timesStart === "--:--" ? new Date("1/1/1970 00:00") : new Date("1/1/1970 " + filters.timesStart);
        const endTime = filters.timesEnd === "--:--" ? new Date("1/1/1970 23:00") : new Date("1/1/1970 " + filters.timesEnd);
        
        if (tournamentTime < startTime || tournamentTime > endTime) {
            return false;
        }
        
        if (filters.genres.length !== 0 && !filters.genres.every(genre => {return tournament.genres.includes(genre, 0)})) {
            return false;
        }

        if (filters.locations.length !== 0 && !filters.locations.includes(tournament.location)) {
            return false;
        }

        if (filters.levels.length !== 0 && !filters.levels.includes(tournament.level)) {
            return false;
        }        

        return true;
    })

    return filtered;
}

export default function ViewTournaments() {
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState({
        "timesStart": "00:00",
        "timesEnd": "23:00",
        "genres": [],
        "locations": [],
        "levels": []
    });
    const [tournaments, setTournaments] = useState(partitionInto4(getTournaments(filters)));

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
    const TournamentList = () => {
        if (tournaments.at(0).length === 0) {
            return <Row className="text-align-center">
                <h1 className="header-text">No tournaments found</h1>
            </Row>
    
        } else {
            return <Row>
                {tournaments.map(partition => (
                    <Col key={tournaments.indexOf(partition)}>
                        {partition.map(entry => (
                            <Entry key={entry.id} id={entry.id} handleOpen={handleOpen} type="tournaments"></Entry>
                        ))}
                    </Col>
                ))}
            </Row>
        }
    }

    useEffect(() => {
        const fetchData = () => {
            const data = getTournaments(filters);
            setTournaments(partitionInto4(data));
        }

        fetchData();
    }, [filters])


    return (
    <div>
        <Header/>
        <Row className="default-margin">
            <div className="fit-content">
                <Form.Label column={true} className="fit-content">Time:</Form.Label>
            </div>
            
            <Col>
                <Selector type="timesStart" handlechange={handleFilterChange}></Selector>
            </Col>

            <div className="fit-content">
                <Form.Label column={true} handlechange="fit-content">to</Form.Label>
            </div>

            <Col>
                <Selector type="timesEnd" handlechange={handleFilterChange}></Selector>
            </Col>
            
            <Col>
                <Multiselect type="genres" handlechange={handleFilterChange}></Multiselect>
            </Col>

            <Col>
                <Multiselect type="locations" handlechange={handleFilterChange}></Multiselect>
            </Col>

            <Col>
                <Multiselect type="levels" handlechange={handleFilterChange}></Multiselect>
            </Col>

        </Row>

        <TournamentList/>

        <EntryModal id={id} show={show} handleClose={handleClose} type="tournaments" btnMsg="Join"></EntryModal>

        <Footer
            label={"Can’t find a tournament? Create your own!"}
            btnMsg={"Create a tournament"}
            colour={"blue"}
            href={"/create_tournament"}
        />
    </div>
    )
}