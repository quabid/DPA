import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeScreen = ({ vdo_src }) => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col lg={6}>
            <h2 className="h1">When We Create You Elevate</h2>
          </Col>
          <Col lg={6}>
            <p className="lead">
              Our slogan says it all. We have a talent team and support system
              that keeps us all together. We are different from any movie and
              television company.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              inventore illum, harum nesciunt hic earum atque maiores possimus
              itaque. Blanditiis mollitia quos obcaecati aliquam possimus
              debitis minima ratione quisquam explicabo?
            </p>
          </Col>
        </Row>
      </Container>
      <video id="background-video" playsInline loop autoPlay={true} muted>
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default HomeScreen;
