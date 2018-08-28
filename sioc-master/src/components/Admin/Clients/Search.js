import React, {Component} from 'react';
import { Container, Row, Col, Button, FormGroup, Input, Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Search extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Container fluid className="animated fadeIn">
                <Row>
                    <Col sm="12">
                        <h2 className="pull-left">Clientes</h2>
                        <Button className="pull-right" color="light"><FontAwesome name="plus"/> Crear nuevo</Button>
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
                                    <th>Categoría</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Alguien Más</th>
                                    <td>alguien@mas.com</td>
                                    <td>221221221221</td>
                                    <td>Es propietario</td>
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

export default Search;
