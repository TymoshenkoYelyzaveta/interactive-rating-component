import styled from 'styled-components';

type TextProps = {
  centered?: boolean;
};

const Text = styled.p<TextProps>`
  color: #969fad;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  padding-bottom: 24px;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`;

export default Text;
