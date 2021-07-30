import { Content } from 'src/components/layout/Content';
import { HeroBlack } from 'src/components/layout/Hero/HeroBlack.untouched';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Link } from 'react-router-dom';

const ClearLink = styled(Link) `
  text-decoration: none;
  font-size: .925rem;
  font-family: Verdana, serif;
  font-size: 1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url("https://cdn.openai.com/research-covers/openai-charter/gradient.jpg");
`;

const Hero = styled(HeroBlack)`
  min-height: 20vh;
  
  padding-top: 4rem;
  padding-bottom: 10rem;
  justify-content: top;

  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
  
  h1 {
    font-family: Georgia, serif;
    font-weight: normal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url("https://cdn.openai.com/research-covers/openai-charter/gradient.jpg");
  }
  h3 {
    font-family: Verdana, serif;
    font-size: 1.25em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url("https://cdn.openai.com/research-covers/openai-charter/gradient.jpg");
  }
  p {
    font-family: Verdana, serif;
    font-size: 1em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url("https://cdn.openai.com/research-covers/openai-charter/gradient.jpg");
  }
`;

const WrapperDark = styled(Hero)`
  padding-bottom: 4rem;
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

const WrapperLight = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  // background-image: url("https://cdn.openai.com/research-covers/openai-charter/gradient.jpg");
  background: white;
  display: flex;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  h2 {
    font-family: Georgia, serif;
    font-weight: normal;
    font-size: 2rem;
    color: #151519;
  }

  a {
    color: #151519;
  }

  p {
    font-family: Verdana, serif;
    font-size: 1em;
  }
`;

const ContentRight = styled(Content)`
  // align-items: right;
  // justify-content: right;
  width: 70%;
`;

const ElementWrap = styled.li`
  position: relative;
  z-index: 0;
  padding-left: 50px; //This should be equal to width of first element.
`;

export const AboutPage = () => {
  return (
    <>
    
    <PageContainer>
      <Hero>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h1>{'About'}</h1>
          <h3>Our Mission</h3>
          <p>We aim to create a better world through the union of Artificial Intelligence and human health.</p>
        </Content>
      </Hero>
      <WrapperLight>
        <ContentRight contentCenter>
          <h2>{('Who We Are')}</h2>
          <p>We are a small group of students who are motivated to make a difference in this world by 
            working towards integrating Artificial Intelligence into everyday life.</p>
        </ContentRight>
        <ContentRight contentCenter>
          <h2>Who's Involved</h2>
          <p>Rithwik Babu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             Nikhil Jain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             Ryder Sitcawich</p>
        </ContentRight>
      </WrapperLight>
      <WrapperDark>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h3>Timeline</h3>
          <p>Data Collection for Mental Health Detection on Reddit— &nbsp;&nbsp;&nbsp; Summer 2021</p>
          <p>Expected Release of our Mental Health Detection on Reddit— &nbsp;&nbsp;&nbsp; Fall 2021</p>
        </Content>
      </WrapperDark>
      <WrapperLight>
        <Content contentCenter>
          <h2>{('Help End the Depression Epidemic')}</h2>
          <a href="https://forms.gle/BRLPi2uAS6KPF5wg6" target="_blank">Click here if you are interested in helping our research.</a>
        </Content>
      </WrapperLight>
      <WrapperDark>
        <Content contentCenter style={{ position: 'center', zIndex: 100 }}>
          <h3>Privacy Policy</h3>
          <ClearLink to="/about/privacy-policy">Click here to navigate to our Privacy Policy</ClearLink>
        </Content>
      </WrapperDark>
      <WrapperLight>
        <Content contentCenter>
          <h2>{('Contact Us')}</h2>
          <h3>{('Do you have any questions or concerns?')}</h3>
          <div>
            <form id="contact-form" method="post" action="">
              <input name="name" type="text" placeholder="Enter Your Name" required/><br></br>
              <input name="email" type="email" placeholder="Enter Your Email" required/><br></br>
              <textarea name="message" placeholder="Enter Your Message"></textarea>
          </form>
          </div>
        </Content>
      </WrapperLight>
    </PageContainer>
    </>
  );
};

export default AboutPage;
