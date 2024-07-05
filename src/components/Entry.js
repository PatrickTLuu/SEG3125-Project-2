import "../index.css"
import "../css/components/Entry.css"
import { Card } from 'react-bootstrap';
import Tournaments from "../data/tournaments.json"
import Trades from "../data/trades.json"

const getTournamentFromJson = (id) => {
    return Tournaments.find(entry => entry.id == id);
}

const getTradesFromJson = (id) => {
  return Trades.find(entry => entry.id == id);
}

export default function Entry(params) {
    var item;

    switch (params.type) {
      case "tournaments":
        item = getTournamentFromJson(params.id);
        break;

      case "trades":
          item = getTradesFromJson(params.id);
          break;
    
      default:
        break;
    }

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