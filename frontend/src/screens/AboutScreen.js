import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutScreen = () => {
  useEffect(() => {
    document.title = 'About';
  });

  return (
    <Container fluid>
      <Row id='about-screen'>
        <Col lg={6} xs={12}>
          <h2 className='h3 font-weight-bolder text-center'>
            When We Create You Elevate
          </h2>
        </Col>
        <Col lg={6} xs={12}>
          <p className='lead font-weight-bold font-italic text-white'>
            Our slogan says it all. We have a talent team and support system
            that keeps us all together. We are different from any movie and
            television company.
          </p>
        </Col>
      </Row>
      <video id='background-video' playsInline loop autoPlay={true} muted>
        <source
          src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

export default AboutScreen;
