import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Info, Gift, Camera, QrCode, CheckCircle } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';
import VoiceAssistant from './VoiceAssistant';

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(90deg, #43a047 60%, #b2dfdb 100%);
  color: white;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 2.5rem 3rem 2.5rem 2rem;
  border-radius: 16px;
  margin: 2rem auto 2.5rem auto;
  max-width: 1200px;
  min-height: 260px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled(Link)`
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
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: #ffd966;
  }
`;

const HeroImage = styled.img`
  width: 220px;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
  margin-left: 2rem;
  background: #fff;
  @media (max-width: 900px) {
    margin: 2rem 0 0 0;
  }
`;

// Grids Section
const GridsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
`;

const GridCard = styled(Link)`
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
  position: relative;
  text-decoration: none;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 4px 16px rgba(67,160,71,0.18);
  }
`;

const GridTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const GridDesc = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const GridIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  color: #43a047;
`;

// Product Grid Section
const ProductSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(Link)`
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 320px;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 4px 16px rgba(67,160,71,0.18);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0 0.25rem 0;
  color: #222;
  text-align: center;
`;

const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #43a047;
  margin-bottom: 0.5rem;
`;

// Example product data (reuse from ProductListing)
const products = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop',
    co2Emissions: 0.8,
  },
  {
    id: '2',
    name: 'Fresh Milk',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop',
    co2Emissions: 1.2,
  },
  {
    id: '3',
    name: 'Organic Apples',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=400&fit=crop',
    co2Emissions: 0.6,
  },
  {
    id: '4',
    name: 'Whole Grain Bread',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    co2Emissions: 0.9,
  },
  {
    id: '5',
    name: 'Organic Tomatoes',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&h=400&fit=crop',
    co2Emissions: 0.7,
  },
  {
    id: '6',
    name: 'Free Range Eggs',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1569288063648-5bb845da6e2a?w=600&h=400&fit=crop',
    co2Emissions: 1.5,
  }
];

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
  font-size: 1.5rem;
  font-weight: 800;
  color: #43a047;
  margin-bottom: 0.5rem;
`;
const ScanDesc = styled.p`
  font-size: 1.1rem;
  color: #333;
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
const ScanResult = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #0071dc;
  word-break: break-all;
`;

const ScanIconWrapper = styled.div`
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(67,160,71,0.10);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem auto;
`;
const ScanIllustration = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto 1.2rem auto;
  display: block;
`;

const BigScanButton = styled.button`
  background: #fff;
  border: 3px solid #43a047;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(67,160,71,0.12);
  cursor: pointer;
  margin: 1.2rem auto 0 auto;
  transition: background 0.2s, border 0.2s;
  &:hover {
    background: #e8f5e9;
    border-color: #388e3c;
  }
`;

const ScanCard = styled.div`
  background: linear-gradient(135deg, #e8f5e9 60%, #fffde7 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(67,160,71,0.10);
  border: 2.5px solid #43a047;
  max-width: 900px;
  margin: 2.5rem auto 2.5rem auto;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;
const ScanContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ScanSubtitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.08rem;
  color: #388e3c;
  font-weight: 600;
  margin-bottom: 1.1rem;
  gap: 0.5rem;
`;
const AnimatedScanButton = styled(BigScanButton)`
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(67,160,71,0.18); }
    70% { box-shadow: 0 0 0 16px rgba(67,160,71,0.01); }
    100% { box-shadow: 0 0 0 0 rgba(67,160,71,0.18); }
  }
`;

// --- Add new styled components for widgety look ---
const ScanWidgetCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(67,160,71,0.10);
  width: 320px;
  height: 320px;
  min-width: 260px;
  min-height: 260px;
  max-width: 340px;
  max-height: 340px;
  margin: 0 0 0 2rem;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 900px) {
    margin: 2rem auto 0 auto;
    width: 90vw;
    max-width: 340px;
    height: auto;
  }
`;
const ScanWidgetTitle = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: #43a047;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
const ScanWidgetInfoIcon = styled(Info)`
  cursor: pointer;
  color: #888;
`;
interface ActiveProp {
  active?: boolean;
}

const ScanWidgetScanArea = styled.div<ActiveProp>`
  width: 180px;
  height: 180px;
  background: #f1f8e9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem 0 1.2rem 0;
  box-shadow: 0 2px 12px rgba(67,160,71,0.08);
  position: relative;
  border: 2.5px dashed #43a047;
  transition: border-color 0.2s;
  ${(props: ActiveProp) => props.active ? 'border-color: #ffc220;' : ''}
`;
const ScanWidgetResult = styled.div`
  background: #e8f5e9;
  color: #222;
  border-radius: 8px;
  padding: 0.7rem 1.1rem;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(67,160,71,0.08);
`;
const ScanWidgetScanButton = styled.button<ActiveProp>`
  background: #43a047;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(67,160,71,0.12);
  cursor: pointer;
  margin: 0.5rem auto 0 auto;
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  outline: none;
  &:hover {
    background: #388e3c;
    box-shadow: 0 6px 20px rgba(67,160,71,0.18);
  }
  ${(props: ActiveProp) => props.active ? `animation: pulse 1.5s infinite;` : ''}
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(67,160,71,0.18); }
    70% { box-shadow: 0 0 0 16px rgba(67,160,71,0.01); }
    100% { box-shadow: 0 0 0 0 rgba(67,160,71,0.18); }
  }
`;
const ScanWidgetStopButton = styled.button`
  background: #ffc220;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.7rem;
  box-shadow: 0 2px 8px rgba(67,160,71,0.08);
  &:hover {
    background: #ffd966;
  }
`;

