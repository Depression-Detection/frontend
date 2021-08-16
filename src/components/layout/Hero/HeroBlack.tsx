import React from 'react';
import { Img } from 'src/components/Img';
import styled from 'styled-components/macro';

const Hero = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  h1 {
    font-size: 3rem;
    color: white;
  }
  h2 {
    font-size: 3rem;
    color: white;
  }
  h3 {
    font-size: 3rem;
    color: white;
  }
  p {
    color: white;
  }
  a {
    color: white;
  }

  position: relative;
  & {
    position: relative;
    z-index: 1;
    background: black;
  }

  &:before {
    
    box-shadow: 0 0 540px 164px rgb(246,246,244, .3);
    z-index:2;
    bottom: -100%;
    left: -75%;
    opacity: .7;
  }

  &:after {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
  }

  &:before {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
  }
`;

export const HeroBlack: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Hero className={className}>
      {children}
    </Hero>
  );
};
