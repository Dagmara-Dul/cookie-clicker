import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


const Navbar = () => (
  <Nav>
    <Logo>
      Happy<span>Cookie</span>
    </Logo>
    <Hamburger>
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu>
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
);

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: red;
  }
  margin-left: 10px;
  text-decoration:none;
  text-transform: uppercase;
`;

const Nav = styled.div`
  padding: 20px 40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Hamburger = styled.div``;
const Menu = styled.ul`
list-style:none;
display:flex;
`
const MenuItem = styled.li``;
const Logo =styled.p``;

export default Navbar;



// const Navbar = () => (
//   <Nav>
//     <Hamburger>
//       <span />
//       <span />
//       <span />
//     </Hamburger>
//     <Menu>

//     </Menu>
//     <ul >
//       <li>
//         <NavLink exact to="/home">home</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/achievements">achievements</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/shop">shop</NavLink>
//       </li>
//     </ul>
//   </Nav>
// );