const GreenPathLanding: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const html5QrCodeRef = useRef<any>(null);

  const startScan = async () => {
    setScanResult(null);
    setScanning(true);
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
    }
    const html5QrCode = new Html5Qrcode('qr-reader');
    html5QrCodeRef.current = html5QrCode;
    try {
      await html5QrCode.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText: string) => {
          setScanResult(decodedText);
          html5QrCode.stop();
          setScanning(false);
        },
        (error: any) => {
          // ignore scan errors
        }
      );
    } catch (err) {
      setScanResult('Camera access denied or not available.');
      setScanning(false);
    }
  };

  const stopScan = () => {
    setScanning(false);
    if (html5QrCodeRef.current) {
      html5QrCodeRef.current.stop();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>
          <HeroTitle>Choose a Greener Path</HeroTitle>
          <HeroSubtitle>
            Shop products with lower carbon emissions and make a positive impact on the planet. Join the GreenPath movement today!
          </HeroSubtitle>
          <HeroButton to="/greenpath/products">
            <Leaf size={22} /> Shop GreenPath <ArrowRight size={18} />
          </HeroButton>
        </HeroText>
        <HeroImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" alt="GreenPath Hero" />
      </HeroSection>

      {/* --- Centered In-Store Scan Section --- */}
      <div style={{
        background: 'linear-gradient(90deg, #fffde7 60%, #ffe082 100%)',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(67,160,71,0.08)',
        margin: '2.5rem auto',
        maxWidth: 700,
        padding: '2rem 2rem 2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '1.7rem',
          fontWeight: 800,
          color: '#43a047',
          marginBottom: '0.5rem',
        }}>
          In-Store Feature: Scan to Know CO₂ Emission
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#333',
          marginBottom: '1.5rem',
        }}>
          Scan here to know the CO₂ emission of the product in front of you. Just tap the button below and point your camera at the QR code on the product!
        </p>
        <ScanWidgetCard>
          <ScanWidgetTitle>
            <QrCode size={24} color="#43a047" />
            Scan Product QR
            <span title="Camera is only used for QR scanning. No data is stored.">
              <ScanWidgetInfoIcon size={20} />
            </span>
          </ScanWidgetTitle>
          <ScanWidgetScanArea active={scanning} >
            <div id="qr-reader" ref={qrRef} style={{ width: scanning ? 160 : 0, height: scanning ? 160 : 0, transition: 'all 0.3s' }} />
            {!scanning && <QrCode size={60} color="#bdbdbd" style={{opacity:0.4}} />}
          </ScanWidgetScanArea>
          <ScanWidgetScanButton onClick={startScan} active={scanning} title="Scan QR Code" disabled={scanning}>
            <Camera size={50} color="#fff" />
          </ScanWidgetScanButton>
          {scanning && (
            <ScanWidgetStopButton onClick={stopScan}>Stop Scanning</ScanWidgetStopButton>
          )}
          {scanResult && (
            <ScanWidgetResult>
              <CheckCircle size={20} color="#43a047" />
              {scanResult}
            </ScanWidgetResult>
          )}
        </ScanWidgetCard>
      </div>

      {/* Grids Section */}
      <GridsSection>
        <GridCard to="/greenpath">
          <GridTitle><Leaf size={20} /> Why GreenPath?</GridTitle>
          <GridDesc>
            Products with the GreenPath label have lower carbon emissions. Make eco-friendly choices and help reduce your carbon footprint.
          </GridDesc>
          <GridIcon><Info size={38} /></GridIcon>
        </GridCard>
        <GridCard to="/greenpath">
          <GridTitle><Gift size={20} /> Discounts for Green Choices</GridTitle>
          <GridDesc>
            Enjoy exclusive discounts and rewards when you choose GreenPath products. Save money and the planet!
          </GridDesc>
          <GridIcon><Gift size={38} /></GridIcon>
        </GridCard>
        <GridCard to="/greenpath">
          <GridTitle><Leaf size={20} /> Learn About Carbon Emissions</GridTitle>
          <GridDesc>
            Discover how your shopping choices impact the environment and how GreenPath helps you make better decisions.
          </GridDesc>
          <GridIcon><Info size={38} /></GridIcon>
        </GridCard>
      </GridsSection>

      {/* Product Grid Section */}
      <ProductSection>
        <h2 style={{fontWeight: 700, fontSize: '1.4rem', marginBottom: 16}}>Featured GreenPath Products</h2>
        <ProductGrid>
          {products.slice(0, 4).map(product => (
            <ProductCard to="/greenpath/products" key={product.id} title={product.name}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <div style={{color: '#43a047', fontSize: '0.95rem', marginTop: 4}}>
                CO₂: {product.co2Emissions}kg
              </div>
            </ProductCard>
          ))}
        </ProductGrid>
        <div style={{textAlign: 'center', marginTop: 24}}>
          <HeroButton to="/greenpath/products">
            <Leaf size={20} /> See All GreenPath Products <ArrowRight size={16} />
          </HeroButton>
        </div>
      </ProductSection>
      {/* Voice Assistant in bottom right corner */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
        <VoiceAssistant />
      </div>
    </div>
  );
};

export default GreenPathLanding; 