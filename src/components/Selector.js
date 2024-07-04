
import { Form } from 'react-bootstrap'
import '../css/Selector.css'

const times = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
]

const maxPlayers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "N/A"];

const durations = ["1h", "1.5h", "2h", "2.5h", "3h", "3.5h", "4h", "4.5h", "5h", "5.5h", "6h"]

const levels = ["Beginner", "Intermediate", "Expert"];

export default function Selector(params) {
    var options;

    switch (params.type) {
        case "times":
            options = times;
            break;
        
        case "maxPlayers":
            options = maxPlayers;
            break;

        case "durations":
            options = durations
            break;

        case "levels":
            options = levels;
            break;
            
        default:
            break;
    }

    return (
        <Form.Select column="true" className="selector">
            {options.map(option => (
                <option>{option}</option>
            ))}
        </Form.Select>)
}