import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import HotelsData from './HotelsData'

function UserRow(props) {
  const hotel = props.hotel
  const hotelLink = `/hotels/${hotel.id}`

  // const getBadge = (status) => {
  //   return status === 'Active' ? 'success' :
  //     status === 'Inactive' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Banned' ? 'danger' :
  //           'primary'
  // }

  return (
    <tr key={hotel.id.toString()}>
      <th scope="row"><Link to={hotelLink}>{hotel.id}</Link></th>
      <td><Link to={hotelLink}>{hotel.namehotel}</Link></td>
      <td className="mb-3 mb-xl-0 text-center">
                        <ButtonGroup >
                            <Button color="primary">Edit</Button>
                            <Button color="danger">Delete</Button>
                      </ButtonGroup>
      </td>
    </tr>
  )
}

class Hotels extends Component {

  render() {

    const hotelList = HotelsData.filter((hotel) => hotel.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Hotel
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nama Hotel</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotelList.map((hotel, index) =>
                      <UserRow key={index} hotel={hotel}/>
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

export default Hotels;
