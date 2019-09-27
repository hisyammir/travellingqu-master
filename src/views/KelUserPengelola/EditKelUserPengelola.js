import React, { Component } from 'react';
import _ from 'lodash';
import {
  Col,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchKlUserPengelola, editKlUserPengelola } from '../../actions';
import FormKelUserPengelola from './FormKelUserPengelola'

class EditKelUserPengelola extends Component {
    componentDidMount(){
        this.props.fetchKlUserPengelola(this.props.match.params.id);
     }

onSubmit = (formValues) => {
    //  event.preventDefault();
    // console.log(formValues);
    this.props.editKlUserPengelola(this.props.match.params.id, formValues);
}
  render() {
  //   if (!this.props.pengelola){
  //     return <div>Loading..</div>;
  // }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3"></Col>
          <Col xs="12" sm="6">
              <FormKelUserPengelola  initialValues={_.pick(this.props.pengelola, 'nmklpuserpengelola', 'inisialklpuserpengelola')} 
            onSubmit={this.onSubmit} />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  if (state.pengelola === null){
    return null;
  }
    return { pengelola: state.pengelola[ownProps.match.params.id] };
};


export default connect(mapStateToProps, {fetchKlUserPengelola, editKlUserPengelola})(EditKelUserPengelola);
