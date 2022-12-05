import styled from 'styled-components';

type SumbitButtonProps = {
  onClick: () => void;
};

const SubmitButton = styled.button<SumbitButtonProps>`
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  padding: 13px;
  border-radius: 22.5px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #fc7614;

  &:hover {
    color: #fc7614;
    background-color: #ffffff;
  }
`;

export default SubmitButton;
