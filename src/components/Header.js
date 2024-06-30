import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Header.css"

export default function Header() {
    const [showTournaments, setShowTournaments] = useState(false);
    const [showTrades, setShowTrades] = useState(false);


    const showTournamentsDropdown = (e) => {
        setShowTournaments(!showTournaments);
    }
    const hideTournamentsDropdown = (e) => {
        setShowTournaments(false);
    }

    const showTradesDropdown = (e) => {
        setShowTrades(!showTrades);
    }
    const hideTradesDropdown = (e) => {
        setShowTrades(false);
    }

    return (
        <div>
            <Row className='text-align-center'>
                <h2 id="brand-name">Games Central</h2>
            </Row>
            <Row>
                <Navbar className="justify-content-center" bg="dark" data-bs-theme="dark">
                    <Col>
                        <NavDropdown title="Tournaments" className="text-align-center" show={showTournaments} onMouseEnter={showTournamentsDropdown} onMouseLeave={hideTournamentsDropdown}>
                            <NavDropdown.Item className="dropdown-item">Create a tournament</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">Join a tournament</NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle blue"></span>
                    </Col>
                    <Col>
                    <NavDropdown title="Trades" className="text-align-center" show={showTrades} onMouseEnter={showTradesDropdown} onMouseLeave={hideTradesDropdown}>
                        <NavDropdown.Item className="dropdown-item">View open trade requests</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item">Post a trade request</NavDropdown.Item>
                    </NavDropdown>
                    <span className="rectangle green"></span>
                    </Col>
                </Navbar>
            </Row>
        </div>
    );
}

