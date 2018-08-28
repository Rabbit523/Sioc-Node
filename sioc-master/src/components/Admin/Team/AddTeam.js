import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Label
} from 'react-bootstrap';

class AddTeam extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={12}>
                        <h2>Crear Inmobiliaria</h2>
                    </Col>
                    <Col sm={12}>
                        <FormGroup>
                            <Label>Nombre de Inmobiliaria</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder=""
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Dirección</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder="google"
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>E-mail</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder=""
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label>Whatsapp</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder="Ventas"
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label>Whatsapp</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder="Alquiler"
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label>Teléfono</Label>
                            <FormControl
                                type="text"
                                value=""
                                placeholder=""
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="formControlsSelect">
                            <Label>Martillero</Label>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="formControlsSelect">
                            <Label>Capitán</Label>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={12}>
                        Cargar Logo <br/>
                        ...
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AddTeam;
