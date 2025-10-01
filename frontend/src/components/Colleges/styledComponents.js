import styled from 'styled-components';

export const CollegesContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 16px;
`;

export const CollegeCard = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const CollegeName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

export const CollegeInfo = styled.p`
  font-size: 14px;
  color: #475569;
  margin-bottom: 4px;
`;

export const Fee = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
`;

export const CollegeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;