import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchKlUserPengelola } from '../../../actions';

import usersPengData from './UsersPengData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/userspengelola/${user.id}`
  console.log(props.user);

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.username}</td>
      <td>{user.lastLogin}</td>
      <td>{user.email}</td>
      <td>{user.nohp}</td>
      <td>{user.role}</td> 
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td className="mb-3 mb-xl-0 text-center">
                        <ButtonGroup >
                            <Button color="primary">Edit</Button>
                            <Button color="danger">Delete</Button>
                      </ButtonGroup>
      </td>
    </tr>
  );
}

class UsersPengelola extends Component {
   componentDidMount(){
        this.props.fetchKlUserPengelola();
        console.log(this.props);
    }
  render() {

    const userList = usersPengData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users Pengguna
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">LastLogin</th>
                      <th scope="col">Email</th>
                      <th scope="col">No HP</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
      pengelola : state.pengelola
  };
}

export default connect(mapStatetoProps, {fetchKlUserPengelola})(UsersPengelola);
