/* eslint-disable max-len */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardTitle,
    CardBody,
    CardImg
} from 'reactstrap';

import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {requestDwellings} from '../../../actions';

moment.locale('es');

class Latest extends Component {
    static propTypes = {
        requestDwellings: PropTypes.func.isRequired,
        dwellings: PropTypes.arrayOf(PropTypes.shape({}))
    };

    static defaultProps = {
        dwellings: null
    };

    componentDidMount() {
        this.props.requestDwellings();
    }

    renderContent() {
        return (
            <Container fluid>
                <Row>
                    {this.props.dwellings.map(dwelling => (
                        <Col sm="4" key={dwelling._id}>
                            <Card>
                                <CardImg
                                    // eslint-disable-next-line react/jsx-max-props-per-line
                                    src={dwelling.images[0] !== undefined ? dwelling.images[0].secure_url : 'http://via.placeholder.com/330x220'}
                                    alt="Card image cap"
                                    top width="100%"
                                />
                                <CardBody>
                                    <CardTitle>
                                        {dwelling.publicationType}, {dwelling.subtype}, {dwelling.address.streetName}, {dwelling.address.city}, {dwelling.address.state}
                                    </CardTitle>
                                    {dwelling.price
                                        ? <CardText>{dwelling.price} {dwelling.currency}</CardText>
                                        : <CardText>Consulte</CardText>}
                                    <CardText>
                                        <small
                                            className="text-muted pull-left"
                                        >Subido {moment(dwelling.createdAt).startOf('minutes').fromNow()}
                                        </small>
                                        <small
                                            className="text-muted pull-left"
                                        >Siocid: {dwelling.siocId}
                                        </small>
                                        <Button
                                            className="text-muted pull-right"
                                            componentClass={Link}
                                            to={`/admin/dwellings/card/${dwelling._id}`}
                                        >Ver Ficha
                                        </Button>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div className="animated fadeIn">
                <h3>Últimas Propiedades cargadas</h3>
                {this.props.dwellings && this.renderContent()}
            </div>
        );
    }
}

export default connect(
    state => ({dwellings: state.dwelling.dwellings}),
    dispatch => ({
        requestDwellings: () => dispatch(requestDwellings())
    })
)(Latest);

