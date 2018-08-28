import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Button,
    ButtonToolbar
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {Dwelling} from '../../../../model/index';
import {requestSaveDwelling} from '../../../../actions/index';
import ImagesService from '../../../../services/images';

const apiKey = 651684583823529;
const uploadPreset = 'gceayald';

class Description extends Component {
    static propTypes = {
        requestSaveDwelling: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        dwelling: PropTypes.shape({})
    };

    static defaultProps = {
        dwelling: new Dwelling()
    };

    constructor(props) {
        super(props);
        this.state = {dwelling: new Dwelling()};
        if (this.props.dwelling) {
            this.state = this.props;
        }
    }

    async onHandleDeleteImg(event, index) {
        const images = [...this.state.dwelling.images];
        images.splice(index, 1);
        const result = await ImagesService.delete(event.target.id);
        this.setState(
            state => ({
                dwelling: (Object.assign(state.dwelling, {images}))
            })
        );
    }

    onUploadImages() {
        window.cloudinary.openUploadWidget({
            cloud_name: 'sioc',
            sources: ['local', 'camera'],
            upload_preset: uploadPreset,
            tags: ['xmas'],
            api_key: apiKey,
            cropping_coordinates_mode: 'custom',
            client_allowed_formats: ['png', 'jpeg'],
            text: {
                'sources.local.title': 'Imágenes',
                'sources.local.drop_files': 'Arraste las imágenes aquí',
                'sources.local.select_files': 'Seleccionar imágenes',
                'sources.local.drop_or': 'O',
                'sources.camera.title': 'Camara',
                'sources.camera.note': '',
                'sources.camera.capture': 'Capturar',
                'progress.uploading': 'Subiendo...',
                'progress.retry_upload': 'Intente denuevo',
                'progress.failed_note': 'Algunas imagenes fallaron al subirse.'
            }
        }, (error, result) => {
            if (result) {
                const newImages = this.state.dwelling.images.concat(result);
                this.setState(
                    state => ({
                        dwelling: (Object.assign(state.dwelling, {images: newImages}))
                    })
                );
            } else {
                console.log(error);
            }
        });
    }

    handleChange({target: {id, value}}) {
        this.setState(
            state => ({
                dwelling: (Object.assign(state.dwelling, {[id]: value}))
            })
        );
    }

    handleSubmit() {
        const {dwelling} = this.state;
        this.props.requestSaveDwelling(dwelling);
        this.props.history.push('/admin/dwellings/latest');
    }


    render() {
        const {dwelling} = this.state;
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={12} className="multi-steps">
                        <ol className="in-multi-steps text-top">
                            <li>
                                <span>
                                    <FontAwesome
                                        name="home"
                                        style={{color: 'rgba(0,0,0,.3)'}}
                                    />
                                </span>
                            </li>
                            <li className="">
                                <span>
                                    <FontAwesome
                                        name="cog"
                                        spin
                                        style={{color: 'rgba(0,0,0,.3)'}}
                                    />
                                </span>
                            </li>
                            <li className="current">
                                <span>
                                    <FontAwesome name="check-square" style={{color: 'rgba(0,0,0,.3)'}}/>
                                </span>
                            </li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Descripción General</h2>
                        <FormGroup controlId="generalDescription">
                            <FormControl
                                componentClass="textarea"
                                value={dwelling.generalDescription}
                                onChange={e => this.handleChange(e)}
                                placeholder="Escriba una Descripcion general"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Descripción Privada</h2>
                        <FormGroup controlId="privateDescription">
                            <FormControl
                                componentClass="textarea"
                                value={dwelling.privateDescription}
                                onChange={e => this.handleChange(e)}
                                placeholder="Escriba una Descripcion privada"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Carga de Imágenes </h2>
                        <Button bsStyle="primary" onClick={() => this.onUploadImages()} style={{marginBottom: '15px'}}>
                            Subir Imagenes
                        </Button>
                        <ul style={{listStyle: 'none', margin: '10px', display: 'flex'}}>
                            {dwelling.images &&
                            dwelling.images.map((newImage, index) =>
                                (
                                    <li key={newImage.public_id} style={{display: 'block'}}>
                                        <img src={newImage.thumbnail_url} alt="" style={{marginLeft: '30px'}}/>
                                        <Button
                                            id={newImage.delete_token}
                                            bsSize="lg"
                                            className={{
                                                verticalAlign: 'top',
                                                paddingLeft: '1px',
                                                lineHeight: '0px',
                                                width: '16px',
                                                height: '16px'
                                            }}
                                            onClick={e => this.onHandleDeleteImg(e, index)}
                                        >
                                            Borrar
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>

                </Row>
                <Row>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-left">
                            <Button onClick={() => this.props.history.push('/admin/dwellings/characteristics')}>Atrás</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-right">
                            <Button onClick={() => this.handleSubmit()}>Guardar</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        dwelling: state.dwelling.dwelling
    }),
    dispatch => ({
        requestSaveDwelling: dwelling => dispatch(requestSaveDwelling(dwelling))
    })
)(Description);
