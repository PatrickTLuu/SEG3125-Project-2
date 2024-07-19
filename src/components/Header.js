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
    const [isEnglish, setIsEnglish] = useState(localStorage.getItem("language") === "EN");


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
        <div className="header">
            <Row className='text-align-center'>
                <Col>
                    <Button id="brand-name" as={Link} to="/">Games Central</Button>
                </Col>
                <Col lg={1} md={1} sm={1} className="language-selector-col">
                    <FormSelect className="language-selector" onChange={(e) => handleLanguageChange(e.target.value)}>
                        <option disabled={!isEnglish} hidden={!isEnglish}>EN</option>
                        <option>FR</option>
                        <option disabled={isEnglish} hidden={isEnglish}>EN</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row>
                <Navbar className="justify-content-center navigation-bar" bg="dark" data-bs-theme="dark">
                    <Col onMouseEnter={showTournamentsDropdown} onMouseLeave={hideTournamentsDropdown}>
                        <NavDropdown title={getText("Home", "dropdownTournaments")} className="text-align-center" show={showTournaments}>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/create_tournament">{getText("Home", "createTournament")}</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/view_tournaments">{getText("Home", "viewTournaments")}</NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle blue"></span>
                    </Col>
                    <Col onMouseEnter={showTradesDropdown} onMouseLeave={hideTradesDropdown}>
                        <NavDropdown title={getText("Home", "dropdownTrades")} className="text-align-center" show={showTrades}>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/post_trade">{getText("Home", "postTrade")}</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/view_trades">{getText("Home", "viewTrades")}</NavDropdown.Item>
                        </NavDropdown>
                        <span className="rectangle green"></span>
                    </Col>
                </Navbar>
            </Row>
        </div>
    );
}

