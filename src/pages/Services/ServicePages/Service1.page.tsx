import { Content } from 'src/components/layout/Content';
import { HeroBlack } from 'src/components/layout/Hero/HeroBlack';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Img } from 'src/components/Img';

export const Image = styled(Img)`
  height: 400px;
  padding-left: 25%;
`;

const Hero = styled(HeroBlack)`
    min-height: 40rem;
    padding-top: 5rem;
    padding-bottom: 10rem;
    position: relative;
    @media screen and (max-width: 800px) {
        margin-bottom: 0;
        padding-bottom: 3rem;
    }
    max-width: 100%;
    display: flex;
    display: grid;
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items:
    gap: 2rem;
`;

const PageContainer = styled(Page)`
    background: black;
    
`;

const Title = styled.h1`
    padding-left: 10%;
    // padding-right: 50%;
    font-family: Georgia, serif;
    font-weight: normal;
`;

const Subtitle = styled.p`
    padding-left: 10%;
    // padding-right: 50%;
    font-family: Verdana, serif;
    margin: 0 0 24.5
    font-size: 1em;
`;

const UpdateLog = styled.div`
    padding-left: 10%;
    vertical-align: bottom;
    padding-top: 10%;
    height: 100%;
`;

const DateText = styled.div`
    color: white;
    
    font-family: Verdana, serif;
    font-size: .75em;
`;

const TextContainer = styled.div`
    min-height: 35rem;
    height: 100%;
    // width: 50%;
    vertical-align: top;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const AboutPage = () => {
  return (
    <PageContainer>
      <Hero>
        <TextContainer>
            <Title>{'Mental Health Monitoring on Social Media'}</Title>
            <Subtitle>
                We're creating a software that can scan the intricacies of users' social media accounts to determine 
                whether or not they are prone to depression. Our software uses a multimodal approach integrated with 
                deep learning and natural language processing to analyze the text in social media posts. Once perfected, 
                this service will be available to everyone for free — and we will ensure to maintain privacy and secure 
                boundaries.
            </Subtitle>
            <UpdateLog>
                <DateText>
                    Last Updated
                </DateText>
                <DateText>
                    July 18, 2021
                </DateText>
            </UpdateLog>
        </TextContainer>
        <ImageContainer>
            <Image
                height="400"
                width="400"
                src="/illustrations/showcaseimg_1.svg"
                alt={('Mental Health Showcase Image')}
            />
        </ImageContainer>
      </Hero>
    </PageContainer>
  );
};

export default AboutPage;
