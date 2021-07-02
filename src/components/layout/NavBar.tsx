import { Content } from 'src/components/layout/Content';
import styled from "styled-components";
import { Link, NavLink, useLocation, BrowserRouter  } from 'react-router-dom';
import { Img } from '../Img';

const Logo = styled(Img)`
  height: 29px;
  fill: var(--text-primary);
`;

const LogoMobile = styled(Img)`
  height: 25px;
  fill: var(--text-primary);
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
  z-index: 10;
  background: #1a161300;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  border-bottom: 1px solid #1a1613);
`;

const MobileNavContainerOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 85vw;
  height: auto;
  z-index: 10;
  background: #1a161300;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  border-bottom: 1px solid #1a1613);
`;

const ContainerMobile = styled(MobileNavContainerOuter)`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
  }
  img {
    height: 25px;
  }
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
    <>
      <NavContainerOuter>
        <NavContainer>
          <NavSection>
            <BrowserRouter forceRefresh>
              <NLink to="/" style={{ marginLeft: '-0.5rem' }}>
                <Logo
                  src="omicronwhitesprite.svg"
                  alt="Omicron Logo"
                />
              </NLink>
              <NLink to="/services" style={{ marginLeft: '2rem' }}>
                Services
              </NLink>
              <NLink to="/help-us" style={{ marginLeft: '2rem' }}>
              Help us
              </NLink>
              <NLink to="/blog" style={{ marginLeft: '2rem' }}>
                Blog
              </NLink>
              <NLink to="/about" style={{ marginLeft: '2rem' }}>
                About
              </NLink>
            </BrowserRouter>
          </NavSection>
        </NavContainer>
      </NavContainerOuter>

      <ContainerMobile>
        <NavContainer>
          <NLink to='/' aria-label="Home page" style={{ marginLeft: '-1rem' }}>
            <LogoMobile
                height="30px"
                width="100px"
                src="omicronwhitesprite.svg"
                alt="Omicron Logo"
              />
          </NLink>
          <NavSection>
            <NLink to="/services" style={{ marginLeft: '1rem' }}>
              Services
            </NLink>
            <NLink to="/help-us" style={{ marginLeft: '1rem' }}>
              Help us
            </NLink>
            <NLink to="/blog" style={{ marginLeft: '1rem' }}>
              Blog
            </NLink>
            <NLink to="/about" style={{ marginLeft: '1rem' }}>
              About
            </NLink>
          </NavSection>
        </NavContainer>
      </ContainerMobile>
    </>
  );
}