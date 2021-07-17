import { Content } from 'src/components/layout/Content';
import { HeroBlue } from 'src/components/layout/Hero/HeroBlue';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { ClearLink, ItemsContainer, Item, Title, PageContainer, NavBlock, Categories, TitleLink, Date } from './components';
import { Spacer } from 'src/components/layout/Spacer';

import { Helmet } from 'react-helmet-async';
import React from 'react';

export const BlogPage = () => {
  return (
    <PageContainer>
      <NavBlock></NavBlock>
      <Content padding>
        <Spacer size="xl" />
        <Title>{('Our Blog')}</Title>
        <ItemsContainer>
          <Item>
            <TitleLink href="https://medium.com/">{('Mental Health Monitoring on Social Media')}</TitleLink>
            <Categories>
              <Date>July 17, 2021</Date>
              <ClearLink to="/blog/research" >Research,</ClearLink>
              <ClearLink to="/blog/announcements" >Announcements,</ClearLink>
              <ClearLink to="/blog/milestones" >Milestones</ClearLink>
            </Categories>
          </Item>
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </PageContainer>
  );
};

export default BlogPage;
