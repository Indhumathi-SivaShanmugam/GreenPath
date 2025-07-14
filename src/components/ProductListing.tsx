import React, { useState } from 'react';
import styled from 'styled-components';
import { ShoppingCart, Heart, Leaf, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  co2Emissions: number;
  farmingEmissions: number;
  transportEmissions: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop',
    description: 'Fresh organic bananas grown without synthetic pesticides or fertilizers. These bananas are sourced from sustainable farms that prioritize soil health and biodiversity.',
    co2Emissions: 0.8,
    farmingEmissions: 0.5,
    transportEmissions: 0.3
  },
  {
    id: '2',
    name: 'Fresh Milk',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop',
    description: 'Premium whole milk from grass-fed cows. This milk is produced using sustainable farming practices and minimal processing to preserve natural nutrients.',
    co2Emissions: 1.2,
    farmingEmissions: 0.8,
    transportEmissions: 0.4
  },
  {
    id: '3',
    name: 'Organic Apples',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=400&fit=crop',
    description: 'Crisp organic apples grown in pesticide-free orchards. These apples are hand-picked and carefully selected for optimal freshness and flavor.',
    co2Emissions: 0.6,
    farmingEmissions: 0.4,
    transportEmissions: 0.2
  },
  {
    id: '4',
    name: 'Whole Grain Bread',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    description: 'Artisan whole grain bread made with organic flour and natural ingredients. This bread is baked fresh daily using traditional methods.',
    co2Emissions: 0.9,
    farmingEmissions: 0.6,
    transportEmissions: 0.3
  },
  {
    id: '5',
    name: 'Organic Tomatoes',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&h=400&fit=crop',
    description: 'Vine-ripened organic tomatoes grown in nutrient-rich soil. These tomatoes are harvested at peak ripeness for maximum flavor and nutrition.',
    co2Emissions: 0.7,
    farmingEmissions: 0.5,
    transportEmissions: 0.2
  },
  {
    id: '6',
    name: 'Free Range Eggs',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1569288063648-5bb845da6e2a?w=600&h=400&fit=crop',
    description: 'Free-range eggs from hens that roam freely on organic pastures. These eggs are rich in omega-3 fatty acids and essential nutrients.',
    co2Emissions: 1.5,
    farmingEmissions: 1.0,
    transportEmissions: 0.5
  }
];

const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 2rem;
`;

const Sidebar = styled.aside`
  width: 220px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 180px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SidebarSection = styled.div``;

const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 370px;
  cursor: pointer;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

const HeartIcon = styled(Heart)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  color: #bbb;
  cursor: pointer;
  &:hover {
    color: #0071dc;
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
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

const ProductDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0071dc;
  margin-bottom: 0.5rem;
`;

const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  align-items: center;
`;

const AddButton = styled.button`
  background: #0071dc;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #005fa3;
  }
`;

const CarbonButton = styled.button`
  background: #43a047;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #388e3c;
  }
`;

const ARButton = styled.button`
  background: #00bcd4;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0097a7;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
`;

const CloseButton = styled.button`
  background: #0071dc;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #005fa3;
  }
`;

const AlternativesSection = styled.div`
  margin-top: 1.5rem;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 1rem;
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

const SelectButton = styled.button`
  background: #0071dc;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.3rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #005fa3;
  }
