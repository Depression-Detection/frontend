import React from 'react';
import { Img } from 'src/components/Img';
import styled from 'styled-components/macro';

const Hero = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
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
    overflow: hidden;
    background: linear-gradient(45deg, #013f28, #1c0c64);
  }

  

  &:before {
    background: #400414;
    box-shadow: 0 0 540px 164px #400414;
    z-index:2;
    top: -100%;
    left: -75%;
    opacity: .7;
  }

  &:after {
    background: #400414;
    box-shadow: 0 0 540px 164px white;
    z-index:2;
    bottom: -100%;
    right: -90%;
    opacity: .4;
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

export const HeroBlue: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Hero className={className}>
      {children}
    </Hero>
  );
};
