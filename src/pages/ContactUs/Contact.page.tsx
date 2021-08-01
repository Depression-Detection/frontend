import React, { Component } from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Button } from 'src/components/Button';

const PageContainer = styled(Page)`
  background: linear-gradient(45deg, #013f28, #1c0c64);;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
 
  h3{
    color: white;
    font-family: Verdana, serif;
  }
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

const Submit = styled.input`
  color: black;
  font-family: Verdana, serif;
`;



export const ContactPage = () => {

  return (
    <>
    <PageContainer>
      <Title>Contact Us</Title>
      <h3>{('Do you have any questions or concerns?')}</h3>
          {/* <div>
            <form id="contact-form" method="POST" action="https://formspree.io/f/mrgrykgv">
              <input  name="name" type="text" placeholder=" Enter Your Name" required/><br></br>
              <input name="email" type="email" placeholder=" Enter Your Email" required/><br></br>
              <textarea  name="message" rows={5} cols={40} placeholder=" Enter Your Message"></textarea><br></br>
              <Submit type="submit" value="Send Email"></Submit>
          </form>
          </div> */}
          <iframe name="dummyframe" id="dummyframe" width="0" height="0"></iframe>
          <form 
            method="POST"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdImxRE6HvZ9RWxLSapQikPS9VSYaCuwIAHAxeN3t06sxYn7w/formResponse"
            target="dummyframe"
          >
            <input type="text" placeholder="Name" name="entry.1325935210" />
            <input type="email" placeholder="Email" name="entry.639034199" />
            <input type="text" placeholder="Comment" name="entry.690565494" />
            <Button type="submit" >
              Submit
            </Button>
          </form>
    </PageContainer>
    </>
  );
};

export default ContactPage;
