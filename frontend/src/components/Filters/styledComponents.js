import styled from 'styled-components';

/* Colleges Layout */
export const CollegesWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

export const CollegesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const CollegeCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

export const CollegeName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CollegeInfo = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #475569;
`;

export const Fee = styled.p`
  font-weight: 600;
  color: #2563eb;
  margin-top: 8px;
`;

/* Filters Layout */
export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  background-color: #f1f5f9;
  padding: 16px;
  border-radius: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  min-width: 150px;
`;

export const FilterInput = styled.input`
  padding: 8px 10px;
  margin-top: 6px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  width: 100%;
  box-sizing: border-box;
`;

export const FilterSelect = styled.select`
  padding: 8px 10px;
  margin-top: 6px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  width: 100%;
  box-sizing: border-box;
`;
