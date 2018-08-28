/* global window */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import MapWithSearchBox from '../Maps/MapWithSearchBox';

import {requestFindDwellings} from '../../actions/index';

class Resultados extends Component {
    static propTypes = {
        requestFindDwellings: PropTypes.func.isRequired,
        dwellings: PropTypes.arrayOf(PropTypes.shape({})),
        searchParams: PropTypes.shape({})
    };

    static defaultProps = {
        dwellings: null,
        searchParams: null
    };

    constructor(props) {
        super(props);
        this.state = {
            searchParams: {},
            height: 0
        };
        if (this.props.searchParams) {
            this.state = {
                searchParams: this.props.searchParams
            };
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({height: window.innerHeight});
    }

    handleRefs(address, index) {
        this.setState({
            currentPosition: {
                lat: address.latitude,
                lng: address.altitude,
                index
            }
        });
    }

    handleSubmit(searchParams) {
        this.props.requestFindDwellings(searchParams);
    }

    renderMap() {
        return (
            <Col sm={12} className="no-padding">
                <MapWithSearchBox dwellings={this.props.dwellings} selectedRef={this.state.currentPosition}/>
            </Col>
        );
    }

    render() {
        // document.body.classList.toggle('aside-menu-fixed');
        return (
            <Container fluid className="results no-padding">
                <Row>
                    {this.renderMap()}
                </Row>
            </Container>
        );
    }
}

export default connect(
    state => ({
        dwellings: state.dwelling.searchedDwellings,
        searchParams: state.dwelling.searchParams
    }),
    dispatch => ({
        requestFindDwellings: searchParams => dispatch(requestFindDwellings(searchParams))
    })
)(Resultados);

