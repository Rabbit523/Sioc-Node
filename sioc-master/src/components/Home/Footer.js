import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SiocLogoHead from '../../../public/images/siocLogoHead.png';

const HomeFooter = () => (
    <Grid>
        <Row className="footer">
            <Col sm={4}>
                <div>
                    <img src={SiocLogoHead} alt="sioc.com.ar"/>
                    <p>info@sioc.com.ar</p>
                </div>
                <div className="social-icons">
                    <i className="fa fa-facebook"/>
                    <i className="fa fa-instagram"/>
                </div>
            </Col>
            <Col sm={4}>
                <div className="">
                    <h5>Con esta herramienta puede generar fácilmente textos simulados para trabajos
                        de maquetación
                        esta herramienta puede generar fácilmente textos.
                    </h5>
                </div>
            </Col>
            <Col sm={4}>
                <div className="">
                    <h5>Desde aquí le animamos a enviarnos nuevos textos simulados.</h5>
                </div>
            </Col>
        </Row>
    </Grid>
);

export default HomeFooter;
