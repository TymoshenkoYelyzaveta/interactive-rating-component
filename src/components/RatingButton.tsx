import styled from 'styled-components';

import RoundContainer from './CircleContainer';

type RatingButtonProps = {
  selected?: boolean;
  onClick: (event: MouseEvent) => void;
};

const RatingButton = styled(RoundContainer)<RatingButtonProps>`
  background-color: ${(props) => (props.selected ? '#FC7614' : '#262e38')};
  color: ${(props) => (props.selected ? '#ffffff' : '#7C8798')};
  display: flex;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #7c8798;
  }
`;

export default RatingButton;
