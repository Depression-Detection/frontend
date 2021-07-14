import React from 'react';
import { Img } from 'src/components/Img';
import styled from 'styled-components/macro';

const Hero = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    color: black;
  }
  p {
    color: black;
  }
  a {
    color: black;
  }

  position: relative;
  & {
    position: relative;
    z-index: 1;
    background: white
  }
`;

export const HeroWhite: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Hero className={className}>
      {children}
    </Hero>
  );
};
