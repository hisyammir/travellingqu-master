import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchKlUserPengelola, deleteKlUserPengelola } from '../../actions';
import { connect } from 'react-redux';

class DeleteKelUserPengelola extends Component{
    componentDidMount(){
        this.props.fetchKlUserPengelola(this.props.match.params.id);
    }
    renderActions(){
      const {id} = this.props.match.params;
      return (
          <React.Fragment>
                 <Button color="danger" onClick={() => this.props.deleteKlUserPengelola(id)}>Yes</Button>
                  <Link to='/keluserpengelola'><Button color="secondary" onClick={this.toggleDanger}>Cancel</Button></Link> 
          </React.Fragment>
      );
    }
    constructor(props) {
        super(props);
        this.state = {
          danger: true
        };
        this.toggleDanger = this.toggleDanger.bind(this);
      }
    
      toggleDanger() {
        this.setState({
          danger: !this.state.danger,
        });
      }
      
    render(){
        return(
            <Modal isOpen={this.state.danger}
            className={'modal-danger ' + this.props.className} >
                          <ModalHeader >Danger</ModalHeader>
                          <ModalBody>
                            Are you sure want to delete this data?
                          </ModalBody>
                          <ModalFooter>
                              {this.renderActions()}
                         </ModalFooter>
            </Modal>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    if (state.pengelola === null){
        return null;
      }
        return { pengelola: state.pengelola[ownProps.match.params.id] };  
};

export default connect (mapStatetoProps, {fetchKlUserPengelola, deleteKlUserPengelola}) (DeleteKelUserPengelola);