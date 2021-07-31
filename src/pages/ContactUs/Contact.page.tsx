import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

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


export const ContactPage = () => {
  return (
    <>
    <PageContainer>
      <Title>Contact Us</Title>
      <h3>{('Do you have any questions or concerns?')}</h3>
          <div>
            <form id="contact-form" method="post" action="https://formspree.io/f/mrgrykgv">
              <input  name="name" type="text" placeholder=" Enter Your Name" required/><br></br>
              <input name="email" type="email" placeholder=" Enter Your Email" required/><br></br>
              <textarea  name="message" rows={5} cols={40} placeholder=" Enter Your Message"></textarea><br></br>
              <input type="submit" value="Send Email"></input>
          </form>
          </div>
    </PageContainer>
    </>
  );
};

export default ContactPage;
