import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../About/About.css';
import Button from "react-bootstrap/Button";



function aboutMe() {
    return(

<section className="page-section" id="About">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">About</h2>
    </div>
  </div>
  
  <div className="article-hero">
    <Card className="article-Card">
      <Card.Body>
        <Card.Text>
          <p className='content-text'>
            Welcome again! My name is Jordan. Born and Raised in Charlotte, NC. Excited and motivated moving into the Tech World. 
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
                    <a href="https://docs.google.com/document/d/1gMaepG0uE-dOq_5BtFP4U0GJ2CFgwGWHjtjel2lHhhI/" target="_blank" rel="noopener noreferrer">
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
      <Image className='my-image' src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" roundedCircle />
    </Col>
  </Row>
</Container>

    </div>
</div>
</section>

    )
};

export default aboutMe;