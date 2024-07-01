import "../index.css"
import "../css/Entry.css"
import { Card } from 'react-bootstrap';
import Tournaments from "../data/tournaments.json"

const getFromJson = (id) => {
    return Tournaments.find(entry => entry.id == id);
}

export default function Entry(params) {
    const item = getFromJson(params.id);

    return (
    <div>
      <Card onClick={() => params.handleOpen(params.id)} border="secondary" className="entry">
        <Card.Img variant="top" src={item.src}/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.date} @ {item.time}<br/>
                {item.location}<br/>
                {item.level}<br/>
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
}