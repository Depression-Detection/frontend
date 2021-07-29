import { Content } from 'src/components/layout/Content';
import { HeroBlue } from 'src/components/layout/Hero/HeroBlue';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import React from 'react';

const Hero = styled(HeroBlue)`
  min-height: 40vh;
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

export const HelpPage = () => {
  return (
    <PageContainer>
      {/* <Helmet>
        <title>head title</title>
      </Helmet> */}
      <Hero>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h1>{'How to help'}</h1>
          <p>We are currently in need of help</p>
          <a href="https://twitter.com/omicron_life"  target="_blank">Click here to help.</a>
        </Content>
        {/* <Spacer />
        <CoinEarnings />
        <Spacer />
        <NewsSection /> */}
      </Hero>
      {/* <CoinsWeMineSection />
      <WhyFlexpool />
      <GetStartedSection /> */}
    </PageContainer>
  );
};

export default HelpPage;
