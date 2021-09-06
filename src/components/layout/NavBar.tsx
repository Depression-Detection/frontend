import { Content } from 'src/components/layout/Content';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Img } from '../Img';

const Content2 = styled(Content)`
  margin: 0 1rem;
`;

export const ClearLink = styled(Link) `
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  align-items: center;
  font-family: IBM Plex Sans Thai Looped;
  border: none;
  outline: none;
  background: transparent;
  min-width: 50px;
  justify-content: center;
  mix-blend-mode: difference;
`;

const Logo = styled(Img)`
  height: 29px;
  fill: var(--text-primary);
`;

const LogoMobile = styled(Img)`
  height: 25px;
  fill: var(--text-primary);
`;

const NavSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const NavContainerOuter = styled.div`
  position: absolute;
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
  position: absolute;
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

const NavContainer = styled(Content2)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
`;

export const NavBar: React.FC<NavBarType> = (props) => {
  return (
    <>
      <NavContainerOuter>
        <NavContainer>
          <NavSection>
            <ClearLink to="/" style={{ marginLeft: '-0.5rem' }}>
              <Logo
                src="omicronwhitesprite.svg"
                alt="Omicron Logo"
              />
            </ClearLink>
            <ClearLink to="/projects" style={{ marginLeft: '2rem' }}>
              Services
            </ClearLink>
            {/* <ClearLink to="/help" style={{ marginLeft: '2rem' }}>
            Help
            </ClearLink> */}
            <ClearLink to="/blog" style={{ marginLeft: '2rem' }}>
              Blog
            </ClearLink>
            <ClearLink to="/about" style={{ marginLeft: '2rem' }}>
              About
            </ClearLink>
            <ClearLink to="/contact-us" style={{ marginLeft: '2rem' }}>
              Contact Us
            </ClearLink>
          </NavSection>
        </NavContainer>
      </NavContainerOuter>

      <ContainerMobile>
        <NavContainer>
          <ClearLink to='/' aria-label="Home page" style={{ marginLeft: '-1rem' }}>
            <LogoMobile
                height="30px"
                width="100px"
                src="omicronwhitesprite.svg"
                alt="Omicron Logo"
              />
          </ClearLink>
          <NavSection>
            <ClearLink to="/projects" style={{ marginLeft: '1rem' }}>
              Services
            </ClearLink>
            {/* <ClearLink to="/help" style={{ marginLeft: '1rem' }}>
              Help
            </ClearLink> */}
            <ClearLink to="/blog" style={{ marginLeft: '1rem' }}>
              Blog
            </ClearLink>
            <ClearLink  to="/about" style={{ marginLeft: '1rem' }}>
              About
            </ClearLink>
            <ClearLink to="/contact-us" style={{ marginLeft: '2rem' }}>
              Contact&nbsp;Us
            </ClearLink>
          </NavSection>
        </NavContainer>
      </ContainerMobile>
    </>
  );
}