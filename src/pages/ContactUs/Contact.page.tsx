import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Button } from 'src/components/Button';

const PageContainer = styled(Page)`
  background: linear-gradient(45deg, #013f28, #1c0c64);;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  font-family: Verdana, serif;
  color: white;
  form{
    text-align: center;
  }
  input{
    margin-top: 12px;
    border-radius: 10px;
  }
  textarea{
    margin-top: 12px;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  color: white;
  font-family: Verdana, serif;
`;

const Subtitle = styled.h3`
  text-align: center;
`;

const InputDesc = styled.text`
  font-family: helvetica;
  font-size: 12px;
  font-weight: 600;
  color: #102A43;
`;

const R = styled(InputDesc)`
  color: #ff5c5c;
`;
const HiddenFrame = styled.iframe`
  border-width: 0px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
`;

const TextArea = styled.textarea`
  border-width: 0px;
  width: 98.5%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled(Button)`
  color: white;
  background: linear-gradient(45deg, #013f28, #1c0c64);;
  width: 50%;
  justify-content: center;
  margin-top: 15px;
  margin-left: 25%;
`;

const SubmitContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  justify-content: start;
  text-align: start;
`;

const InputBlock = styled.div`
  background-color: white;
  justify-content: start;
  text-align: start;
  padding: 17.5px;
  border-radius: 5px; 
  box-shadow: 0 0px 20px 0 #ccc;
  margin-bottom: 50px;
`;

export const ContactPage = () => {
   const confirmAlert = (e) => {
    alert('Message Sent!');
    var inputs = document.getElementsByTagName('input');
    inputs[0].value = "";
    inputs[1].value = "";
    document.getElementsByTagName('textarea')[0].value = "";
   }
  return (
    <>
    <PageContainer>
      <Title>Contact Us</Title>
      <Subtitle>{('Do you have any questions or concerns?')}</Subtitle>
          <HiddenFrame name="dummyframe" id="dummyframe" width="0" height="0"></HiddenFrame>
          <form 
            method="POST"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdImxRE6HvZ9RWxLSapQikPS9VSYaCuwIAHAxeN3t06sxYn7w/formResponse"
            target="dummyframe"
            onSubmit={confirmAlert}
          >
            <InputBlock>
              <InputContainer>
                <InputDesc>Name <R>*</R></InputDesc>
                <Input id="q1" type="text" name="entry.1325935210" required/>
              </InputContainer>
              <InputContainer>
                <InputDesc>Email <R>*</R></InputDesc>
                <Input type="email" name="entry.639034199" required/>
              </InputContainer>
              <InputContainer>
                <InputDesc>Comment <R>*</R></InputDesc><br/>
                <TextArea  name="entry.690565494" rows={5} cols={40} required></TextArea>
              </InputContainer>
              <SubmitContainer>
                <SubmitButton type="submit">Submit</SubmitButton>
              </SubmitContainer>
              
            </InputBlock>
          </form>
    </PageContainer>
    </>
  );
};

export default ContactPage;
