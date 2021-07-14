import {
    ItemWrapper,
    Category,
    Title,
    Action,
    Wrapper,
    WrapperInner,
  } from './components';
import { Link } from 'react-router-dom';
import React from 'react';
import { Content } from 'src/components/layout/Content';
  
  const HomeNewsItem: React.FC<{
    to?: string;
    href?: string;
    category: React.ReactNode;
    title: React.ReactNode;
    action: React.ReactNode;
  }> = ({ to, href, category, title, action }) => {
    const innerContent = (
      <>
        <div>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </div>
        <Action>{action}</Action>
      </>
    );
    return to ? (
      <ItemWrapper as={Link} to={to} className="home-news-item">
        {innerContent}
      </ItemWrapper>
    ) : (
      <ItemWrapper href={href} target="_blank" rel="noreferrer noopener">
        {innerContent}
      </ItemWrapper>
    );
  };
  
  export const NewsSection = () => {
    return (
      <Wrapper>
        <Content style={{ position: 'relative' }}>
          <WrapperInner>
            <HomeNewsItem
              category={('Get Started')}
              title={('Begin using Omicron')}
              action={('Explore')}
              to="/services"
            />
            <HomeNewsItem
              category={'Learn More'}
              title={('Read our Blog')}
              action={('Learn')}
              to="/blog"
            />
            <HomeNewsItem
              category={('Make a diffrence')}
              title={('Aid Discovery')}
              action={('Help')}
              to="/help"
            />
          </WrapperInner>
        </Content>
      </Wrapper>
    );
  };
  