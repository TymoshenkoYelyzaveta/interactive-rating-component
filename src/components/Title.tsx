import styled from 'styled-components';

type TitleProps = {
  centered?: boolean;
};

const Title = styled.h1<TitleProps>`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  padding-bottom: 7px;
`;

export default Title;
