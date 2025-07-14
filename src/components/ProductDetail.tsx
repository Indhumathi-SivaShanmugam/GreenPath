import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Leaf, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

// Copy the products array from ProductListing
const products = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop',
    description: 'Fresh organic bananas grown without synthetic pesticides or fertilizers. These bananas are sourced from sustainable farms that prioritize soil health and biodiversity.',
    co2Emissions: 0.8,
    farmingEmissions: 0.5,
    transportEmissions: 0.3,
    features: [
      'Fresh produce',
      'Easy-to-peel bananas',
      'Can be enjoyed raw or cooked',
      'Can elevate dessert and breakfast recipes'
    ]
  },
  {
    id: '2',
    name: 'Fresh Milk',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop',
    description: 'Premium whole milk from grass-fed cows. This milk is produced using sustainable farming practices and minimal processing to preserve natural nutrients.',
    co2Emissions: 1.2,
    farmingEmissions: 0.8,
    transportEmissions: 0.4,
    features: [
      'Grass-fed cows',
      'Sustainable farming',
      'Minimal processing',
      'Rich in nutrients'
    ]
  },
  {
    id: '3',
    name: 'Organic Apples',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=400&fit=crop',
    description: 'Crisp organic apples grown in pesticide-free orchards. These apples are hand-picked and carefully selected for optimal freshness and flavor.',
    co2Emissions: 0.6,
    farmingEmissions: 0.4,
    transportEmissions: 0.2,
    features: [
      'Pesticide-free orchards',
      'Hand-picked',
      'Optimal freshness and flavor'
    ]
  },
  {
    id: '4',
    name: 'Whole Grain Bread',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    description: 'Artisan whole grain bread made with organic flour and natural ingredients. This bread is baked fresh daily using traditional methods.',
    co2Emissions: 0.9,
    farmingEmissions: 0.6,
    transportEmissions: 0.3,
    features: [
      'Organic flour',
      'Natural ingredients',
      'Baked fresh daily',
      'Traditional methods'
    ]
  },
  {
    id: '5',
    name: 'Organic Tomatoes',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&h=400&fit=crop',
    description: 'Vine-ripened organic tomatoes grown in nutrient-rich soil. These tomatoes are harvested at peak ripeness for maximum flavor and nutrition.',
    co2Emissions: 0.7,
    farmingEmissions: 0.5,
    transportEmissions: 0.2,
    features: [
      'Vine-ripened',
      'Nutrient-rich soil',
      'Peak ripeness',
      'Maximum flavor and nutrition'
    ]
  },
  {
    id: '6',
    name: 'Free Range Eggs',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1569288063648-5bb845da6e2a?w=600&h=400&fit=crop',
    description: 'Free-range eggs from hens that roam freely on organic pastures. These eggs are rich in omega-3 fatty acids and essential nutrients.',
    co2Emissions: 1.5,
    farmingEmissions: 1.0,
    transportEmissions: 0.5,
    features: [
      'Free-range hens',
      'Organic pastures',
      'Rich in omega-3',
      'Essential nutrients'
    ]
  }
];

const Container = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
`;
const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #0071dc;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1.5rem;
  &:hover { text-decoration: underline; }
`;
const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductImg = styled.img`
  width: 320px;
  height: 320px;
  object-fit: contain;
  border-radius: 12px;
  background: #f6f6f6;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0071dc;
  margin-bottom: 0.5rem;
`;
const AddButton = styled.button`
  background: #0071dc;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #005fa3; }
`;
const SubscribeButton = styled.button`
  background: #fff;
  color: #0071dc;
  border: 2px solid #0071dc;
  border-radius: 50px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover { background: #f6f6f6; }
`;
const Section = styled.div`
  background: #f6f6f6;
  border-radius: 10px;
  padding: 1.5rem 1rem;
`;
const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const FeaturesList = styled.ul`
  margin: 1rem 0 0 1.5rem;
  color: #444;
`;
const CarbonSection = styled(Section)`
  margin-top: 1.5rem;
`;
const AlternativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;
const AltCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  padding: 0.75rem 0.5rem 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AltImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;
const AltName = styled.div`
  font-size: 0.98rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.25rem;
`;
const AltCO2 = styled.div`
  color: #43a047;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [aboutOpen, setAboutOpen] = useState(true);

  if (!product) {
    return (
      <Container>
        <BackLink to="/"> <ArrowLeft size={20} style={{marginRight: 8}} /> Back to products </BackLink>
        <div>Product not found.</div>
      </Container>
    );
  }

  // Find eco alternatives
  const alternatives = products.filter(p => p.co2Emissions < product.co2Emissions && p.id !== product.id)
    .sort((a, b) => a.co2Emissions - b.co2Emissions)
    .slice(0, 3);

  return (
    <Container>
      <BackLink to="/"> <ArrowLeft size={20} style={{marginRight: 8}} /> Back to products </BackLink>
      <DetailGrid>
        <ImageSection>
          <ProductImg src={product.image} alt={product.name} />
        </ImageSection>
        <InfoSection>
          <Title>{product.name}</Title>
          <Price>${product.price.toFixed(2)}</Price>
          <AddButton><ShoppingCart size={20} style={{marginRight: 8}} /> Add to Cart</AddButton>
          <SubscribeButton>Subscribe</SubscribeButton>
          <Section>
            <SectionHeader onClick={() => setAboutOpen(o => !o)}>
              <span style={{fontWeight: 600}}>About this item</span>
              {aboutOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </SectionHeader>
            {aboutOpen && (
              <div>
                <p style={{margin: '1rem 0 0.5rem 0'}}>{product.description}</p>
                <FeaturesList>
                  {product.features && product.features.map((f, i) => <li key={i}>{f}</li>)}
                </FeaturesList>
              </div>
            )}
          </Section>
          <CarbonSection>
            <div style={{fontWeight: 600, marginBottom: 8}}>CO₂ Emissions Breakdown</div>
            <div><strong>Total:</strong> {product.co2Emissions}kg CO₂</div>
            <div>Farming: {product.farmingEmissions}kg CO₂</div>
            <div>Transport: {product.transportEmissions}kg CO₂</div>
            {alternatives.length > 0 && (
              <div style={{marginTop: 16}}>
                <div style={{fontWeight: 600, marginBottom: 8}}>Eco Alternatives</div>
                <AlternativesGrid>
                  {alternatives.map(alt => (
                    <AltCard key={alt.id}>
                      <AltImage src={alt.image} alt={alt.name} />
                      <AltName>{alt.name}</AltName>
                      <AltCO2>{alt.co2Emissions}kg CO₂</AltCO2>
                      <AddButton onClick={() => navigate(`/product/${alt.id}`)}>View</AddButton>
                    </AltCard>
                  ))}
                </AlternativesGrid>
              </div>
            )}
          </CarbonSection>
        </InfoSection>
      </DetailGrid>
    </Container>
  );
};

export default ProductDetail; 