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
            <ClearLink to="/projects/mental-health-monitoring-on-social-media" >View more</ClearLink>
          </Item>
          <Item>
            <Image
              height="400"
              width="400"
              src="/illustrations/showcaseimg_2.svg"
              alt={('Img 1')}
            />
            <tr>{('Disease Diagnosis on Chest X-Rays')}</tr>
            <ClearLink to="/projects/disease-diagnosis-on-chest-x-rays" >View more</ClearLink>
          </Item>
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </Wrapper>
  );
};