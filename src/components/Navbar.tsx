import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search as SearchIcon } from 'lucide-react';

const NavbarContainer = styled.nav`
  background: #0071dc;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  letter-spacing: 1px;
`;

const SearchBarContainer = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  margin: 0 2rem;
  height: 40px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  border-radius: 4px 0 0 4px;
  height: 100%;
`;

const SearchButton = styled.button`
  background: #ffc220;
  border: none;
  border-radius: 0 4px 4px 0;
  height: 100%;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
`;

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic or navigation here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <NavbarContainer>
      <Logo to="/">Walmart</Logo>
      <SearchBarContainer onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search Walmart..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <SearchIcon color="#222" size={22} />
        </SearchButton>
      </SearchBarContainer>
      <Icons>
        <IconButton to="/account" title="Account">
          <User size={24} />
        </IconButton>
        <IconButton to="/cart" title="Cart">
          <ShoppingCart size={24} />
        </IconButton>
      </Icons>
    </NavbarContainer>
  );
};

export default Navbar; 