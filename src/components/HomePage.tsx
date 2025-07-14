import React from 'react';
import styled from 'styled-components';
import { productData } from '../productData';
import { Leaf, ListTree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const products = [
  {
    name: 'EcoCompute ARM Laptop',
    emissions: 80,
    emissionsSplit: { manufacture: 60, transport: 12, packaging: 8 },
    price: 35999,
    description: 'Lightweight ARM design, efficient battery, aluminum chassis',
    green: true,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    area: 'tile1',
  },
  {
    name: 'Bluetooth Headphones',
    price: 2499,
    description: 'Wireless, noise-cancelling, 30h battery',
    green: false,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80',
    area: 'tile2',
  },
  {
    name: 'Cloth Diaper Rental – ReDiaper',
    emissions: 0.05,
    emissionsSplit: { laundry: 0.03, logistics: 0.015, packaging: 0.005 },
    price: 1500,
    description: 'Stylish bamboo-cotton reusable set; weekly eco-washing pickup, compostable shipping',
    green: true,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    area: 'tile3',
  },
  {
    name: 'Smart LED TV 43"',
    price: 18999,
    description: '4K UHD, HDR, built-in streaming',
    green: false,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    area: 'tile4',
  },
  {
    name: 'Wooden Pacifier – WoodPads',
    emissions: 0.18,
    emissionsSplit: { woodMilling: 0.1, assembly: 0.05, packaging: 0.03 },
    price: 600,
    description: 'Sustainably-harvested beechwood, hand-finished, reusable cotton pouch',
    green: true,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    area: 'tile5',
  },
  {
    name: 'CorkStyle Hybrid Belt',
    emissions: 3.5,
    emissionsSplit: { cork: 2, leather: 0.8, logistics: 0.7 },
    price: 1399,
    description: 'Cork + leather exterior, veg-tanned',
    green: true,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    area: 'tile6',
  },
  {
    name: 'Fashion Sneakers',
    price: 1799,
    description: 'Lightweight, breathable, multiple colors',
    green: false,
    image: 'https://images.unsplash.com/photo-1517260911205-8c6f6fa6c24a?auto=format&fit=crop&w=600&q=80', // working image
    area: 'tile7',
  },
  {
    name: 'Bamboo Towels – LeafTissue',
    emissions: 0.7,
    emissionsSplit: { farming: 0.25, transport: 0.3, packaging: 0.15 },
    price: 280,
    description: 'Certified organic bamboo, softer with extra layers',
    green: true,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
    area: 'tile8',
  },
  {
    name: 'Apple – Kashmir Valley (ZeroCarbon Fruits)',
    emissions: 0.9,
    emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.2 },
    price: 275,
    description: 'Shipped by eco-rail, reusable crates, shorter cold-chain',
    green: true,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    area: 'tile9',
  },
  {
    name: 'Wireless Mouse',
    price: 599,
    description: 'Ergonomic, 2.4GHz, 12-month battery',
    green: false,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    area: 'tile10',
  },
  {
    name: 'Instant Pot 6L',
    price: 6999,
    description: '7-in-1 multi-cooker, easy clean',
    green: false,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    area: 'tile11',
  },
];

// Improved Walmart-style grid layout for 11 product cards
const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'tile1 tile1 tile2 tile3'
    'tile4 tile5 tile2 tile6'
    'tile7 tile8 tile9 tile6'
    'tile10 tile11 tile11 tile6';
  grid-template-columns: 2fr 1.2fr 1.2fr 1.2fr;
  grid-template-rows: 220px 180px 180px 180px;
  gap: 1.5rem;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'tile1 tile1'
      'tile2 tile3'
      'tile4 tile5'
      'tile6 tile7'
      'tile8 tile9'
      'tile10 tile11';
    grid-template-rows: repeat(6, 200px);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'tile1'
      'tile2'
      'tile3'
      'tile4'
      'tile5'
      'tile6'
      'tile7'
      'tile8'
      'tile9'
      'tile10'
      'tile11';
    grid-template-rows: repeat(11, 180px);
  }
`;

const Card = styled.div<{area: string}>`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
  position: relative;
  grid-area: ${({area}) => area};
  overflow: hidden;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 110px;
  max-height: 110px;
  object-fit: cover;
  background: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;

const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  max-height: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
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
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
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

// Add type for productData keys
const CATEGORY_MAP: { key: keyof typeof productData; label: string }[] = [
  { key: 'homeCare', label: 'Home & Cleaning' },
  { key: 'groceries', label: 'Fruits & Vegetables' },
  { key: 'personalCare', label: 'Personal Hygiene' },
  { key: 'babyProducts', label: 'Baby Products' },
  { key: 'electronics', label: 'Electronics & Appliances' },
  { key: 'clothing', label: 'Clothing & Accessories' },
];

const PLACEHOLDER_IMG = 'https://via.placeholder.com/150?text=Product';

// Place all styled components above HomePage and modal functions
const CategorySection = styled.section`
  margin: 2.5rem auto 0 auto;
  max-width: 1400px;
  padding: 0 1rem;
`;
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
const CategoryTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
`;
const ShopAllBtn = styled.button`
  background: #0071dc;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0.4rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #005bb5; }
