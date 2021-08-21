import {
    Wrapper, Title, SubTitle,
  } from './components';
import { Content } from 'src/components/layout/Content';

export const WhatWeDoSection = () => {
  return (
    <Wrapper>
      <Content contentCenter>
        <Title>{('Help End the Depression Epidemic')}</Title>
        <SubTitle href="https://forms.gle/BRLPi2uAS6KPF5wg6"  target="_blank">Click here if you are interested in helping our Reddit data research.</SubTitle>
      </Content>
    </Wrapper>
  );
};
