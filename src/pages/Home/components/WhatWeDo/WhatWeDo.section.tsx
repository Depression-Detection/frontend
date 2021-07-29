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
          <h2>{('Help End the Depression Epidemic')}</h2>
          <a href="https://forms.gle/BRLPi2uAS6KPF5wg6"  target="_blank">Click here if you are interested in helping our Reddit data research.</a>
        </Content>
      </Wrapper>
    );
  };
