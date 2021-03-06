import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../About/About.css';
import Button from "react-bootstrap/Button";
import myPic from './profilePic/myPic.png'


function aboutMe() {
    return(

<section className="page-section" id="About">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className=" about-text section-heading text-uppercase">About</h2>
    </div>
  </div>
  
  <div className="article-hero">
    <Card className="article-Card">
      <Card.Body>
        <Card.Text>
          <p className='content-text'>
            Hello! My name is Jordan, born and raised in Charlotte, NC. Driven my the engine of my car. I'm a motivated individual with a desire to learn web development. Inspired by curiosity.
          </p>
        </Card.Text>
      </Card.Body>
      <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1p6SifPbSEWiiuXSCsx5xoVuwf3--ACG6HbJZIkAsO6g/edit" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/jguzman11" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/jordan-guzman-74838b164/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
    </Card>

  <Container className='image-container'>
  <Row>
    <Col>
      <Image className='my-image' src={myPic} roundedCircle />
    </Col>
  </Row>
</Container>

    </div>
</div>
</section>

    )
};

export default aboutMe;