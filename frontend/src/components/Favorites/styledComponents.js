import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;

  h1 {
    color: #1e293b;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #475569;
  }
`

export const CollegeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`
