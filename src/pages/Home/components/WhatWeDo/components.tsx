import styled from 'styled-components/macro';
import { Content } from 'src/components/layout/Content';

export const Wrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 10.2rem;
  background: #151519;
  @media screen and (max-width: 800px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Title = styled.h2`
  font-family: IBM Plex Sans Thai Looped;
  font-size: 2rem;
  color: white;
  @media screen and (max-width: 800px) {
    margin: 0 5px;
    font-size: 1.75rem;
    padding-bottom: 30px;
  }
`;

export const SubTitle = styled.a`
  font-family: IBM Plex Sans Thai Looped;
  color: white;
  @media screen and (max-width: 800px) {
    margin: 0 10px;
  }
`;
export {}