import { Wrapper, ClearLink, Image, ItemsContainer, Item, Title, Hero, PageContainer, NavBlock } from './components';
import { Content } from 'src/components/layout/Content';
import { Spacer } from 'src/components/layout/Spacer';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import React from 'react';

export const ServicesPage = () => {
  return (
    <PageContainer>
      <NavBlock></NavBlock>
      <Content padding>
        <Spacer size="xl" />
        <Title>{('Our Projects')}</Title>
        <ItemsContainer>
          <Item>
            <Image
              height="400"
              width="400"
              src="/illustrations/showcaseimg_1.svg"
              alt={('Mental Health Showcase Image')}
            />
            <tr>{('Mental Health Monitoring on Social Media')}</tr>
            <ClearLink to="/projects/mental-health-monitoring-on-social-media" >View more</ClearLink>
          </Item>
          {/* <Item>
            <Image
              height="400"
              width="400"
              src="/illustrations/showcaseimg_1.svg"
              alt={('Img 1')}
            />
            <tr>{('Header 1')}</tr>
            <a href="https://twitter.com/omicron_life"  target="_blank">Click here for Updates</a>
          </Item> */}
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </PageContainer>
  );
};

export default ServicesPage;
