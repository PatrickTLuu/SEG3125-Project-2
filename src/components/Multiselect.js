import { useState } from "react";
import Tournaments from "../data/tournaments.json"
import { Dropdown, Form } from "react-bootstrap";
import "../css/components/Multiselect.css"

const getAllGenres = () => {
    var genres = [];
    Tournaments.forEach(tournament => { genres = genres.concat(tournament.genres) })
    return [...new Set(genres)];
}

const getAllLocations = () => {
    var locations = [];
    Tournaments.forEach(tournament => { locations.push(tournament.location) })
    return [...new Set(locations)];
}

const getAllLevels = () => {
    return ["Beginner", "Intermediate", "Expert"];
}

export default function Multiselect(params) {
    const [selected, setSelected] = useState([]);
    const handleOptionClick = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
            params.handlechange(params.type, selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
            params.handlechange(params.type, [...selected, option]);

        }
    };
    
    var options;
    switch (params.type) {
        case "genres":
            options = getAllGenres();
            break;

        case "locations":
            options = getAllLocations();
            break;

        case "levels":
            options = getAllLevels();
            break;
    
        default:
            break;
    }

    return (
        <div>
            <Dropdown className="option-dropdown">
                <Dropdown.Toggle className="option-toggle" variant="light" id="dropdown-checkbox">
                    {selected.length} {params.type} selected
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Form>
                        {options.map(option => (
                            <Form.Check
                            type="checkbox"
                            label={option}
                            className="option-check"
                            id={option}
                            key={options.indexOf(option)}
                            checked={selected.includes(option)}
                            onChange={() => handleOptionClick(option)}
                            />
                        ))}
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}