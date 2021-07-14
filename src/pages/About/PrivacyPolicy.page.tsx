import { Content } from 'src/components/layout/Content.start';
import { HeroWhite } from 'src/components/layout/Hero/HeroWhite';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import React from 'react';

const Hero = styled(HeroWhite)`
  min-height: 40vh;
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
  justify-content: start;
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

export const NavBlock = styled.div`
  background: #151519;
  height: 4.5rem;
`;

export const AboutPage = () => {
  return (
    <PageContainer>
      <NavBlock></NavBlock>
      <Hero>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h1>{'Omicron Privacy Policy'}</h1>
          <h3>{'Preface'}</h3>
          <p>
            We want you to understand how and why Omicron Life (“Omicron” “we” “our” or “us”) collects, uses, 
            and shares information about you when you use our sites, mobile apps, widgets, and other 
            online products and services (collectively, the "Services") or when you otherwise interact 
            with us or receive a communication from us.
          </p>
          <p>
            At any time, if you would like for us to gather or delete your data, please contact us at life.omicron@gmail.com.
          </p>
          <h3>{'Cookie Policy'}</h3>
          <p>
            Cookies on our website are used to provide security and help us to improve the
            user experience of our website.
          </p>
          <h3>{'Data Processing'}</h3>
          <p>
            All data collected by our social media surveys and forms are analyzed holistically. 
            As such, we do not tie the user's usernames to their data in order to maintain privacy.
          </p>
          <p>
            All the data we collect from our social media surveys have a lifetime of exactly 14 days. 
            Following the fourteenth day of the data's life, the data will be deleted.
          </p>
          <h3>{'Data Protection'}</h3>
          <p>
            Omicron protects the users’ data with Google resources. We do not sell or rent the users’ data to
            third parties. The users’ data is only accessed at the time of model creation.

          </p>

        </Content>
      </Hero>
    </PageContainer>
  );
};

export default AboutPage;
