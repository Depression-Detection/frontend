import { Wrapper, Title, Image, ItemsContainer, Item } from './components';
import { Content } from 'src/components/layout/Content';
import { Spacer } from 'src/components/layout/Spacer';

export const WhyOmicron = () => {
  return (
    <Wrapper>
      <Content padding>
        <Spacer size="xl" />
        <Title>{('why_section.title')}</Title>
        <ItemsContainer>
          <Item>
            <Image
              height="150"
              width="185"
              src="/illustrations/moon.svg"
              alt={('why_section.item_1.title')}
            />
            <h3>{('why_section.item_1.title')}</h3>
            <p>{('why_section.item_1.description')}</p>
          </Item>
          <Item>
            <Image
              height="150"
              width="242"
              src="/illustrations/horseride.svg"
              alt={('why_section.item_2.title')}
            />
            <h3>{('why_section.item_2.title')}</h3>
            <p>{('why_section.item_2.description')}</p>
          </Item>
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </Wrapper>
  );
};