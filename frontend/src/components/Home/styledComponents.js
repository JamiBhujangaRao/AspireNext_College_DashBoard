import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f8fafc;
`;

export const HomeContent = styled.div`
  max-width: 700px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const HomeHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const HomeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #475569;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ShopNowButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #2563eb;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;