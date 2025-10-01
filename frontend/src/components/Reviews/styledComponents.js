import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ReviewsContent = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    input, textarea {
      padding: 8px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
    }

    button {
      padding: 10px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      background-color: #2563eb;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background-color: #1e40af;
      }
    }
  }
`;

export const ReviewsGrid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;
