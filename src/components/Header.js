import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Header.css"
import { Link } from 'react-router-dom';

export default function Header() {
    const [showTournaments, setShowTournaments] = useState(false);
    const [showTrades, setShowTrades] = useState(false);


    const showTournamentsDropdown = () => setShowTournaments(true);
    const hideTournamentsDropdown = () => setShowTournaments(false);

    const showTradesDropdown = () => setShowTrades(true);
    const hideTradesDropdown = () => setShowTrades(false);

    return (
        <div className="header">
            <Row className='text-align-center'>
                <h2 id="brand-name">Games Central</h2>
            </Row>
            <Row>
                <Navbar className="justify-content-center navigation-bar" bg="dark" data-bs-theme="dark">
                    <Col onMouseEnter={showTournamentsDropdown} onMouseLeave={hideTournamentsDropdown}>
                        <NavDropdown title="Tournaments" className="text-align-center" show={showTournaments}>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/create_tournament">Create a tournament</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/view_tournaments">View tournaments</NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle blue"></span>
                    </Col>
                    <Col onMouseEnter={showTradesDropdown} onMouseLeave={hideTradesDropdown}>
                    <NavDropdown title="Trades" className="text-align-center" show={showTrades}>
                        <NavDropdown.Item className="dropdown-item" as={Link} to="/post_trade">Post a trade request</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" as={Link} to="/view_trades">View trades</NavDropdown.Item>
                    </NavDropdown>
                    <span className="rectangle green"></span>
                    </Col>
                </Navbar>
            </Row>
        </div>
    );
}

