import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';

const PageContainer = styled(Page)`
  background: #151519;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
`;

export const ContactPage = () => {
  return (
    <>
    <PageContainer>
      <Title>poon</Title>
    </PageContainer>
    </>
  );
};

export default ContactPage;
