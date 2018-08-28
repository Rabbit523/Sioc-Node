/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WhatsappImg from '../../../public/images/whatsapp.png';
import RespImg from '../../../public/images/responsive.png';
import GoogleImg from '../../../public/images/google.png';

// const Intro = () => (
class Intro extends Component {
    render() {
        return (
            <Container>
                <Row className="section-txt text-center">
                    <Col sm="12">
                        <h1>
                            Ya conocés el <b>SIOC</b>?
                        </h1>
                    </Col>
                    <Col sm={{size: 8, offset: 2}}>
                        <h4>
                            Los equipos inmobiliarios más importantes de la ciudad
                            unidos por una plataforma online de compra, venta y alquiler
                            de propiedades: 28 equipos trabajando en equipo !
                        </h4>
                    </Col>
                    <Col sm={{size: 8, offset: 2}}>
                        <hr/>
                        <div className="slider">
                            <ul>
                                <li>
                                    <Row>
                                        <Col sm="10">
                                            <h3>
                                                Google Maps llegó al SIOC. Usá la última tecnología en términos
                                                de búsqueda para encontrar la propiedad que realmente estás buscando.
                                            </h3>
                                        </Col>
                                        <Col sm="2">
                                            <img src={GoogleImg} alt=""/>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col sm="10">
                                            <h3>En sioc.com.ar te podés contactar con la propiedad que mas te guste a
                                                través de
                                                whatsapp, eso te permite saber si tu mensaje se envió, se recibió o se
                                                leyó.
                                            </h3>
                                        </Col>
                                        <Col sm="2">
                                            <img src={WhatsappImg} alt=""/>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col sm="10">
                                            <h3>Nuestra web te permite acceder en real-time a las características de la
                                                propiedad que estás mirando en la calle, desde cualquier dispositivo
                                            </h3>
                                        </Col>
                                        <Col sm="2">
                                            <img src={RespImg} alt=""/>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Intro;
