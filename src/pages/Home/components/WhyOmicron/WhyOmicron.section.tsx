import { Wrapper, ClearLink, Image, ItemsContainer, Item } from './components';
import { Content } from 'src/components/layout/Content';
import { Spacer } from 'src/components/layout/Spacer';

export const WhyOmicron = () => {
  return (
    <Wrapper>
      <Content padding>
        <Spacer size="xl" />
        {/* <Title>{('Title 2')}</Title> */}
        <ItemsContainer>
          <Item>
            <Image
              height="400"
              width="400"
              src="/illustrations/showcaseimg_1.svg"
              alt={('Mental Health Showcase Image')}
            />
            <tr>{('Mental Health Monitoring on Social Media')}</tr>
            <ClearLink to="/services/mental-health-monitoring-on-social-media" >View more</ClearLink>
          </Item>
          {/* <Item>
            <Image
              height="400"
              width="400"
              src="/illustrations/showcaseimg_1.svg"
              alt={('Img 1')}
            />
            <tr>{('Header 1')}</tr>
            <a href="https://twitter.com/omicron_life">Click here for Updates</a>
          </Item> */}
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </Wrapper>
  );
};