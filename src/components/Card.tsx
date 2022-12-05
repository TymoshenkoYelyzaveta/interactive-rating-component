import styled from 'styled-components';

type CardProps = {
  centeredContent?: boolean;
};

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centeredContent ? 'center' : undefined)};
  text-align: ${(props) => (props.centeredContent ? 'center' : undefined)};
  align-items: ${(props) => (props.centeredContent ? 'center' : undefined)};
  width: 412px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  padding: 32px;
`;

export default Card;
