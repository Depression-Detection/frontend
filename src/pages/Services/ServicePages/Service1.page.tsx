import { Content } from 'src/components/layout/Content';
import { HeroBlack } from 'src/components/layout/Hero/HeroBlack';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Img } from 'src/components/Img';

export const Image = styled(Img)`
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
    padding-left: 5%;
    padding-right: 5%;
`;
const IvoryContainer = styled(Container)`
    background-color: #F6F6F4;
    padding-left: 5%;
    padding-right: 5%;
`;

const BottomHeader = styled.h1`
    font-family: Charter, Georgia, serif;
    font-weight: 400;
    font-size: 30px;
    padding-bottom: 1rem;
`;

const AbstractContent = styled.p`
    font-family: Charter, Georgia, serif;
    font-size: 20px;
`;

const FormBox = styled.div`
    display: block;
    margin-left: 2px;
    padding-top: 0.35em;
    padding-bottom: 0.625em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    align-items: center;
`;

const Form = styled.form`
  
`;
const Input = styled.input`
  width: 30%;
  padding: 12px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #767676;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
`;

const SubmitButton = styled.button`
  color: black;
  background-color: white;
  width: 100px;
  border-radius: 5px;
`;


const FormTitle = styled.h4`
  color: #151519;
  font-family: Verdana, serif;
  font-weight:normal;
`;

const ModelContainer = styled.div`
    background-color: black;
    width: 80%
    display: block;
    margin-left: 2px;
    padding-top: 0.35em;
    padding-bottom: 0.625em;
    box-shadow: 0 0px 20px 0 #b09cdc;
    border-radius: 10px;
    background: linear-gradient(217deg, rgba(212,196,263,.8), rgba(255,0,0,.1) 70.71%),
                linear-gradient(127deg, rgba(176,156, 220,.8), rgba(255,255,0,.1) 70.71%),
                linear-gradient(336deg, rgba(151,152,255,.8), rgba(255,0,255,.1) 70.71%);
`;

const ModelContent = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 33%;
`;

const LeftContent = styled(ModelContent)`

`;

const MiddleContent = styled(ModelContent)`
    text-align: center;
`;

const RightContent = styled(ModelContent)`
    text-align: center;
`;

export const AboutPage = () => {
    // Dont Touch --
    function submitToAPI(e) {
        e.preventDefault();
        var URL = "https://fvxw67h6bl.execute-api.us-east-1.amazonaws.com/default/GetData";
        
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let email = (document.getElementById("email") as HTMLInputElement).value;

        if (name=="" || email=="")
         {
             alert("Please Fill All Required Field");
             return false;
         }
         
        const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(!emailRE.test(email)) {
             alert("Email Address entered, is not valid");
                 return false;
         }
        var data = {
           name : name,
           email : email
         };
 
         var xmlhttp = new XMLHttpRequest();
         xmlhttp.open("POST", URL);
         xmlhttp.setRequestHeader("Content-Type", "application/json");
         xmlhttp.send(JSON.stringify(data));
     } 
    // Dont Touch -- 
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
            <BottomHeader>Our Model</BottomHeader>
            <ModelContainer>
                <LeftContent>
                    <Form id="model-form" method="post">
                        <FormBox>
                            <FormTitle>Reddit Username:</FormTitle>
                            <Input id="name" type="text" required/>
                            <FormTitle>Email:</FormTitle>
                            <Input id="email" type="email" required/><br/><br/>
                            <SubmitButton type="button" onClick={submitToAPI}>Submit</SubmitButton>
                        </FormBox>
                    </Form>
                </LeftContent>
                <MiddleContent>
                    <FormTitle>How to use</FormTitle>
                </MiddleContent>
                <RightContent>
                    <FormTitle>What it does</FormTitle>
                </RightContent>
          </ModelContainer>
      </WhiteContainer>
    </PageContainer>
  );
};

export default AboutPage;
