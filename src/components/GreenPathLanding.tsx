import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Info, Gift } from 'lucide-react';

// Hero Section
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
  min-height: 260px;
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

const GreenPathLanding: React.FC = () => {
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
    </div>
  );
};

export default GreenPathLanding; 