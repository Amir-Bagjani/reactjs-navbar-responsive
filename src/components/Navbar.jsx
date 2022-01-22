import { Close, Menu } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const items = [
  { id: 1, title: `Home`, path: `#`, type: `Link` },
  { id: 2, title: `Services`, path: `#`, type: `Link` },
  { id: 3, title: `Products`, path: `#`, type: `Link` },
  { id: 4, title: `Contact Us`, path: `#`, type: `Link` },
  { id: 5, title: `Signup`, path: `#`, type: `Button` },
];

const Nav = styled.nav`
  height: 80px;
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  color: white;
  letter-spacing: 0.5px;
  position: sticky;
  top: 0;
`;
const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  margin-right: auto;
  cursor: pointer;
`;
const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 570px) {
    display: block;
  }
`;
const ListLarge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media only screen and (max-width: 570px) {
    display: none;
  }
`;
const NavbarLink = styled(Link)`
  border-radius: 4px;
  padding: 0.4rem 1rem;
  background-color:${props => props.type === `Button` ? `#3acbf7` : `transparent`} ;
  transition: 250ms;
  
  &:hover {
    background-color:${props => props.type === `Link` ? `#6d76f7` : `#fff`} ;
    color:${props => props.type === `Button` ? `#6568f4` : null} ;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.4rem 0.7rem;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 570px) {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.8rem;
    margin: 0 2rem;
  }
`;
const ListSmall = styled.div`
background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  position: fixed;
  top: 80px;
  left: ${props => props.showNav ? 0 : `-100%`};
  width: 100%;
  display: none;
  flex-direction:column;
  gap: 0.8rem;
  transition: 350ms ease-in-out;
  padding: 0.8rem 0 0.8rem 0;
  @media only screen and (max-width: 570px) {
    display: flex;
  }

`
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Nav>
      <NavWrapper>
        <Logo>ReactJS</Logo>
        <MenuIcon>
          {!showNav ? (
            <Menu fontSize="large" onClick={() => setShowNav(true)} />
          ) : (
            <Close fontSize="large" onClick={() => setShowNav(false)} />
          )}
        </MenuIcon>

        {/* large screen */}
        <ListLarge>
          {items.map((i) => (
            <NavbarLink key={i.id} to={i.path} type={i.type}>
              {i.title}
            </NavbarLink>
          ))}
        </ListLarge>

        {/* small screen */}
        <ListSmall showNav={showNav}>
        {items.map((i) => (
            <NavbarLink key={i.id} to={i.path} type={i.type}>
              {i.title}
            </NavbarLink>
          ))}
        </ListSmall>

      </NavWrapper>
    </Nav>
  );
}
