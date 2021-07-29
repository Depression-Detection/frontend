import { Content } from 'src/components/layout/Content';
import { HeroBlue } from 'src/components/layout/Hero/HeroBlue';
import { Page } from 'src/components/layout/Page';

import { NewsSection } from './components/News/News.section';
import { WhyOmicron } from './components/WhyOmicron/WhyOmicron.section';
import { WhatWeDoSection } from './components/WhatWeDo/WhatWeDo.section';

import styled from 'styled-components/macro';
import { Spacer } from 'src/components/layout/Spacer';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const Hero = styled(HeroBlue)`
  min-height: 40vh;
  padding-top: 10rem;
  padding-bottom: 11rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }

  h1{
    font-family: Georgia, serif;
  }
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

export const HomePage = () => {
  return (
    <PageContainer>
      {/* <Helmet>
        <title>head title</title>
      </Helmet> */}
      <Hero>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h1>{'Omicron'}</h1>
          <p>We are currently under development</p>
          <a href="https://twitter.com/omicron_life" target="_blank">Click here for Updates</a>
        </Content>
        <Spacer />
        {/* <CoinEarnings /> */}
        <Spacer />
        <NewsSection />
      </Hero>
      <WhatWeDoSection />
      <WhyOmicron />
      {/* <GetStartedSection /> */}
    </PageContainer>
  );
};

export default HomePage;
