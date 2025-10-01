import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavHeader = styled.nav`
  background-color: #1a2942ff;
  padding: 10px 20px;
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavBarContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WebsiteLogo = styled.img`
  width: 120px;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuItem = styled.li``;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    color: #2563eb;
  }
`;

export const LogoutButton = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1e40af;
  }
`;
