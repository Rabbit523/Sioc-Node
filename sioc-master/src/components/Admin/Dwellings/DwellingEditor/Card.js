import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Propiedades from '../../../Propiedades';
import '../../../../sass/common.scss';


class Card extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        })
    };

    render() {
        const {id} = this.props.match.params;
        return (
            <Fragment>
                <Propiedades id={id}/>
                <Row>
                    <Col sm={12}>
                        <Button
                            className="ta-edit-user"
                            componentClass={Link}
                            to="/admin/dwellings/General"
                        >
                            <FontAwesome name="pencil"/>
                        </Button>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default (Card);
