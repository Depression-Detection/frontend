import styled from 'styled-components/macro';
import { Img } from 'src/components/Img';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: white;
  border-top: 1px solid var(--border-color);
`;

export const ClearLink = styled(Link) `
  font-family: IBM Plex Sans Thai Looped;  
  text-decoration: none;
  font-size: .925rem;
`;

export const Image = styled(Img)`
  height: 400px;
  @media screen and (max-width: 780px) {
    height: 350px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const Item = styled.div`
  font-family: Trebuchet MS;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit;
  * {
    text-align: center;
  }
  p {
    color: var(--text-secondary);
  }
  tr {
    font-family: IBM Plex Sans Thai Looped;
    color: var(--text-on-bg);
    border-bottom: 1px solid #ececec;
    font-size: .925rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    line-height: 35px;
  }
  a {
    color: #77869e;
    display: block;
    font-size: .925rem;
    font-weight: 400;
    &:hover {
      color: var(--text-on-bg);
      text-decoration: none;
    }
  }
`;

export {}