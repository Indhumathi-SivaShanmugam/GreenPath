import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import './App.css';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import { supabase } from './supabaseClient';
import CategoryPage from './components/CategoryPage';

import GreenPathLanding from './components/GreenPathLanding'; 

// Entry page: email/phone input
function AuthEntry() {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Try to sign in with a dummy password to check if user exists
    let exists = false;
    let errMsg = '';
    const payload = identifier.includes('@')
      ? { email: identifier, password: 'dummy-password' }
      : { phone: identifier, password: 'dummy-password' };
    const { error: signInError } = await supabase.auth.signInWithPassword(payload);
    if (signInError) {
      if (
        signInError.message.toLowerCase().includes('invalid login credentials') ||
        signInError.status === 400
      ) {
        exists = true;
      } else if (
        signInError.message.toLowerCase().includes('user not found') ||
        signInError.status === 404
      ) {
        exists = false;
      } else {
        errMsg = signInError.message;
      }
    } else {
      exists = true;
    }
    setLoading(false);
    if (errMsg) {
      setError(errMsg);
      return;
    }
    if (exists) {
      navigate('/auth/login', { state: { identifier } });
    } else {
      navigate('/auth/signup', { state: { identifier } });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: 0 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {/* Walmart Spark Logo */}
        <div style={{ marginBottom: 32 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="none" />
            <g>
              <circle cx="32" cy="12" r="4" fill="#ffc220" />
              <circle cx="32" cy="52" r="4" fill="#ffc220" />
              <circle cx="12" cy="32" r="4" fill="#ffc220" />
              <circle cx="52" cy="32" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="18.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="18.5" r="4" fill="#ffc220" />
            </g>
          </svg>
        </div>
        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 16, textAlign: 'center' }}>Sign in or create your account</h1>
        <div style={{ fontSize: 18, color: '#222', marginBottom: 32, textAlign: 'center', maxWidth: 420 }}>
          Not sure if you have an account? Enter your phone number or email and we'll check for you.
        </div>
        <form style={{ width: 380, maxWidth: '90vw', margin: '0 auto', textAlign: 'left' }} onSubmit={handleContinue}>
          <label htmlFor="auth-identifier" style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, display: 'block' }}>Phone number or email</label>
          <input id="auth-identifier" type="text" value={identifier} onChange={e => setIdentifier(e.target.value)} style={{ width: '100%', fontSize: 22, border: '3px solid #222', borderRadius: 8, padding: '18px 16px', marginBottom: 10, marginTop: 4, boxSizing: 'border-box' }} required />
          <div style={{ fontSize: 15, color: '#222', marginBottom: 24 }}>
            Securing your personal information is our priority.<br />
            <a href="#" style={{ color: '#0071dc', textDecoration: 'underline' }}>See our privacy measures.</a>
          </div>
          {error && <div style={{ color: '#d32f2f', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ width: '100%', background: '#0071dc', color: '#fff', fontWeight: 700, fontSize: 22, border: 'none', borderRadius: 32, padding: '16px 0', marginTop: 8, cursor: 'pointer' }} disabled={loading}>
            {loading ? 'Checking...' : 'Continue'}
          </button>
        </form>
      </div>
      {/* Footer (same as before) */}
      <footer style={{ width: '100%', background: 'transparent', textAlign: 'center', fontSize: 15, color: '#444', padding: '32px 0 16px 0', borderTop: '1px solid #eee', marginTop: 32 }}>
        <div style={{ marginBottom: 8 }}>
          © 2025 Walmart. All Rights Reserved.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Give feedback</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>CA Privacy Rights</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Your Privacy Choices</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Notice at Collection</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Request My Personal Information</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Delete Account</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>California Supply Chains Act</a>
        </div>
      </footer>
    </div>
  );
}

