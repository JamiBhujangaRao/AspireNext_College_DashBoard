import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const CollegeName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const CollegeInfo = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ActionButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: #2563eb;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
  }
`;
