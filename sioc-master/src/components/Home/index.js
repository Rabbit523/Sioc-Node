/* global window */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Splash from './Splash';
import Search from './Search';
import Intro from './Intro';
import Footer from './Footer';
import DwellingService from '../../services/dwelling';
import {requestFindDwellings} from '../../actions/index';

class Home extends Component {
    static propTypes = {
        requestFindDwellings: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
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
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    async handleSubmit(siocId) {
        if (!siocId) return;
        const id = await DwellingService.findSiocId(siocId);
        if (id) {
            this.props.history.push(`/propiedades/${id}`);
        }
    }

    handleSearch(searchParams) {
        if (!searchParams) return;
        this.props.requestFindDwellings(searchParams);
        this.props.history.push('/resultados/');
    }

    render() {
        const size = {
            height: this.state.height,
            width: this.state.width
        };
        return (
            <Fragment>
                <section className="intro centered" style={size}>
                    <Splash onChange={e => this.handleSubmit(e)} onSearch={e => this.handleSearch(e)}/>
                </section>
                <section className="highlights" style={size}>
                    <Search/>
                </section>
                <section className="info centered" style={size}>
                    <Intro/>
                </section>
                <section className="footer">
                    <Footer/>
                </section>
            </Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        requestFindDwellings: searchParams => dispatch(requestFindDwellings(searchParams))
    })
)(Home);
