import React, { Component } from 'react';
import { ButtonGroup,Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,
  Button } from 'reactstrap';

class Travel extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Kategori Wisata
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th>Kategori Wisata</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Wisata Alam - Gunung</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>Wisata Alam - Pantai</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>Wisata Belanja</td>
                    <td className="mb-3 mb-xl-0 text-center">
                    <ButtonGroup >
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                  </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>WIsata Umum</td>
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

export default Travel;
