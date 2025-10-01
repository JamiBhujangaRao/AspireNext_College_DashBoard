import { Link, useNavigate } from 'react-router-dom';


import {
  NavHeader,
  NavContent,
  NavBarContainer,
  WebsiteLogo,
  NavMenu,
  NavMenuItem,
  NavLinkStyled,
  LogoutButton,
} from './styledComponents';


const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate('/logout', { replace: true });
  };

  return (
    <NavHeader>
      <NavContent>
        <NavBarContainer>
          <Link to="/">
            <WebsiteLogo
              src="https://res.cloudinary.com/dsgb4dk52/image/upload/v1759241150/Logo_yc6ndv.webp"
              alt="website logo"
            />
          </Link>
          <NavMenu>
            <NavMenuItem>
              <NavLinkStyled to="/home">Home</NavLinkStyled>
            </NavMenuItem>
            <NavMenuItem>
              <NavLinkStyled to="/colleges">Colleges</NavLinkStyled>
            </NavMenuItem>
            <NavMenuItem>
              <NavLinkStyled to="/reviews">Reviews</NavLinkStyled>
            </NavMenuItem>
            <NavMenuItem>
              <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
            </NavMenuItem>
          </NavMenu>
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </NavBarContainer>
      </NavContent>
    </NavHeader>
  );
};

export default Header;
