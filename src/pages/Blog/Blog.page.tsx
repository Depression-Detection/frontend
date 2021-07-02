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

export const BlogPage = () => {
  return (
    <PageContainer>
      {/* <Helmet>
        <title>head title</title>
      </Helmet> */}
      <Hero>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h1>{'Blog'}</h1>
          <p>Omicron Blog</p>
          <a href="https://twitter.com/omicron_life">Click here to read more</a>
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

export default BlogPage;
