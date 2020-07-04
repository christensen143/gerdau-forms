import React, { useContext } from 'react';

import { auth } from '../../utils/firebase';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './NavBar.css';

const NavBar = () => {
  const { user, role } = useContext(AuthContext);

  const isAdmin = () => {
    if (role === 'Admin') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container className="NavBar">
      <Navbar className="bg-custom" variant="dark" expand="lg">
        {user && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="gerdau-forms-navbar">
              <Nav className="mr-auto">
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    background: 'white',
                    color: '#223c89',
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/mobileequipmentinspection"
                  activeStyle={{
                    background: 'white',
                    color: '#223c89',
                  }}
                >
                  Mobile Equipment Inspection
                </NavLink>
                <NavLink
                  to="/tapemeasurerecord"
                  activeStyle={{
                    background: 'white',
                    color: '#223c89',
                  }}
                >
                  Tape Measure Record
                </NavLink>
                <NavLink
                  to="/craneinspection"
                  activeStyle={{
                    background: 'white',
                    color: '#223c89',
                  }}
                >
                  Crane Pre-Inspection
                </NavLink>
                <NavLink
                  to="/equipment"
                  activeStyle={{
                    background: 'white',
                    color: '#223c89',
                  }}
                >
                  Equipment
                </NavLink>
              </Nav>
              <Nav className="ml-auto">
                <span className="material-icons">account_circle</span>
                <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="/useradmin">Admin</NavDropdown.Item> */}
                  {isAdmin && (
                    <>
                      <NavDropdown.Item href="/useradmin">
                        User Admin
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/formadmin">
                        Form Admin
                      </NavDropdown.Item>
                    </>
                  )}

                  <NavDropdown.Item onClick={() => auth.signOut()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </Container>
  );
};

export default NavBar;
