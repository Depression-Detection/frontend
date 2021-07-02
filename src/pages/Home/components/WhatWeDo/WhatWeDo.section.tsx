import {
    Wrapper,
  } from './components';
  import React from 'react';
  import { Button } from 'src/components/Button';
  import { Content } from 'src/components/layout/Content';
  
  export const WhatWeDoSection = () => {
    return (
      <Wrapper>
        <Content contentCenter>
          <h2>{('section.title')}</h2>
          <p>{('section.description')}</p>
        </Content>
      </Wrapper>
    );
  };