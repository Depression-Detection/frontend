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
    min-height: 30rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
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

const Container = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const WhiteContainer = styled(Container)`
    background-color: #FFF;
    
`;
const IvoryContainer = styled(Container)`
    background-color: #F6F6F4;
`;

const BottomHeader = styled.h1`
    font-family: Charter, Georgia, serif;
    font-weight: 400;
    font-size: 30px;
    padding-left: 5%;
    padding-bottom: 1rem;
`;

const AbstractContent = styled.p`
    font-family: Charter, Georgia, serif;
    font-size: 20px;
    padding-left: 5%;
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
      <WhiteContainer>
        <BottomHeader>
            Abstract
        </BottomHeader>
        <AbstractContent>
        According to the World Health Organization 264 million individuals experience depression world wide. The purpose of our model is to combat the depression epidemic which is rapidly spreading with the increased usage of technology and social media by providing a quick, general assessment of one’s mental health. We have used a convolutional neural network with over 168 thousand different parameters to train a machine learning model which takes in the username of a Reddit user and scans their posts over the last month to output a mental wellness score. This score represents how much correlation our model found between their posts and those of other depressed users from our collected data. Do not rely on our model as an alternative for a depression diagnosis by a medical professional; this score is intended to provide an insight on your mental wellness. Use these results at your own discretion. 

        </AbstractContent>
      </WhiteContainer>
      <IvoryContainer>
        <BottomHeader>
            More Chart Section
        </BottomHeader>
      </IvoryContainer>
      <WhiteContainer>
        <BottomHeader>
            Model
        </BottomHeader>
      </WhiteContainer>
    </PageContainer>
  );
};

export default AboutPage;