`;

const ProductListing: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [showCarbonModal, setShowCarbonModal] = useState(false);
  const [showARModal, setShowARModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (id: string) => {
    setCart(prev => [...prev, id]);
    alert('Added to cart!');
  };

  const handleShowCarbon = (product: Product) => {
    setSelectedProduct(product);
    setShowCarbonModal(true);
  };

  const handleShowAR = (product: Product) => {
    setSelectedProduct(product);
    setShowARModal(true);
  };

  return (
    <Layout>
      <Sidebar>
        <SidebarSection>
          <SidebarTitle>Price</SidebarTitle>
        </SidebarSection>
        <SidebarSection>
          <SidebarTitle>Brand</SidebarTitle>
        </SidebarSection>
        <SidebarSection>
          <SidebarTitle>Special Offers</SidebarTitle>
        </SidebarSection>
        <SidebarSection>
          <SidebarTitle>Customer Rating</SidebarTitle>
        </SidebarSection>
      </Sidebar>
      <ProductGrid>
        {products.map(product => (
          <CardLink to={`/product/${product.id}`} key={product.id} tabIndex={-1}>
            <Card onClick={e => e.stopPropagation()}>
              <HeartIcon size={22} />
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductDesc>{product.description}</ProductDesc>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <CardActions>
                <AddButton onClick={e => { e.preventDefault(); e.stopPropagation(); handleAddToCart(product.id); }}>
                  <ShoppingCart size={18} /> Add
                </AddButton>
                <CarbonButton onClick={e => { e.preventDefault(); e.stopPropagation(); handleShowCarbon(product); }}>
                  <Leaf size={18} /> Show Carbon Footprint
                </CarbonButton>
                <ARButton onClick={e => { e.preventDefault(); e.stopPropagation(); handleShowAR(product); }}>
                  <Eye size={18} /> AR CO₂ Breakdown
                </ARButton>
              </CardActions>
            </Card>
          </CardLink>
        ))}
      </ProductGrid>

      {/* Carbon Footprint Modal */}
      {showCarbonModal && selectedProduct && (
        <ModalOverlay>
          <ModalContent>
            <h3 style={{fontWeight: 700, fontSize: '1.2rem', marginBottom: 12}}>
              CO₂ Emissions Breakdown
            </h3>
            <div style={{marginBottom: 8}}>
              <strong>Total:</strong> {selectedProduct.co2Emissions}kg CO₂
            </div>
            <div style={{marginBottom: 8}}>
              <span>Farming: {selectedProduct.farmingEmissions}kg CO₂</span>
            </div>
            <div style={{marginBottom: 8}}>
              <span>Transport: {selectedProduct.transportEmissions}kg CO₂</span>
            </div>
            {/* Eco Alternatives */}
            {products.filter(p => p.co2Emissions < selectedProduct.co2Emissions && p.id !== selectedProduct.id).length > 0 && (
              <AlternativesSection>
                <h4 style={{fontWeight: 600, marginBottom: 8}}>Eco Alternatives</h4>
                <AlternativesGrid>
                  {products.filter(p => p.co2Emissions < selectedProduct.co2Emissions && p.id !== selectedProduct.id)
                    .sort((a, b) => a.co2Emissions - b.co2Emissions)
                    .slice(0, 3)
                    .map((alt) => (
                      <AltCard key={alt.id}>
                        <AltImage src={alt.image} alt={alt.name} />
                        <AltName>{alt.name}</AltName>
                        <AltCO2>{alt.co2Emissions}kg CO₂</AltCO2>
                        <SelectButton onClick={() => {
                          setShowCarbonModal(false);
                          alert(`You selected: ${alt.name}`);
                        }}>
                          Select
                        </SelectButton>
                      </AltCard>
                    ))}
                </AlternativesGrid>
              </AlternativesSection>
            )}
            <CloseButton onClick={() => setShowCarbonModal(false)}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* AR Modal */}
      {showARModal && selectedProduct && (
        <ModalOverlay>
          <ModalContent>
            <h3 style={{fontWeight: 700, fontSize: '1.2rem', marginBottom: 12}}>
              AR CO₂ Breakdown
            </h3>
            <div style={{marginBottom: 8}}>
              <span>Point your camera at <strong>{selectedProduct.name}</strong> to see real-time CO₂ emissions visualization.</span>
            </div>
            <div style={{marginBottom: 8, background: '#f6f6f6', padding: 12, borderRadius: 8}}>
              <span style={{fontWeight: 600, color: '#43a047', fontSize: '1.1rem'}}>
                {selectedProduct.co2Emissions}kg CO₂
              </span>
            </div>
            <CloseButton onClick={() => setShowARModal(false)}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Layout>
  );
};

export default ProductListing; 