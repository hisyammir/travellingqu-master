import React, { Component } from 'react';
import { ButtonGroup,Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,
  Button, InputGroup, Input, InputGroupAddon, FormGroup} from 'reactstrap';
import { connect } from 'react-redux';
import {fetchKlUserPengelolas} from '../../actions';
import { Link } from 'react-router-dom';

class KelUserPengelola extends Component {

  componentDidMount(){
    this.props.fetchKlUserPengelolas();
}
  renderList(){
    if (!this.props.pengelola){
      return null;
    }
    return this.props.pengelola.map(pengelolaa => {
        
      return (
          <tr key={pengelolaa.idklpuserpengelola}>
            <th>
              {pengelolaa.idklpuserpengelola}
            </th>
            <td>
                {pengelolaa.nmklpuserpengelola}
            </td>
            <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                       <Link to={`/keluserpengelola/editkeluserpengelola/${pengelolaa.idklpuserpengelola}`}><Button color="primary">Edit</Button></Link>
                        <Link to={`/keluserpengelola/deletekeluserpengelola/${pengelolaa.idklpuserpengelola}`}><Button color="danger" className="mr-1">Delete</Button></Link>
                        {/* <Button color="danger" className="mr-1" onClick={this.toggleDanger}>Delete</Button> */}
                  </ButtonGroup>
            </td>
          </tr>
      );
  })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={8}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Kelompok User Pengelola
              </CardHeader>
              
              <CardBody>
              <FormGroup row>
              <Col md="12">
                      <InputGroup>
                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="User Pengelola" />
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="secondary"><i className="fa fa-search"></i> Search</Button>
                        </InputGroupAddon>
                        <Link to="/keluserpengelola/createkeluserpengelola"><Button  type="button" color="primary">Create Data</Button></Link>
                      </InputGroup>
                      {/* <Link to="/keluserpengelola/createkeluserpengelola"><Button  type="button" color="primary">Create Data</Button></Link> */}
                </Col>
                </FormGroup>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nama Kelompok User Pengelola</th>
                    <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderList()}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
          {/* <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
                              className={'modal-danger ' + this.props.className}>
                          <ModalHeader toggle={this.toggleDanger}>Danger</ModalHeader>
                          <ModalBody>
                            Are you sure want to delete this data?
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger"  onClick={this.toggleDanger}>Yes</Button>{' '}
                            <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
                          </ModalFooter>
            </Modal> */}
        </Row>
      </div>

    );
  }
}

const mapStatetoProps = (state) => {
  if (state.pengelola === null){
    return {pengelola : ''};
  }
  return {
      pengelola : Object.values(state.pengelola)
  };
}

export default connect(mapStatetoProps, {fetchKlUserPengelolas}) (KelUserPengelola);
