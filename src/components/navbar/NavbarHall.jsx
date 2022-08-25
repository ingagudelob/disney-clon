import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarHall = () => {
  return (
    <Nav>
      <Icon
        src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney+ Logo"
      />
      <NavMenu>
        <Redirect to="/auth/login">Iniciar Sesión</Redirect>
      </NavMenu>
    </Nav>
  );
};

export default NavbarHall;

const Nav = styled.nav`
  height: 65px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 25px;
  overflow-x: hidden;
`;

const Icon = styled.img`
  width: 75px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  aling-items: center;
  position: end;
  justify-content: flex-end;

        &:after {
        content: "";
        height: 1.5px;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        opacity: 0;
        transform-origin: left center;
        transition: all 200ms cubic-bezier(0.25, 0.4, 0.4, 0.5) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const Redirect = styled(NavLink)`
  color: white;
  font-size: 18px;
  padding: 10px 25px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;
