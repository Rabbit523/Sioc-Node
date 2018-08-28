import React, {Component} from 'react';
import { Container, Row, Col, Button, Collapse, Input, InputGroup, InputGroupAddon, FormGroup, Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Auctioneers extends Component {
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
                        <h2>Martilleros <Button color="light" onClick={this.toggle} style={{ marginBottom: '1rem' }}><FontAwesome name="plus"/> Crear nuevo</Button></h2>
                        <Collapse isOpen={this.state.collapse} style={{ marginBottom: '1rem' }}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Confirmar</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Collapse>
                        <FormGroup>
                            <Input type="" name="" id="" placeholder="Buscar" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Mail</th>
                                    <th>Cel</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Alguien Martillero</th>
                                    <td>alguien@mas.com</td>
                                    <td>221221221221</td>
                                    <td>
                                        <Button color="light"><FontAwesome name="eye" /></Button>{' '}
                                        <Button color="light"><FontAwesome name="trash" /></Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Auctioneers;
