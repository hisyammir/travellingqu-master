import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { createKlUserPengelola } from '../../actions';
import FormKelUserPengelola from './FormKelUserPengelola'

class CreateKelUserPengelola extends Component {

onSubmit = (formValues) => {
    //  event.preventDefault();
    // console.log(formValues);
    this.props.createKlUserPengelola(formValues);
}
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3"></Col>
          <Col xs="12" sm="6">
              <FormKelUserPengelola onSubmit={this.onSubmit} />
          </Col>
        </Row>
      </div>
    );
  }
}


export default connect(null, {createKlUserPengelola})(CreateKelUserPengelola);
