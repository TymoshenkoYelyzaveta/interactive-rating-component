import styled from 'styled-components';

type RatingButtonProps = {
  selected?: boolean;
};

const RatingButton = styled.button<RatingButtonProps>`
  background-color: ${(props) => (props.selected ? '#FC7614' : '#262e38')};
  color: ${(props) => (props.selected ? '#ffffff' : '#7C8798')};
  width: 51px;
  height: 51px;
  border-radius: 50%;
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #7c8798;
  }
`;

export default RatingButton;
