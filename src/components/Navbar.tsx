import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search as SearchIcon, ChevronDown, MapPin, Heart } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const NavbarContainer = styled.nav`
  background: #0071dc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  width: 100vw;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 32px;
`;

const WalmartLogo = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickupDelivery = styled.div`
  background: #003087;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 0 24px 0 12px;
  height: 56px;
  min-width: 340px;
  max-width: 400px;
  gap: 12px;
`;

const PickupIcon = styled.div`
  background: #e6f1fb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickupText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.1;
  min-width: 0;
`;

const PickupTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.1;
`;

const PickupLocation = styled.div`
  font-size: 1rem;
  color: #e6e6e6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.1;
`;

const DropdownIcon = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: 32px;
`;

const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 32px;
  height: 56px;
  width: 600px;
  min-width: 320px;
  max-width: 700px;
  box-shadow: none;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  border-radius: 32px 0 0 32px;
  height: 100%;
  background: transparent;
  color: #222;
`;

const SearchButton = styled.button`
  background: #003087;
  border: none;
  border-radius: 0 32px 32px 0;
  height: 100%;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-right: 32px;
`;

const RightItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  gap: 8px;
  position: relative;
  height: 56px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  min-width: 320px;
  padding: 1.5rem 0.5rem 1rem 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DropdownButton = styled.button`
  width: 90%;
  margin: 0 auto 0.5rem auto;
  background: #0071dc;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 24px;
  padding: 0.9rem 0;
  cursor: pointer;
  display: block;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.7rem 1.2rem;
  font-size: 1.08rem;
  color: #222;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: #f5f6fa;
  }
`;

const DropdownDivider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 0.5rem 0;
`;

const WalmartPlusLogo = styled.span`
  font-weight: 700;
  color: #0071dc;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RightButton = styled.button`
  color: #fff;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  gap: 8px;
  position: relative;
  height: 56px;
  cursor: pointer;
  padding: 0;
`;

const CartPrice = styled.span`
  color: #fff;
  font-size: 1.1rem;
  margin-left: 8px;
`;

const Navbar: React.FC<{ onSignInClick?: () => void }> = ({ onSignInClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userFirstName, setUserFirstName] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        const firstName = data.user.user_metadata?.first_name;
        setUserFirstName(firstName || null);
      } else {
        setUserFirstName(null);
      }
    };
    fetchUser();
    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic or navigation here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <WalmartLogo>
          {/* Walmart Spark Logo SVG */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="none" />
            <g>
              <circle cx="20" cy="7" r="2" fill="#ffc220" />
              <circle cx="20" cy="33" r="2" fill="#ffc220" />
              <circle cx="7" cy="20" r="2" fill="#ffc220" />
              <circle cx="33" cy="20" r="2" fill="#ffc220" />
              <circle cx="10.93" cy="10.93" r="2" fill="#ffc220" />
              <circle cx="29.07" cy="29.07" r="2" fill="#ffc220" />
              <circle cx="10.93" cy="29.07" r="2" fill="#ffc220" />
              <circle cx="29.07" cy="10.93" r="2" fill="#ffc220" />
            </g>
          </svg>
        </WalmartLogo>
        <PickupDelivery>
          <PickupIcon>
            <MapPin color="#0071dc" size={24} />
          </PickupIcon>
          <PickupText>
            <PickupTitle>Pickup or delivery?</PickupTitle>
            <PickupLocation>Sacramento, 95829 · Sacramento Supe...</PickupLocation>
          </PickupText>
          <DropdownIcon>
            <ChevronDown color="#fff" size={22} />
          </DropdownIcon>
        </PickupDelivery>
      </LogoContainer>
      <CenterSection>
        <SearchBarContainer onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search everything at Walmart online and in store"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit">
            <SearchIcon color="#003087" size={28} />
          </SearchButton>
        </SearchBarContainer>
      </CenterSection>
      <RightSection>
        <RightItem to="/my-items">
          <Heart size={24} />
          <span style={{ fontWeight: 700 }}>Reorder</span>
          <span>My Items</span>
        </RightItem>
        <DropdownContainer ref={dropdownRef}>
          {userFirstName ? (
            <RightButton type="button" style={{ fontWeight: 700, fontSize: 18 }}>
              <User size={24} />
              {userFirstName}
            </RightButton>
          ) : (
            <RightButton type="button" onClick={() => setDropdownOpen((v) => !v)}>
              <User size={24} />
              <span style={{ fontWeight: 700 }}>Sign In</span>
              <span>Account</span>
            </RightButton>
          )}
          {!userFirstName && dropdownOpen && (
            <DropdownMenu>
              <DropdownButton onClick={() => { setDropdownOpen(false); navigate('/auth'); }}>
                Sign in or create account
              </DropdownButton>
              <DropdownDivider />
              <DropdownItem>
                <span role="img" aria-label="language">🌐</span> Language | English
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <span role="img" aria-label="history">🗂️</span> Purchase History
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <WalmartPlusLogo>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="none" />
                    <g>
                      <circle cx="10" cy="3.5" r="1" fill="#ffc220" />
                      <circle cx="10" cy="16.5" r="1" fill="#ffc220" />
                      <circle cx="3.5" cy="10" r="1" fill="#ffc220" />
                      <circle cx="16.5" cy="10" r="1" fill="#ffc220" />
                      <circle cx="5.47" cy="5.47" r="1" fill="#ffc220" />
                      <circle cx="14.53" cy="14.53" r="1" fill="#ffc220" />
                      <circle cx="5.47" cy="14.53" r="1" fill="#ffc220" />
                      <circle cx="14.53" cy="5.47" r="1" fill="#ffc220" />
                    </g>
                  </svg>
                  Walmart+
                </WalmartPlusLogo>
              </DropdownItem>
            </DropdownMenu>
          )}
        </DropdownContainer>
        <RightItem to="/cart">
          <ShoppingCart size={28} />
          <CartPrice>$0.00</CartPrice>
        </RightItem>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar; 