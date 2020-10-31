import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavLink,
  OverlayTrigger,
  Tooltip,
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

const LandingContent = () => {
  return (
    <Container fluid className="showcase-container text-center">
      <Row>
        <Col lg={4} xs={12}>
          <Nav className="d-inline-block text-center m-0">
            <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-${'Watch Videos'}`}>
                  <strong>Watch</strong>
                </Tooltip>
              }
            >
              <LinkContainer to="/videos">
                <NavLink>
                  <h1 className="h4 font-weight-bolder m-0 p-0">
                    <i className="fas fa-video fw fa-1x"></i> See what's next
                  </h1>
                </NavLink>
              </LinkContainer>
            </OverlayTrigger>
          </Nav>
          <Row>
            <Col xs={12}>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                animi perspiciatis dignissimos tempore sed, quo quibusdam
                voluptatum quis vero. Commodi fuga adipisci magnam quia, quis
                eveniet repellendus eligendi necessitatibus animi. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Est error
                perferendis voluptatibus quidem sequi reiciendis, dolorem rerum
                voluptas animi, odio architecto facilis dolor suscipit
                exercitationem quo distinctio eius, minus natus. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quaerat ex
                provident, ipsa enim fugit sunt corporis, natus dolorum dolore
                mollitia, eius voluptatem voluptatum expedita nostrum harum quo
                hic quidem eveniet.
              </p>
            </Col>
          </Row>
        </Col>

        <Col lg={8} xs={12}>
          <Card
            style={{
              opacity: '0.6',
              background: 'rgba(10,10,20,0.5',
              borderRadius: '10px',
            }}
          >
            <Card.Img src="/dpa_logo.png" alt="dyverse productions" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              opacity: '0.6',
              background: 'rgba(10,10,20,0.5',
              borderRadius: '10px',
            }}
          >
            <p className="lead text-left text-white p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              odio magni eius explicabo, ipsum, vel, asperiores quisquam
              exercitationem cupiditate nam modi. Voluptate assumenda tempore
              amet dicta deserunt molestiae quos voluptates. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Distinctio ad ipsam
              perferendis aut omnis non? At voluptatum, illo eius, unde maiores
              consequuntur in deserunt minima quas delectus amet reiciendis
              assumenda? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Vitae magnam voluptate explicabo earum ab provident. Ut
              consequuntur dolores minima assumenda perspiciatis neque mollitia.
              Eveniet nisi distinctio aut magni velit assumenda?
            </p>
            <p className="p-3 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              facilis hic quidem ea architecto? In eius, vero aliquid blanditiis
              obcaecati officia praesentium ab illum provident, ratione, aut
              molestias magnam. Blanditiis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi nulla, soluta quod, vero
              voluptate a rerum consequatur eveniet odio eum illo veniam
              accusantium, nihil dolore recusandae quis ipsam repudiandae!
              Dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis hic ea ullam recusandae quas quasi, ratione illum blanditiis
              minima repellat sapiente earum deleniti fuga perspiciatis eos
              dolorum aut consectetur natus? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Odio veritatis aut, quaerat in
              possimus nisi. Reiciendis nam rerum quis. Provident ratione iste
              adipisci blanditiis atque sint, doloremque suscipit dignissimos
              in?
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingContent;
