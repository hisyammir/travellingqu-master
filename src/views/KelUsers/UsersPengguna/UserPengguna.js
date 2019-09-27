import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,
  Button, InputGroup, Input, InputGroupAddon, FormGroup} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUserPenggunas } from '../../../actions';
// import { Link } from 'react-router-dom';

class UserPengguna extends Component{
    componentDidMount(){
        this.props.fetchUserPenggunas();
    }
    render(){
        return (
            <div className="animated fadeIn">
            <Row>
              <Col xl={8}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> User Pengguna
                  </CardHeader>
                  
                  <CardBody>
                  <FormGroup row>
                  <Col md="12">
                          <InputGroup>
                            <Input type="text" id="input1-group2" name="input1-group2" placeholder="User Pengguna" />
                            <InputGroupAddon addonType="prepend">
                              <Button type="button" color="secondary"><i className="fa fa-search"></i> Search</Button>
                            </InputGroupAddon>
                            {/* <Link to="/keluserpengelola/createkeluserpengelola"><Button  type="button" color="primary">Create Data</Button></Link> */}
                          </InputGroup>
                          {/* <Link to="/keluserpengelola/createkeluserpengelola"><Button  type="button" color="primary">Create Data</Button></Link> */}
                    </Col>
                    </FormGroup>
                    <Table responsive hover>
                      <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">LastLogin</th>
                        <th scope="col">role</th>
                        <th scope="col">status</th>
                        <th scope="col">actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      {/* {this.renderList()} */}
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
            </Row>
        </div>
        );
    }
}

const mapStatetoProps = (state) => {
    if (state.userpengguna === null){
      return {userpengguna : ''};
    }
    return {
        userspengguna : Object.values(state.userpengguna)
    };
  }


export default connect(mapStatetoProps, {fetchUserPenggunas}) (UserPengguna);