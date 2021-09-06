import { Content } from 'src/components/layout/Content';
import { HeroBlue } from 'src/components/layout/Hero/HeroBlue';
import { Page } from 'src/components/layout/Page';

import { NewsSection } from './components/News/News.section';
import { WhyOmicron } from './components/WhyOmicron/WhyOmicron.section';
import { WhatWeDoSection } from './components/WhatWeDo/WhatWeDo.section';

import styled from 'styled-components/macro';
import { Spacer } from 'src/components/layout/Spacer';
import { Link } from 'react-router-dom';

export const ClearLink = styled(Link) `
font-family: IBM Plex Sans Thai Looped;
  font-size: 1.15rem;
`;
const Hero = styled(HeroBlue)`
  min-height: 40vh;
  padding-top: 10rem;
  padding-bottom: 11rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

const Content2 = styled(Content)`
  padding-left: 0%;
`;

const Text = styled.h1`
  font-family: IBM Plex Sans Thai Looped;
`;

export const HomePage = () => {
  return (
    <PageContainer>
      {/* <Helmet>
        <title>head title</title>
      </Helmet> */}
      <Hero>
        <Content2 contentCenter style={{ position: 'center', zIndex: 100 }}>
          <Text>{'Omicron'}</Text>
          <ClearLink to="/projects/mental-health-monitoring-on-social-media" >Click here to try out our new DD-1 Depression Detection Model!</ClearLink>
        </Content2>
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
