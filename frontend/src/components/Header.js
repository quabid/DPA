// @ts-nocheck
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const Header = ({ branding = 'ProShop' }) => {
  return (
    <header id='menu'>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <NavbarBrand className='font-weight-bolder text-muted'>
              <span className='branding'> {branding}</span>
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-${'About US'}`}>
                    <strong className='font-weight-bolder'>About Us</strong>
                  </Tooltip>
                }
              >
                <LinkContainer to='/about'>
                  <NavLink className='font-weight-bolder'>
                    <i className='fas fa-question fw '></i> About Us
                  </NavLink>
                </LinkContainer>
              </OverlayTrigger>
            </Nav>
            <Nav className='ml-auto font-weight-bolder'>
              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-${'Instagram'}`}>
                    <strong>Instagram</strong>
                  </Tooltip>
                }
              >
                <LinkContainer to='/#'>
                  <NavLink>
                    <i className='fab fa-instagram fw'></i> Instagram
                  </NavLink>
                </LinkContainer>
              </OverlayTrigger>

              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-${'YouTube'}`}>
                    <strong>YouTube</strong>
                  </Tooltip>
                }
              >
                <LinkContainer to='/redirect'>
                  <NavLink>
                    <i className='fab fa-youtube fw'></i> YouTube
                  </NavLink>
                </LinkContainer>
              </OverlayTrigger>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