// Login page: password input
function AuthLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const identifier = location.state?.identifier || '';
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = identifier.includes('@')
      ? { email: identifier, password }
      : { phone: identifier, password };
    const { error: loginError } = await supabase.auth.signInWithPassword(payload);
    setLoading(false);
    if (loginError) {
      setError(loginError.message);
    } else {
      // Redirect to account or home page after login
      navigate('/');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: 0 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ marginBottom: 32 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="none" />
            <g>
              <circle cx="32" cy="12" r="4" fill="#ffc220" />
              <circle cx="32" cy="52" r="4" fill="#ffc220" />
              <circle cx="12" cy="32" r="4" fill="#ffc220" />
              <circle cx="52" cy="32" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="18.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="18.5" r="4" fill="#ffc220" />
            </g>
          </svg>
        </div>
        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 16, textAlign: 'center' }}>Sign in to your account</h1>
        <div style={{ fontSize: 18, color: '#222', marginBottom: 32, textAlign: 'center', maxWidth: 420 }}>
          {identifier}
        </div>
        <form style={{ width: 380, maxWidth: '90vw', margin: '0 auto', textAlign: 'left' }} onSubmit={handleLogin}>
          <label htmlFor="auth-password" style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, display: 'block' }}>Password</label>
          <input id="auth-password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', fontSize: 22, border: '3px solid #222', borderRadius: 8, padding: '18px 16px', marginBottom: 10, marginTop: 4, boxSizing: 'border-box' }} required />
          {error && <div style={{ color: '#d32f2f', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ width: '100%', background: '#0071dc', color: '#fff', fontWeight: 700, fontSize: 22, border: 'none', borderRadius: 32, padding: '16px 0', marginTop: 8, cursor: 'pointer' }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <button
          style={{ marginTop: 24, color: '#0071dc', background: 'none', border: 'none', fontSize: 18, textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => navigate('/auth/signup', { state: { identifier } })}
        >
          Create account
        </button>
      </div>
    </div>
  );
}

// Signup page: create account form
function AuthSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const identifier = location.state?.identifier || '';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [marketing, setMarketing] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = identifier.includes('@')
      ? { email: identifier, password, options: { data: { first_name: firstName, last_name: lastName, marketing_opt_in: marketing } } }
      : { phone: identifier, password, options: { data: { first_name: firstName, last_name: lastName, marketing_opt_in: marketing } } };
    const { error: signupError } = await supabase.auth.signUp(payload);
    setLoading(false);
    if (signupError) {
      setError(signupError.message);
    } else {
      // Redirect to home or show verification
      navigate('/');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: 0 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ marginBottom: 32 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="none" />
            <g>
              <circle cx="32" cy="12" r="4" fill="#ffc220" />
              <circle cx="32" cy="52" r="4" fill="#ffc220" />
              <circle cx="12" cy="32" r="4" fill="#ffc220" />
              <circle cx="52" cy="32" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="18.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="18.5" cy="45.5" r="4" fill="#ffc220" />
              <circle cx="45.5" cy="18.5" r="4" fill="#ffc220" />
            </g>
          </svg>
        </div>
        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 16, textAlign: 'center' }}>Create your Walmart account</h1>
        <div style={{ fontSize: 18, color: '#222', marginBottom: 16, textAlign: 'center', maxWidth: 420 }}>
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4, textAlign: 'left' }}>Email</div>
          <span style={{ fontSize: 17 }}>{identifier}</span>
          <span style={{ marginLeft: 12, color: '#0071dc', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/auth')}>Change</span>
        </div>
        <form style={{ width: 380, maxWidth: '90vw', margin: '0 auto', textAlign: 'left' }} onSubmit={handleSignup}>
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>First name</div>
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} style={{ width: '100%', fontSize: 20, border: '2px solid #222', borderRadius: 8, padding: '14px 12px', marginBottom: 16, marginTop: 2, boxSizing: 'border-box' }} required />
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Last name</div>
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: '100%', fontSize: 20, border: '2px solid #222', borderRadius: 8, padding: '14px 12px', marginBottom: 16, marginTop: 2, boxSizing: 'border-box' }} required />
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Phone number</div>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', fontSize: 20, border: '2px solid #222', borderRadius: 8, padding: '14px 12px', marginBottom: 16, marginTop: 2, boxSizing: 'border-box' }} required={!identifier.includes('@')} />
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Create a password</div>
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', fontSize: 20, border: '2px solid #222', borderRadius: 8, padding: '14px 12px', boxSizing: 'border-box' }} required />
            <span style={{ position: 'absolute', right: 12, top: 12, color: '#0071dc', cursor: 'pointer', fontWeight: 500 }} onClick={() => setShowPassword(v => !v)}>{showPassword ? 'Hide' : 'Show'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} style={{ width: 22, height: 22, marginRight: 10 }} />
            <span style={{ fontWeight: 600, fontSize: 16 }}>Send me emails about new arrivals, hot items, daily savings and more.</span>
          </div>
          <div style={{ fontSize: 14, color: '#222', marginBottom: 18 }}>
            By clicking Continue, you acknowledge you have read and agreed to our <a href="#" style={{ color: '#0071dc', textDecoration: 'underline' }}>Terms of Use</a> and <a href="#" style={{ color: '#0071dc', textDecoration: 'underline' }}>Privacy Policy</a>. Message and data rates may apply. View our <a href="#" style={{ color: '#0071dc', textDecoration: 'underline' }}>Mobile Alerts Terms</a>.
          </div>
          {error && <div style={{ color: '#d32f2f', marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ width: '100%', background: '#0071dc', color: '#fff', fontWeight: 700, fontSize: 22, border: 'none', borderRadius: 32, padding: '16px 0', marginTop: 8, cursor: 'pointer' }} disabled={loading}>
            {loading ? 'Creating account...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}

const greenPathProducts = [
  {
    name: "Cloth Diaper Rental – ReDiaper",
    emissions: 0.05,
    emissionsSplit: {
      laundry: 0.03,
      logistics: 0.015,
      packaging: 0.005
    },
    price: 1500,
    description: "Stylish bamboo-cotton reusable set; weekly eco-washing pickup, compostable shipping",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "EcoCompute ARM Laptop",
    emissions: 80,
    emissionsSplit: {
      manufacture: 60,
      transport: 12,
      packaging: 8
    },
    price: 35999,
    description: "Lightweight ARM design, efficient battery, aluminum chassis",
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Wooden Pacifier – WoodPads",
    emissions: 0.18,
    emissionsSplit: {
      woodMilling: 0.1,
      assembly: 0.05,
      packaging: 0.03
    },
    price: 600,
    description: "Sustainably-harvested beechwood, hand-finished, reusable cotton pouch",
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "CorkStyle Hybrid Belt",
    emissions: 3.5,
    emissionsSplit: {
      cork: 2,
      leather: 0.8,
      logistics: 0.7
    },
    price: 1399,
    description: "Cork + leather exterior, veg-tanned",
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Bamboo Towels – LeafTissue",
    emissions: 0.7,
    emissionsSplit: {
      farming: 0.25,
      transport: 0.3,
      packaging: 0.15
    },
    price: 280,
    description: "Certified organic bamboo, softer with extra layers",
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Apple – Kashmir Valley (ZeroCarbon Fruits)",
    emissions: 0.9,
    emissionsSplit: {
      farming: 0.4,
      transport: 0.3,
      packaging: 0.2
    },
    price: 275,
    description: "Shipped by eco-rail, reusable crates, shorter cold-chain",
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
  }
];

const HeroSection = styled.section`
  background: linear-gradient(90deg, #43a047 60%, #b2dfdb 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem 2.5rem 2rem;
  border-radius: 16px;
  margin: 2rem auto 2.5rem auto;
  max-width: 1200px;
  min-height: 220px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`;
const HeroText = styled.div`
  flex: 1;
`;
const HeroTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;
const HeroButton = styled.button`
  background: #ffc220;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  margin-top: 1rem;
  &:hover {
    background: #ffd966;
  }
`;
const HeroImage = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-left: 2rem;
  background: #fff;
  @media (max-width: 900px) {
    margin: 2rem 0 0 0;
  }
`;
const ScanSection = styled.section`
  background: linear-gradient(90deg, #fffde7 60%, #ffe082 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67,160,71,0.08);
  margin: 2.5rem auto;
  max-width: 700px;
  padding: 2rem 2rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ScanTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 800;
  color: #43a047;
  margin-bottom: 0.5rem;
`;
const ScanDesc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;
const ScanButton = styled.button`
  background: #43a047;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(67,160,71,0.08);
  margin-bottom: 1.5rem;
  transition: background 0.2s;
  &:hover {
    background: #388e3c;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;
const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;
const Price = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #0071dc;
  margin-bottom: 0.3rem;
`;
const Desc = styled.p`
  font-size: 0.98rem;
  color: #333;
  margin-bottom: 0.5rem;
`;
const GreenBadge = styled.span`
  background: #e6f7e6;
  color: #228b22;
  font-size: 0.93rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.15rem 0.6rem;
  margin-bottom: 0.4rem;
  margin-right: 0.5rem;
`;
const Emissions = styled.div`
  font-size: 0.95rem;
  color: #228b22;
  margin-bottom: 0.1rem;
`;

function GreenPathPage() {
  return (
    <div>
      <HeroSection>
        <HeroText>
          <HeroTitle>Choose a Greener Path</HeroTitle>
          <HeroSubtitle>
            Shop products with lower carbon emissions and make a positive impact on the planet. Join the GreenPath movement today!
          </HeroSubtitle>
          <HeroButton>Shop GreenPath →</HeroButton>
        </HeroText>
        <HeroImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="GreenPath Hero" />
      </HeroSection>
      <ScanSection>
        <ScanTitle>In-Store Feature: Scan to Know CO₂ Emission</ScanTitle>
        <ScanDesc>
          Scan here to know the CO₂ emission of the product in front of you. Just tap the button below and point your camera at the QR code on the product!
        </ScanDesc>
        <ScanButton>Scan QR Code</ScanButton>
      </ScanSection>
      <Grid>
        {greenPathProducts.map((p, i) => (
          <Card key={i}>
            <Img src={p.image} alt={p.name} />
            <GreenBadge>GreenPath</GreenBadge>
            <Name>{p.name}</Name>
            <Price>₹{p.price.toLocaleString()}</Price>
            <Desc>{p.description}</Desc>
            <Emissions>CO₂: {p.emissions} kg</Emissions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <SecondaryNavbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/greenpath" element={<GreenPathLanding />} />
            <Route path="/greenpath/products" element={<ProductListing />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/auth" element={<AuthEntry />} />
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/signup" element={<AuthSignup />} />
            {/* Voice assistant/GreenPathPage route from pulled code, keep both */}
            <Route path="/greenpath-voice" element={<GreenPathPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 