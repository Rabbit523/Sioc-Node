import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Label,
    Radio
} from 'react-bootstrap';

class New extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Nombre</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Apellido</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12}>
                                <FormGroup controlId="formControlsSelect">
                                    <Label>Fecha de Nacimiento</Label>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>DNI</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>CUIT</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12}>
                                <FormGroup>
                                    <Radio name="radioGroup" inline>
                                        Es Propietario
                                    </Radio>{' '}
                                    <Radio name="radioGroup" inline>
                                        Es Inquilino
                                    </Radio>{' '}
                                    <Radio name="radioGroup" inline>
                                        Es Garante
                                    </Radio>
                                    <Radio name="radioGroup" inline>
                                        Es Interesado
                                    </Radio>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Teléfono Casa</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Teléfono Trabajo</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Celular</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12}>
                                <FormGroup>
                                    <Label>Horario de contacto</Label>
                                    <FormControl
                                        type="text"
                                        value=""
                                        placeholder=""
                                        maxLength={50}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12}>
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
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <FormGroup controlId="formControlsTextarea">
                            <Label>Observacioness</Label>
                            <FormControl componentClass="textarea" placeholder="textarea"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default New;
