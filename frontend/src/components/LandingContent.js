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
} from 'react-bootstrap';

const Header_ = () => {
  return (
    <Container fluid className="showcase-container text-center">
      <Row>
        <Col lg={4} xs={12}>
          <Nav className="d-inline-block text-center">
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
                  <h1 className="h4 font-weight-bolder">
                    <i className="fas fa-video fw fa-1x"></i> See what's next
                  </h1>
                </NavLink>
              </LinkContainer>
            </OverlayTrigger>
          </Nav>
        </Col>

        <Col lg={8} xs={12}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            tenetur blanditiis cupiditate fugiat illum rem veritatis atque
            facere quo at quas placeat minima necessitatibus obcaecati voluptas
            voluptatibus, exercitationem ad iste. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Distinctio exercitationem esse
            veritatis dolorum, minus consectetur, aspernatur vitae aperiam
            voluptatem explicabo adipisci velit hic, omnis architecto beatae
            cumque quos dolorem ea. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Distinctio commodi sed tempora, pariatur eaque
            recusandae ullam eos? Ab exercitationem, reprehenderit fugit, error
            accusamus ratione debitis ut non minus asperiores quae? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In aliquam fugiat non
            iusto ea ad magnam officiis dignissimos deleniti, accusamus
            inventore placeat id maxime laudantium illo, sapiente numquam, quia
            sed!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p className="lead text-left">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header_;
