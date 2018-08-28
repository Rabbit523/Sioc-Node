import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Card, CardBody, Collapse, Button } from 'reactstrap';

class ListTeam extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <Container fluid className="animated fadeIn">
                <Row>
                    <Col sm="12">
                        <h3>Inmobiliarias </h3>
                        <ListGroup>
                            <ListGroupItem active tag="button" action onClick={this.toggle}>
                                <b>Nombre_de_la_Inmboliaria</b>
                                <Collapse isOpen={this.state.collapse} style={{ padding: '25px'}}>
                                    <Row>
                                        <Col sm="12">
                                            Martillero
                                            <h3>Nombre_de_Los</h3>
                                        </Col>
                                        <Col sm="4">
                                            Dirección
                                            <h4>Calle 21, Ciudad, Google</h4>
                                        </Col>
                                        <Col sm="4">
                                            Tel
                                            <h4>321321321</h4>
                                        </Col>
                                        <Col sm="4">
                                            Email
                                            <h4>alguien@mas.com</h4>
                                        </Col>
                                        <Col sm="12">
                                            Capitán
                                            <h4>Nombre (321321321)</h4>
                                        </Col>
                                        <Col sm="12">
                                            Vendedores
                                            <h4>Nombre 1, Nombre2, NombreN</h4>
                                        </Col>
                                    </Row>
                                </Collapse>
                            </ListGroupItem>
                            <ListGroupItem tag="button" action>
                                <b>Nombre_de_la_Inmboliaria</b>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListTeam;