`;
const CategoryRow = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;
const CatCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  max-width: 240px;
  min-height: 320px;
  position: relative;
  overflow: hidden;
`;
const CatImg = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  background: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;
const CatName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  max-height: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CatPrice = styled.div`
  font-size: 1.02rem;
  font-weight: 600;
  color: #0071dc;
  margin-bottom: 0.2rem;
`;
const CatDesc = styled.p`
  font-size: 0.97rem;
  color: #333;
  margin-bottom: 0.5rem;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const IconRow = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: auto;
`;
const IconBtn = styled.button`
  background: #f5f6fa;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s;
  &:hover { background: #e6f7e6; }
`;

// Types for modal props
interface EmissionsModalProps {
  open: boolean;
  onClose: () => void;
  product: any;
}
interface AlternativesModalProps {
  open: boolean;
  onClose: () => void;
  product: any;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  padding: 2rem 2.2rem 1.5rem 2.2rem;
  min-width: 320px;
  max-width: 95vw;
`;
const ModalTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function EmissionsModal({ open, onClose, product }: EmissionsModalProps) {
  if (!open || !product) return null;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{ position: 'relative' }}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <ModalTitle>CO₂ Emissions Breakdown</ModalTitle>
        <div><strong>Total:</strong> {product.emissions} kg</div>
        <ul style={{ margin: '0.7em 0 0 0.5em', padding: 0 }}>
          {product.emissionsSplit && Object.entries(product.emissionsSplit).map(([k, v]: [string, any]) => (
            <li key={k} style={{ fontSize: 15 }}>{k}: {v} kg</li>
          ))}
        </ul>
      </ModalBox>
    </ModalOverlay>
  );
}

function AlternativesModal({ open, onClose, product }: AlternativesModalProps) {
  if (!open || !product) return null;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{ position: 'relative' }}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <ModalTitle>Alternative Suggestions</ModalTitle>
        {product.alternatives && product.alternatives.length > 0 ? (
          <ul style={{ margin: 0, padding: 0 }}>
            {product.alternatives.map((alt: any, i: number) => (
              <li key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600 }}>{alt.name}</div>
                <div style={{ fontSize: 15 }}>{alt.description}</div>
                <div style={{ color: '#228b22', fontSize: 14 }}>CO₂: {alt.emissions} kg</div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No alternatives available.</div>
        )}
      </ModalBox>
    </ModalOverlay>
  );
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [emissionsModal, setEmissionsModal] = useState<{ open: boolean; product: any }>({ open: false, product: null });
  const [alternativesModal, setAlternativesModal] = useState<{ open: boolean; product: any }>({ open: false, product: null });

  return (
    <>
      <Grid>
        {products.map((p, i) => (
          <Card key={i} area={p.area}>
            <Img src={p.image} alt={p.name} />
            {p.green && <GreenBadge>GreenPath</GreenBadge>}
            <Name>{p.name}</Name>
            <Price>₹{p.price.toLocaleString()}</Price>
            <Desc>{p.description}</Desc>
            {p.green && (
              <Emissions>
                CO₂: {p.emissions} kg
              </Emissions>
            )}
          </Card>
        ))}
      </Grid>

      {/* Category sections */}
      {CATEGORY_MAP.map(cat => {
        const catProducts = (productData as Record<string, any[]>)[cat.key]?.slice(0, 5) || [];
        return (
          <CategorySection key={cat.key}>
            <CategoryHeader>
              <CategoryTitle>{cat.label}</CategoryTitle>
              <ShopAllBtn onClick={() => navigate(`/category/${cat.key}`)}>Shop all</ShopAllBtn>
            </CategoryHeader>
            <CategoryRow>
              {catProducts.map((prod: any, idx: number) => (
                <CatCard key={prod.id || idx}>
                  <CatImg src={prod.image || PLACEHOLDER_IMG} alt={prod.name} />
                  <CatName>{prod.name}</CatName>
                  <CatPrice>₹{prod.price?.toLocaleString?.() ?? prod.price}</CatPrice>
                  <CatDesc>{prod.description}</CatDesc>
                  <IconRow>
                    <IconBtn title="CO₂ Emissions Split" onClick={() => setEmissionsModal({ open: true, product: prod })}>
                      <Leaf size={20} color="#228b22" />
                    </IconBtn>
                    <IconBtn title="Alternative Suggestions" onClick={() => setAlternativesModal({ open: true, product: prod })}>
                      <ListTree size={20} color="#0071dc" />
                    </IconBtn>
                  </IconRow>
                </CatCard>
              ))}
            </CategoryRow>
          </CategorySection>
        );
      })}
      <EmissionsModal open={emissionsModal.open} product={emissionsModal.product} onClose={() => setEmissionsModal({ open: false, product: null })} />
      <AlternativesModal open={alternativesModal.open} product={alternativesModal.product} onClose={() => setAlternativesModal({ open: false, product: null })} />
    </>
  );
};

export default HomePage; 