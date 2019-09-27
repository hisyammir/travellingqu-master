import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import paketPerjalananData from './PaketPerjalananData'

function UserRow(props) {
  const paketPerjalanan = props.paketPerjalanan
  const paketPerjalananDetailLink = `/paketperjalanan/PaketPerjalananDetail/${paketPerjalanan.id}`
  const detailPaketPerjalananLink = `/paketperjalanan/detailpaketperjalanan/${paketPerjalanan.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={paketPerjalanan.id.toString()}>
      <Link to={detailPaketPerjalananLink}><th scope="row">{paketPerjalanan.id}</th></Link>
      <Link to={detailPaketPerjalananLink}><td>{paketPerjalanan.nmpaketperjalanan}</td></Link>
      <td><Badge color={getBadge(paketPerjalanan.status)}>{paketPerjalanan.status}</Badge></td>
      <td className="mb-3 mb-xl-0 text-center">
          <ButtonGroup >
              <Button color="primary">Edit</Button>
              <Button color="danger">Delete</Button>
              <Link to={paketPerjalananDetailLink}><Button color="info">Detail</Button></Link>
          </ButtonGroup>
      </td>
    </tr>
  )
}

class PaketPerjalanan extends Component {

  render() {

    const paketPerjalananList = paketPerjalananData.filter((paketPerjalanan) => paketPerjalanan.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={8}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Paket Perjalanan
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nama Paket Perjalanan</th>
                      <th scope="col">status</th>
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paketPerjalananList.map((paketPerjalanan, index) =>
                      <UserRow key={index} paketPerjalanan={paketPerjalanan}/>
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

export default PaketPerjalanan;
