import { Content } from 'src/components/layout/Content';
import { HeroBlue } from 'src/components/layout/Hero/HeroBlue';
import { Page } from 'src/components/layout/Page';
// import { CoinsWeMineSection } from 'src/pages/Home/CoinsWeMine.section';
// import { GetStartedSection } from 'src/pages/Home/GetStarted.section';
// import { NewsSection } from './News.section';
import styled from 'styled-components/macro';
// import { SearchAddressBar } from 'src/components/SearchAddressBar/SearchAddressBar';
import { Helmet } from 'react-helmet-async';
// import { Spacer } from 'src/components/layout/Spacer';
// import { CoinEarnings } from './CoinEarnings';
// import { WhyFlexpool } from './WhyFlexpool';
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

export const HomePage = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>{'head title'}</title>
      </Helmet>
      <Hero>
        <Content contentCenter style={{ position: 'relative', zIndex: 100 }}>
          <h1>{'title'}</h1>
          <p>{'description'}</p>
          <tr>We are currently under development</tr>
          <a href="https://twitter.com/omicron_life">Click here for Updates</a>
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

export default HomePage;
