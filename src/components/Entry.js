import "../index.css"
import "../css/components/Entry.css"
import { Card } from 'react-bootstrap';
import { getTournament, getTrade } from "../utils/GetData";

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
                <Card.Img variant="top" src={item.src} />
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