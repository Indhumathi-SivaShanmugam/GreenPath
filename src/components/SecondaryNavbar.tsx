import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SecondaryNav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 2rem;
  height: 48px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.25rem;
  transition: color 0.2s;
  &:hover {
    color: #0071dc;
  }
`;

const SecondaryNavbar: React.FC = () => {
  return (
    <SecondaryNav>
      <NavList>
        <NavItem><NavLink to="/departments">Departments</NavLink></NavItem>
        <NavItem><NavLink to="/services">Services</NavLink></NavItem>
        <NavItem><NavLink to="/greenpath">Greenpath</NavLink></NavItem>
        <NavItem><NavLink to="/get-it-fast">Get it Fast</NavLink></NavItem>
        <NavItem><NavLink to="/new-arrivals">New Arrivals</NavLink></NavItem>
        <NavItem><NavLink to="/deals">Deals</NavLink></NavItem>
        <NavItem><NavLink to="/dinner-made-easy">Dinner Made Easy</NavLink></NavItem>
        <NavItem><NavLink to="/pharmacy-delivery">Pharmacy Delivery</NavLink></NavItem>
        <NavItem><NavLink to="/trending">Trending</NavLink></NavItem>
        <NavItem><NavLink to="/back-to-school">Back to School</NavLink></NavItem>
        <NavItem><NavLink to="/my-items">My Items</NavLink></NavItem>
        <NavItem><NavLink to="/walmart-plus">Walmart+</NavLink></NavItem>
        <NavItem><NavLink to="/more">More</NavLink></NavItem>
      </NavList>
    </SecondaryNav>
  );
};

export default SecondaryNavbar; 