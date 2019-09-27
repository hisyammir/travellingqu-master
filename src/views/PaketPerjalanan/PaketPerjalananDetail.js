import React, { Component } from 'react';
import { Table, Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import paketPerjalananData from './PaketPerjalananData';


const items = [
  {
    src: '../../assets/img/paketPerjalanan/947b955b79bede9b72c98a68d688d330.jpg',
    altText: '',
    caption: '',
  },
  {
    src: '../../assets/img/paketPerjalanan/795567_720.jpg',
    altText: '',
    caption: '',
  },
  {
    src: '../../assets/img/paketPerjalanan/maxresdefault.jpg',
    altText: '',
    caption: '',
  },
];

class PaketPerjalananDetail extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {

        const paketPerjalanan = paketPerjalananData.find( paketPerjalanan => paketPerjalanan.id.toString() === this.props.match.params.id)

        const paketPerjalananDetails = [paketPerjalanan] ? Object.entries(paketPerjalanan) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    
        const { activeIndex } = this.state;
    
        const slides = items.map((item) => {
          return (
            <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
              <img className="d-block w-100" src={item.src} alt={item.altText} />
            </CarouselItem>
          );
        });
    
        const slides2 = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img className="d-block w-100" src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
          <div className="animated fadeIn">
            <Row>
            <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Detail Paket Perjalanan</strong>
              </CardHeader>
              <CardBody>
              <Table responsive striped hover>
                    <tbody>
                      {
                        paketPerjalananDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i><strong>Foto Paket Perjalanan</strong>
                  </CardHeader>
                  <CardBody>
                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                      {slides2}
                      <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                      <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        );
      }
    }


export default PaketPerjalananDetail