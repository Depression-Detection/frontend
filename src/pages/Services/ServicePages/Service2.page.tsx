import { HeroBlack } from 'src/components/layout/Hero/HeroBlack';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Img } from 'src/components/Img';
import { Button } from 'src/components/Button';
import { Link } from 'react-router-dom';

const Image = styled(Img)`
  padding-left: 25%;
    @media screen and (max-width: 780px) {
        height: 0;
      }
`;
const ImageLeft = styled(Img)`
padding-left: 0%;
margin-left: 0%;
margin-top: 10%;
transition: 0.2s;
    &:hover {
        margin-top: 5%;
    }
  @media screen and (max-width: 780px) {
      height: 0;
    }
`;
const ImageMiddle = styled(Img)`
padding-left: 10%;
margin-left: 0%;
margin-top: 10%;
transition: 0.2s;
    &:hover {
        margin-top: 5%;
    }
  @media screen and (max-width: 780px) {
      height: 0;
    }
`;
const ImageRight = styled(Img)`
padding-left: 10%;
margin-left: 0%;
margin-top: 10%;
transition: 0.2s;
    &:hover {
        margin-top: 5%;
    }
  @media screen and (max-width: 780px) {
      height: 0;
    }
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
    max-width: 100%;
`;

const Title = styled.h1`
    padding-left: 10%;
    // padding-right: 50%;
    font-family: Georgia, serif;
    font-weight: normal;
    @media screen and (max-width: 800px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const Subtitle = styled.p`
    padding-left: 10%;
    // padding-right: 50%;
    font-family: Montserrat, Verdana, serif;
    margin: 0 0 24.5;
    font-size: 1em;
    @media screen and (max-width: 800px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const UpdateLog = styled.div`
    padding-left: 10%;
    vertical-align: bottom;
    padding-top: 10%;
    height: 100%;
    @media screen and (max-width: 800px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const DateText = styled.div`
    color: white;
    font-family: Montserrat, serif;
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
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 200%;
    }
`;

const Form = styled.form`
  
`;

const HiddenFrame = styled.iframe`
  border-width: 0px;
`;

const Input = styled.input`
  width: 200px;
  height: 200%;
  border: 0px solid #767676;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 17.5px;
  box-sizing: border-box;
  height: 30px;
  box-shadow: 0 0px 10px 0 white;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  transition: 0.2s;
  &:hover {
    width: 210px;
    box-shadow: 0 0px 30px 0 white;
}
`;

const SubmitButton = styled(Button)`
  color: rgba(151,152,255,1);
  background: white;
  width: 100px;
  height: 30px;
  justify-content: center;
  font-family: Montserrat;
  box-shadow: 0 0px 10px 0 white;
  transition: 0.2s;
    &:hover {
        width: 110px;
        height: 33px;
        box-shadow: 0 0px 30px 0 white;
    }
`;


const FormTitle = styled.h4`
  color: #151519;
  margin: 0px;
  filter: invert(1);
  mix-blend-mode: difference;
  font-family: Montserrat, Georgia, serif;
  font-weight: 600;
  font-size: 20px;
  transform: scale(.95, 1);
`;

const ModelContainer = styled.div`
    background-color: black;
    display: block;
    padding: 1rem;
    box-shadow: 0 0px 20px 0 #b09cdc;
    border-radius: 10px;
    background: linear-gradient(217deg, rgba(212,196,263,.8), rgba(255,0,0,.1) 70.71%),
                linear-gradient(127deg, rgba(176,156, 220,.8), rgba(255,255,0,.1) 70.71%),
                linear-gradient(336deg, rgba(151,152,255,.8), rgba(255,0,255,.1) 70.71%);
    @media screen and (max-width: 800px) {
        justify-content: center;
        display: flex;
    }
`;

const ModelContent = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 33%;
`;

const LeftContent = styled(ModelContent)`
    text-align: center;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const MiddleContent = styled(ModelContent)`
    text-align: center;
    @media screen and (max-width: 800px) {
        align-items: center;
        padding-right: 33%;
    }
`;

const RightContent = styled(ModelContent)`
    text-align: center;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const InfoTextContainer = styled.div`
    display: block;
`;

const InfoTextBox = styled.div`
    display: inline-block;
    vertical-align: middle;
    background: white;
    justify-content: center;
    width: 35%;
    margin: .625rem;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0px 10px 0 white;
    text-align: left;
    font-family: Montserrat;
    font-size: 15px;
`;

const SafeText = styled(FormTitle)`
    margin-top: -.5em;
    font-size: 15px;
    transition: 0.2s;
    &:hover {
        color: gray;
    }
`;

export const ClearLink = styled(Link) `
  text-decoration: underline;
`;

export const AboutPage = () => {
  return (
    <PageContainer>
      <Hero>
        <TextContainer>
            <Title>{'Disease Diagnosis on Chest X-Rays'}</Title>
            <Subtitle>
                X-rays are one of the most vital chest examinations available. However, it may be difficult and time consuming for humans to perform clinical diagnosis of them. So we've developed a model that is able to scan chest x-rays and determine if they show signs of pulmonary diseases.
            </Subtitle>
            <UpdateLog>
                <DateText>
                    Last Updated
                </DateText>
                <DateText>
                    November 15, 2021
                </DateText>
            </UpdateLog>
        </TextContainer>
        <ImageContainer>
            <Image
                height="400"
                width="400"
                src="/illustrations/showcaseimg_2.svg"
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
        <BottomHeader>Try Out Our Model: CXD-1</BottomHeader>
      </IvoryContainer>
    </PageContainer>
  );
};

export default AboutPage;
