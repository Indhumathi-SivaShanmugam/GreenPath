import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import './App.css';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './components/HomePage';
import { supabase } from './supabaseClient';

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

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <SecondaryNavbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<div style={{padding:'4rem',textAlign:'center'}}><h1>Welcome to Walmart</h1><p>This is the main homepage. Click Greenpath in the navigation to explore eco-friendly products!</p></div>} />
            <Route path="/greenpath" element={<HomePage />} />
            <Route path="/greenpath/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/auth" element={<AuthEntry />} />
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/signup" element={<AuthSignup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 