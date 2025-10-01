import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f8fafc;
  padding: 20px;
`;

export const NotFoundContent = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #475569;
  margin-bottom: 24px;
`;

export const HomeButton = styled.button`
  padding: 12px 24px;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }
`;
