import React, { useState } from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #C84234;
  }
  &:hover{
    color: #C84234;
    font-size:22px;
  }
  margin-left: 10px;
  text-decoration:none;
  color: #E17D77;
  font-size:20px;
  font-weight: bold;
`;

const Nav = styled.div`
  padding: 20px 40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: 80px;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const Hamburger = styled.div`
  display:none;
  flex-direction:column;
  cursor:pointer;
  
  span{
    height: 5px;
    width:45px;
    background-color: #C84234;
    margin: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px){
  display:flex;
}
`;

const Menu = styled.ul`
display:flex;
justify-content:space-between;
list-style:none;

align-items: center;
position:relative;

@media (max-width: 768px){
  overflow: hidden;
  flex-direction:column;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  width:100%;
}
`
const MenuItem = styled.li``;

const Logo =styled.p`
  font-size:32px;
  color: #C84234;
  font-weight:bold;
  span{
    font-weight:300;
    color: #E17D77;
    font-size:28px;
  }
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Nav>
      <Logo>
        Happy<span>Bakery</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
          <MenuItem>
            <StyledLink exact to="/home">home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink  exact to="/achievements">achievements</StyledLink >
          </MenuItem>
          <MenuItem>
            <StyledLink  exact to="/shop">shop</StyledLink >
          </MenuItem>
      </Menu>
    </Nav>
  )
};

export default Navbar;
