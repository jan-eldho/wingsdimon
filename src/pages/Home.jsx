import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import weddingHall from '../assets/event-plang.jpg';
import Catering from '../assets/catering.jpg';
import floral from '../assets/floral-new.jpg';


function Home() {
  // State for Collapse
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row>
        <Col md={4} className='mt-5 m-5'>
          <img 
            src='https://jan-eldho.github.io/wings-decorations/images/about-1.jpg' 
            height={'250px'} 
            width={'100%'} 
            alt='gallery'
          />
        </Col>
        <Col md={7}>
          <h4 style={{ color: 'white', fontSize: '30px' }} className='mt-5 mb-2'>
            About Us
          </h4>
          <hr style={{ color: 'orange', fontSize: '20px' }} />
          <p style={{ color: 'white', fontSize: '15px' }}>
            With years of experience in the event management industry, Wings Decorations is your go-to partner for all things event planning and decoration. Our dedicated team of professionals is passionate about crafting unique experiences tailored to your needs. From initial concept to flawless execution, we ensure every detail is perfect, so you can enjoy your special day stress-free.
          </p>
          <button className='btn btn-warning'>
            <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa-solid fa-arrow-right me-2"></i>Contact Us
            </Link>
          </button>
          <button 
            className='btn btn-warning ms-3' 
            onClick={() => setOpen(!open)}
          >
            Read More
          </button>
        </Col>
        <hr style={{color:'orange'}}/>
      </Row>
      <Collapse in={open}>
        <div className='mb-5'>
          <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
            <hr style={{color:'orange'}}/>
            <h3 className='text-warning' style={{fontSize:'30px'}}>Our services</h3>
            <p style={{ color: 'white', fontSize: '15px' }}>
              At Wings Diamonds, we offer a comprehensive range of services to cater to all your event needs:
            </p>
            <Row className='d-flex justify-content-center'>
              <Col md={4} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weddingHall} style={{width:'100%',height:'100%'}} className='p-2' />

                  <Card.Body>
                    <Card.Title>Event Planning</Card.Title>
                    <Card.Text>
                      Full-service planning, coordination, and management for seamless events. Decorations that reflect your style and theme, from elegant to extravagant.
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>
                        <i className="fa-solid fa-arrow-right me-2"></i>Contact Us
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={floral} style={{width:'100%',height:'100%'}} className='p-2'/>
                  <Card.Body>
                    <Card.Title>Floral Arrangements
                    </Card.Title>
                    <Card.Text>
                    Stunning floral designs that add a touch of beauty to any occasion. Lighting & Sound: Professional lighting and sound services to create the perfect ambiance.
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>
                        <i className="fa-solid fa-arrow-right me-2"></i>Contact Us
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Catering} style={{width:'100%',height:'100%'}} className='p-2' />
                  <Card.Body>
                    <Card.Title>Catering</Card.Title>
                    <Card.Text>
                    Exquisite catering options that delight your guests' taste buds. Venue Selection: Assistance in finding the perfect venue for your event.
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>
                        <i className="fa-solid fa-arrow-right me-2"></i>Contact Us
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Home;
