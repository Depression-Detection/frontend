import { Content } from 'src/components/layout/Content';
import styled from "styled-components";
import { Link, NavLink, useLocation, BrowserRouter  } from 'react-router-dom';

const Logo = styled.img`

`;

const NLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  align-items: center;
  
  border: none;
  outline: none;
  background: transparent;
  min-width: 50px;
  justify-content: center;
  font-family: Trebuchet MS;
`;

const NavSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &:not(:last-child) {
    margin-rightW: 0.5rem;
  }
`;

const NavContainerOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 85vw;
  height: auto;
  z-index: 1000;
  background: #1a161300;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  border-bottom: 1px solid #1a1613);
`;

export type NavBarType = {};

const NavContainer = styled(Content)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
`;

const FixedMargin = styled.div`
  height: 70px;
`;

export const NavBar: React.FC<NavBarType> = (props) => {
  return (
    <NavContainerOuter>
      <NavContainer>
        <NavSection>
          <BrowserRouter>
            <NLink to="/" style={{ marginLeft: '-0.5rem' }}>
              <Logo
                src="omicronwhitesprite.svg"
                height="35px" 
                width="35px"
                alt="Omicron Logo"
              />
            </NLink>
            <NLink to="/services" style={{ marginLeft: '1rem' }}>
              Services
            </NLink>
            <NLink to="/blog" style={{ marginLeft: '1rem' }}>
              Blog
            </NLink>
            <NLink to="/about" style={{ marginLeft: '1rem' }}>
              About
            </NLink>
          </BrowserRouter>
        </NavSection>
      </NavContainer>
    </NavContainerOuter>
  );
}