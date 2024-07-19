import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import "../index.css"
import "../css/components/Footer.css"
import { Link } from 'react-router-dom';

export default function Footer(properties) {
    return (
        <div className="footer dark-theme">
            <Row className="text-align-center">
                <h3>{properties.label}</h3>
            </Row>
            <Row className='text-align-center'>
                <Col>
                    <Button size="lg" className={properties.colour + " footer-pill"} as={Link} to={properties.href}>{properties.btnMsg}</Button>
                </Col>
            </Row>
        </div>
    )
}

