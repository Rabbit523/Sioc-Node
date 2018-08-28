import React, {Component} from 'react';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import ImgPropiedad from '../../../public/images/casa.jpg';

import {requestDwelling} from '../../actions/index';

class Propiedades extends Component {
    static propTypes = {
        requestFindDwelling: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        }),
        dwelling: PropTypes.shape({}),
        id: PropTypes.string
    };

    static defaultProps = {
        dwelling: undefined,
        id: '',
        match: {}
    };

    componentDidMount() {
        if (this.props.match.params === undefined) {
            const {id} = this.props;
            if (id) {
                this.props.requestFindDwelling(id);
            }
        } else {
            /* const params = new URLSearchParams(window.location.search);
            const id = params.get('id'); */
            const {id} = this.props.match.params;
            if (id) {
                this.props.requestFindDwelling(id);
            }
        }
    }

    renderContent() {
        const {dwelling} = this.props;
        return (
            <div className="single-page">
                <div className="head-img" style={{backgroundImage: `url(${ImgPropiedad})`}}>
                    <FontAwesome className="head-img-btn" name="image"/>
                </div>
                <Col sm={8}>
                    <Col sm={12} className="head">
                        <div className="head-main">
                            <div className="head-pre">
                                {dwelling.publicationType}
                            </div>
                            <div className="head-title">
                                {dwelling.subtype} en {dwelling.address.city}
                            </div>
                            <div className="head-sub">
                                {dwelling.address.streetName}
                            </div>
                            <div className="head-info">
                                <span className="head-info-item">
                                    <FontAwesome name="bed"/> {dwelling.spaces.bedrooms} Habitaciones
                                </span>
                                {dwelling.spaces.bathRoom !== 0 &&
                                <span className="head-info-item"> <FontAwesome
                                    name="bath"
                                /> {dwelling.spaces.bathRoom} baños
                                </span>}
                                {dwelling.spaces.garage === 'Si' &&
                                <span className="head-info-item"> <FontAwesome name="car"/> Cochera </span>}
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <hr/>
                    </Col>
                    <Col sm={12} className="content">
                        <div className="content-main">
                            <p> {dwelling.generalDescription}
                            </p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <hr/>
                    </Col>
                </Col>
                <Col sm={4}>
                    <Col sm={12} className="pr-box">
                        {dwelling.price
                            ? <span>Precio {dwelling.currency}: {dwelling.price}</span>
                            : <span>Precio: Consulte</span>}
                        <br/>
                        <span>Contacto ?</span>
                    </Col>
                </Col>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.dwelling && this.renderContent()}
            </div>
        );
    }
}


export default connect(
    state => ({
        dwelling: state.dwelling.dwelling
    }),
    dispatch => ({
        requestFindDwelling: id => dispatch(requestDwelling(id))
    })
)(Propiedades);
