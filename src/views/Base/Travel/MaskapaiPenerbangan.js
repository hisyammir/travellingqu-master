import React, { Component } from 'react';
import { ButtonGroup,Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,
  Button } from 'reactstrap';

class MaskapaiPenerbangan extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Maskapai Penerbangan
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th>Maskapai Penerbangan</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Garuda Indonesia</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>Lion Air</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>Arabian Airlines</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
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

export default MaskapaiPenerbangan;
