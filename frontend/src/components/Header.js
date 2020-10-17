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
    <header id="menu">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>{branding}</NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-${'Instagram'}`}>
                    <strong>Instagram</strong>.
                  </Tooltip>
                }
              >
                <LinkContainer to="/#">
                  <NavLink>
                    <i className="fab fa-instagram fw fa-2x"></i>
                  </NavLink>
                </LinkContainer>
              </OverlayTrigger>

              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip-${'YouTube'}`}>
                    <strong>YouTube</strong>.
                  </Tooltip>
                }
              >
                <LinkContainer to="/#">
                  <NavLink>
                    <i className="fab fa-youtube fw fa-2x"></i>
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
