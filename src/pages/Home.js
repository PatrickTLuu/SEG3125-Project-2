import Header from "../components/Header";
import { Button, Card } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import "../index.css"
import "../css/pages/Home.css"
import { Link } from "react-router-dom";
import { getText } from "../utils/GetText";

export default function Home() {
    return (
        <div>
            <Header></Header>
            <h2 className="text-align-center title-home">{getText("Home", "title")}</h2>
            <Row>
                <Col>
                    <LargeNavigation src="resources/CreateTournament.jpg" page={getText("Home", "createTournament")} colour="blue" to="create_tournament"></LargeNavigation>
                </Col>
                <Col>
                    <LargeNavigation src="resources/ViewTournaments.jpg" page={getText("Home", "viewTournaments")} colour="blue" to="view_tournaments"></LargeNavigation>
                </Col>
                <Col>
                    <LargeNavigation src="resources/PostTrade.png" page={getText("Home", "postTrade")} colour="green" to="post_trade"></LargeNavigation>
                </Col>
                <Col>
                    <LargeNavigation src="resources/ViewTrades.jpg" page={getText("Home", "viewTrades")} colour="green" to="view_trades"></LargeNavigation>
                </Col>
            </Row>
        </div>
    )
}

function LargeNavigation(params) {
    return (
        <Card className="nav-card">
        <Card.Img variant="top" src={params.src}/>
        <Card.ImgOverlay className="text-align-center img-overlay" as={Link} to={params.to}>
            <Button className={"nav-btn " + params.colour}>{params.page}</Button>
        </Card.ImgOverlay>
      </Card>
    )
}