import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Icon
        src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney+ Logo"
      />
      <NavMenu></NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 65px;
  background: #090b13;
`;

const Icon = styled.img`
  width: 75px;
`;

const NavMenu = styled.div``;
