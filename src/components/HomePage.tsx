import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(90deg, #0071dc 60%, #4fc3f7 100%);
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

const DealsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
`;

const DealCard = styled.div<{bg?: string}>`
  background: ${({bg}) => bg || '#fff'};
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
  position: relative;
`;

const DealTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const DealDesc = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const DealImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
`;

const DealLink = styled.a`
  color: #0071dc;
  font-weight: 600;
  text-decoration: none;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const deals = [
  {
    title: 'Smart Apple savings',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #b3e5fc 60%, #e1f5fe 100%)',
    img: 'https://i.imgur.com/1bX5QH6.png',
    link: '#',
  },
  {
    title: 'Walmart DEALS',
    desc: 'Tech up to 40% off',
    bg: 'linear-gradient(135deg, #2196f3 60%, #b3e5fc 100%)',
    img: 'https://i.imgur.com/6RLwA7E.png',
    link: '#',
  },
  {
    title: 'Up to 25% off TVs',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #e3f2fd 60%, #fffde7 100%)',
    img: 'https://i.imgur.com/8zQbQkI.png',
    link: '#',
  },
  {
    title: 'School supplies up to 50% off',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #fffde7 60%, #ffe082 100%)',
    img: 'https://i.imgur.com/1Q9Z1Zm.png',
    link: '#',
  },
  {
    title: 'Huge savings on sporting goods',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #b2dfdb 60%, #e0f2f1 100%)',
    img: 'https://i.imgur.com/3QyQ9Qn.png',
    link: '#',
  },
  {
    title: 'Chic decor up to 30% off',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #fce4ec 60%, #f8bbd0 100%)',
    img: 'https://i.imgur.com/2nCt3Sbl.png',
    link: '#',
  },
  {
    title: 'Up to 55% off',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #fffde7 60%, #ffe082 100%)',
    img: 'https://i.imgur.com/1Q9Z1Zm.png',
    link: '#',
  },
  {
    title: 'Resold up to 20% off',
    desc: 'Shop Deals',
    bg: 'linear-gradient(135deg, #e1bee7 60%, #f3e5f5 100%)',
    img: 'https://i.imgur.com/8zQbQkI.png',
    link: '#',
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection>
        <HeroText>
          <HeroTitle>Walmart DEALS</HeroTitle>
          <HeroSubtitle>Tech up to 40% off. Limited time only!</HeroSubtitle>
          <HeroButton>Shop Deals</HeroButton>
        </HeroText>
        <HeroImage src="https://i.imgur.com/6RLwA7E.png" alt="Featured Deal" />
      </HeroSection>
      <DealsGrid>
        {deals.map((deal, idx) => (
          <DealCard key={idx} bg={deal.bg}>
            <DealTitle>{deal.title}</DealTitle>
            <DealDesc>{deal.desc}</DealDesc>
            <DealLink href={deal.link}>Shop Deals</DealLink>
            <DealImage src={deal.img} alt={deal.title} />
          </DealCard>
        ))}
      </DealsGrid>
    </div>
  );
};

export default HomePage; 