import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavLink,
  OverlayTrigger,
  Tooltip,
  Container,
} from 'react-bootstrap';

const Header_ = () => {
  return (
    <Container className='showcase-container mx-4 my-4'>
      <Nav className='d-inline-block my-4 text-center py-4'>
        <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip id={`tooltip-${'Watch Videos'}`}>
              <strong>Watch</strong>
            </Tooltip>
          }
        >
          <LinkContainer className='mt-4' to='/videos'>
            <NavLink>
              <h1 className='h4 font-weight-bolder'>
                <i className='fas fa-video fw fa-1x'></i> See what's next
              </h1>
            </NavLink>
          </LinkContainer>
        </OverlayTrigger>
      </Nav>
    </Container>
  );
};

export default Header_;
