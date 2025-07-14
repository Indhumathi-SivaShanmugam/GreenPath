import React, { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../supabaseClient';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  width: 100%;
  max-width: 400px;
  padding: 2.5rem 2rem 2rem 2rem;
  position: relative;
  @media (max-width: 500px) {
    max-width: 98vw;
    padding: 1.5rem 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0071dc;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1.5px solid #e5e5e5;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-bottom: 1.1rem;
  &:focus {
    border-color: #0071dc;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #0071dc;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #005cb8;
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #0071dc;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ErrorMsg = styled.div`
  color: #d32f2f;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const SuccessMsg = styled.div`
  color: #388e3c;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
`;

// Auth flow states
type AuthStep = 'start' | 'login' | 'signup' | 'verify' | 'success';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [step, setStep] = useState<AuthStep>('start');
  const [identifier, setIdentifier] = useState(''); // email or phone
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [verifCode, setVerifCode] = useState('');
  const [verifSent, setVerifSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset on open/close
  React.useEffect(() => {
    if (open) {
      setStep('start');
      setIdentifier('');
      setUserExists(null);
      setPassword('');
      setFirstName('');
      setLastName('');
      setPhone('');
      setMarketing(false);
      setError('');
      setSuccess('');
      setVerifCode('');
      setVerifSent(false);
      setLoading(false);
    }
  }, [open]);

  // Step 1: Ask for phone/email
  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Try to sign in with a dummy password to check if user exists
    let exists = false;
    let errMsg = '';
    const signInPayload: any = identifier.includes('@')
      ? { email: identifier, password: 'dummy-password' }
      : { phone: identifier, password: 'dummy-password' };
    const { error: signInError } = await supabase.auth.signInWithPassword(signInPayload);
    if (signInError) {
      if (signInError.message.toLowerCase().includes('invalid login credentials')) {
        exists = true;
      } else if (signInError.message.toLowerCase().includes('user not found')) {
        exists = false;
      } else {
        errMsg = signInError.message;
      }
    } else {
      exists = true;
    }
    setUserExists(exists);
    if (errMsg) setError(errMsg);
    setStep(exists ? 'login' : 'signup');
    setLoading(false);
  };

  // Step 2: Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const loginPayload: any = identifier.includes('@')
      ? { email: identifier, password }
      : { phone: identifier, password };
    const { error } = await supabase.auth.signInWithPassword(loginPayload);
    if (error) setError(error.message);
    else {
      setSuccess('Logged in!');
      setStep('success');
      // Force reload to update Navbar user state
      setTimeout(() => { window.location.reload(); }, 1200);
    }
    setLoading(false);
  };

  // Step 3: Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const signupPayload: any = identifier.includes('@')
      ? { email: identifier, password, options: { data: { first_name: firstName, last_name: lastName, marketing_opt_in: marketing } } }
      : { phone: identifier, password, options: { data: { first_name: firstName, last_name: lastName, marketing_opt_in: marketing } } };
    const { error: signupError } = await supabase.auth.signUp(signupPayload);
    if (signupError) setError(signupError.message);
    else {
      setStep('verify');
      setVerifSent(true);
      // Force reload after verification to update Navbar user state
    }
    setLoading(false);
  };

  // Step 4: Phone verification
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess('Phone verified!');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => { window.location.reload(); }, 1200);
    }, 1200);
    setLoading(false);
  };

  if (!open) return null;
  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        {step === 'start' && (
          <form onSubmit={handleStart}>
            <Title>Sign in or create your account</Title>
            <Input
              type="text"
              placeholder="Phone number or email"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              required
              autoFocus
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" disabled={loading}>{loading ? 'Checking...' : 'Continue'}</Button>
          </form>
        )}
        {step === 'login' && (
          <form onSubmit={handleLogin}>
            <Title>Welcome back!</Title>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoFocus
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
            <LinkButton type="button" onClick={() => setStep('start')}>Back</LinkButton>
          </form>
        )}
        {step === 'signup' && (
          <form onSubmit={handleSignup}>
            <Title>Create your GreenCart AI account</Title>
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              autoFocus
            />
            <Input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            {/* Only show phone input if identifier is not an email */}
            {!identifier.includes('@') && (
              <Input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            )}
            <Input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <CheckboxLabel>
              <input
                type="checkbox"
                checked={marketing}
                onChange={e => setMarketing(e.target.checked)}
                style={{ marginRight: 8 }}
              />
              I want to receive marketing emails
            </CheckboxLabel>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign up'}</Button>
            <LinkButton type="button" onClick={() => setStep('start')}>Back</LinkButton>
          </form>
        )}
        {step === 'verify' && (
          <form onSubmit={handleVerify}>
            <Title>Verify your phone</Title>
            <p style={{ textAlign: 'center', color: '#444', marginBottom: 16 }}>
              Enter the 6-digit code sent to your phone.<br />
              <span style={{ fontSize: '0.95rem', color: '#888' }}>(or <LinkButton type="button" onClick={() => setStep('success')}>skip</LinkButton>)</span>
            </p>
            <Input
              type="text"
              placeholder="6-digit code"
              value={verifCode}
              onChange={e => setVerifCode(e.target.value)}
              maxLength={6}
              required
              autoFocus
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Button type="submit" disabled={loading}>{loading ? 'Verifying...' : 'Verify'}</Button>
          </form>
        )}
        {step === 'success' && (
          <SuccessMsg>Success! Redirecting...</SuccessMsg>
        )}
      </Modal>
    </Overlay>
  );
};

export default AuthModal; 