import React from "react";
import styled from "styled-components";
import homeIcon from "../../assets/images/home-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import serieIcon from "../../assets/images/series-icon.svg";
import movieIcon from "../../assets/images/movie-icon.svg";
import userImg from "../../assets/images/user.jfif";

const Navbar = () => {
  return (
    <Nav>
      <Icon
        src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney+ Logo"
      />
      <NavMenu>
        <a>
          <img src={homeIcon} />
          <span>Inicio</span>
        </a>
        <a>
          <img src={searchIcon} />
          <span>Buscar</span>
        </a>

        <a>
          <img src={serieIcon} />
          <span>Series</span>
        </a>

        <a>
          <img src={movieIcon} />
          <span>Peliculas</span>
        </a>
      </NavMenu>
      <UserProfile src={userImg} alt="user profile" />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 65px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

const Icon = styled.img`
  width: 75px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  aling-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      width: 25px;
      padding: 0 4px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1.2px;
      position: relative;

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
const UserProfile = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
