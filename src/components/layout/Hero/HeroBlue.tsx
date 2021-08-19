import React from 'react';
import { Img } from 'src/components/Img';
import styled from 'styled-components/macro';

const Hero = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  // overflow: hidden;

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
    // background: linear-gradient(45deg, #013f28, #1c0c64);
    background: linear-gradient(217deg, rgba(255,80,80,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255, 128,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(51,102,255,.8), rgba(0,0,255,0) 70.71%);
  }

  &:before {
    background: #400414;
    box-shadow: 0 0 540px 164px rgb(64,4,20, .7);
    z-index:2;
    top: -100%;
    left: -75%;
    opacity: .7;
  }

  &:after {
    background: rgb(0,0,0,0);
    // box-shadow: 0 0 540px 164px white;
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
