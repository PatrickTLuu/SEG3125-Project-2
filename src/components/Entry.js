import "../index.css"
import "../css/components/Entry.css"
import { Card } from 'react-bootstrap';
import { getTournament, getTrade } from "../utils/GetData";
import { datePassed } from "../utils/DatePassed";

export default function Entry(params) {
    var item;
    switch (params.type) {
        case "tournaments":
            item = getTournament(params.id)
            break;

        case "trades":
            item = getTrade(params.id);
            break;

        default:
            console.log(params.id);
            break;
    }

    return (
        <div>
            <Card onClick={() => params.handleOpen(params.id)} border="secondary" className="entry">
                <Card.Img variant="top" src={item.src}/>
                {datePassed(item.date, item.time) && <Card.ImgOverlay className="complete-entry"></Card.ImgOverlay>}
                {datePassed(item.date, item.time) && <Card.ImgOverlay><p className="complete-overlay text-align-center blue">Tournament Complete</p></Card.ImgOverlay>}
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.date} @ {item.time}<br />
                        {item.location}<br />
                        {item.level}<br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}