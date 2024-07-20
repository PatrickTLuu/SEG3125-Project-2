import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/components/Header.css"
import { Link } from 'react-router-dom';
import { Button, FormSelect } from 'react-bootstrap';
import { getText } from '../utils/GetText';

export default function Header() {
    const [showTournaments, setShowTournaments] = useState(false);
    const [showTrades, setShowTrades] = useState(false);
    const [isEnglish, setIsEnglish] = useState(localStorage.getItem("language") == null ? "EN" : localStorage.getItem("language"));


    const showTournamentsDropdown = () => setShowTournaments(true);
    const hideTournamentsDropdown = () => setShowTournaments(false);

    const showTradesDropdown = () => setShowTrades(true);
    const hideTradesDropdown = () => setShowTrades(false);

    const handleLanguageChange = (value) => {
        localStorage.setItem("language", value);
        setIsEnglish(value === "EN");
        location.reload(true);
    }

    return (
        <div className="header" role="banner">
            <Row className='text-align-center'>
                <Col>
                    <Button id="brand-name" as={Link} to="/" aria-label="Games Central Home">Games Central</Button>
                </Col>
                <Col lg={1} md={1} sm={1} className="language-selector-col">
                    <FormSelect className="language-selector" onChange={(e) => handleLanguageChange(e.target.value)} aria-label="Language Selector">
                        <option disabled={!isEnglish} hidden={!isEnglish} aria-hidden={!isEnglish}>EN</option>
                        <option>FR</option>
                        <option disabled={isEnglish} hidden={isEnglish} aria-hidden={isEnglish}>EN</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row>
                <Navbar className="justify-content-center navigation-bar" bg="dark" data-bs-theme="dark" role="navigation" aria-label="Navigation Bar">
                    <Col onMouseEnter={showTournamentsDropdown} onMouseLeave={hideTournamentsDropdown} role="navigation" aria-label="Tournaments Navigation">
                        <NavDropdown title={getText("Home", "dropdownTournaments")} className="text-align-center nav-dropdown" show={showTournaments} aria-haspopup="true" aria-expanded={showTournaments}>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/create_tournament" aria-label="Create Tournament">
                                {getText("Home", "createTournament")}
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/view_tournaments" aria-label="View Tournaments">
                                {getText("Home", "viewTournaments")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle blue"></span>
                    </Col>
                    <Col onMouseEnter={showTradesDropdown} onMouseLeave={hideTradesDropdown} role="navigation" aria-label="Trades Navigation">
                        <NavDropdown title={getText("Home", "dropdownTrades")} className="text-align-center nav-dropdown" show={showTrades} aria-haspopup="true" aria-expanded={showTrades}>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/post_trade" aria-label="Post a Trade">
                                {getText("Home", "postTrade")}
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/view_trades" aria-label="View Trades">
                                {getText("Home", "viewTrades")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle green"></span>
                    </Col>
                </Navbar>
            </Row>
        </div>
    );
}

