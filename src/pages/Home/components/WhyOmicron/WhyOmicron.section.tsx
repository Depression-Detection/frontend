import { Wrapper, Title, Image, ItemsContainer, Item } from './components';
import { Content } from 'src/components/layout/Content';
import { Spacer } from 'src/components/layout/Spacer';

export const WhyOmicron = () => {
  return (
    <Wrapper>
      <Content padding>
        <Spacer size="xl" />
        <Title>{('Title 2')}</Title>
        <ItemsContainer>
          <Item>
            <Image
              height="150"
              width="185"
              src="/illustrations/moon.svg"
              alt={('Img 1')}
            />
            <h3>{('Header 1')}</h3>
            <p>{('Header Description 1')}</p>
          </Item>
          <Item>
            <Image
              height="150"
              width="242"
              src="/illustrations/horseride.svg"
              alt={('Img 2')}
            />
            <h3>{('Header 2')}</h3>
            <p>{('Header Description 2')}</p>
          </Item>
        </ItemsContainer>
        <Spacer size="xl" />
      </Content>
    </Wrapper>
  );
};