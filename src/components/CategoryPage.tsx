import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { productData } from '../productData';
import { Leaf, ListTree } from 'lucide-react';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/150?text=Product';

const CATEGORY_LABELS: Record<string, string> = {
  homeCare: 'Home & Cleaning',
  groceries: 'Fruits & Vegetables',
  personalCare: 'Personal Hygiene',
  babyProducts: 'Baby Products',
  electronics: 'Electronics & Appliances',
  clothing: 'Clothing & Accessories',
};

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 2.5rem auto 2rem auto;
  padding: 0 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.1rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 320px;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  background: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 0.7rem;
`;
const Name = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  max-height: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  font-size: 1.02rem;
  font-weight: 600;
  color: #0071dc;
  margin-bottom: 0.2rem;
`;
const Desc = styled.p`
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

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [emissionsModal, setEmissionsModal] = useState<{ open: boolean; product: any }>({ open: false, product: null });
  const [alternativesModal, setAlternativesModal] = useState<{ open: boolean; product: any }>({ open: false, product: null });

  // Get all products and their alternatives for the category
  const allProducts = useMemo(() => {
    const mainProducts = (productData as Record<string, any[]>)[categoryName!] || [];
    // Flatten alternatives as individual cards
    const alternatives: any[] = [];
    mainProducts.forEach(prod => {
      if (prod.alternatives && Array.isArray(prod.alternatives)) {
        prod.alternatives.forEach((alt: any) => {
          alternatives.push({ ...alt, isAlternative: true });
        });
      }
    });
    return [...mainProducts, ...alternatives];
  }, [categoryName]);

  const label = CATEGORY_LABELS[categoryName!] || categoryName;

  return (
    <PageContainer>
      <Title>{label}</Title>
      <ProductGrid>
        {allProducts.map((prod, idx) => (
          <Card key={prod.id || prod.name || idx}>
            <Img src={prod.image || PLACEHOLDER_IMG} alt={prod.name} />
            <Name>{prod.name}</Name>
            <Price>₹{prod.price?.toLocaleString?.() ?? prod.price}</Price>
            <Desc>{prod.description}</Desc>
            <IconRow>
              <IconBtn title="CO₂ Emissions Split" onClick={() => setEmissionsModal({ open: true, product: prod })}>
                <Leaf size={20} color="#228b22" />
              </IconBtn>
              <IconBtn title="Alternative Suggestions" onClick={() => setAlternativesModal({ open: true, product: prod })}>
                <ListTree size={20} color="#0071dc" />
              </IconBtn>
            </IconRow>
          </Card>
        ))}
      </ProductGrid>
      <EmissionsModal open={emissionsModal.open} product={emissionsModal.product} onClose={() => setEmissionsModal({ open: false, product: null })} />
      <AlternativesModal open={alternativesModal.open} product={alternativesModal.product} onClose={() => setAlternativesModal({ open: false, product: null })} />
    </PageContainer>
  );
};

export default CategoryPage; 