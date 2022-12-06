import {
  Card,
  RatingButton,
  RatingButtonsContainer,
  CircleContainer,
  StarIcon,
  SubmitButton,
  Title,
  Paragraph
} from './components';

type RateCardProps = {
  onRatingButtonClick: (rating: number) => void;
  onSubmit: () => void;
  selectedItem: number;
};

const RateCard = ({
  onRatingButtonClick,
  onSubmit,
  selectedItem
}: RateCardProps) => {
  return (
    <Card>
      <CircleContainer>
        <StarIcon />
      </CircleContainer>
      <Title>How did we do?</Title>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
      <RatingButtonsContainer>
        {[...Array(5).keys()].map((item) => {
          return (
            <RatingButton
              key={item}
              onClick={() => onRatingButtonClick(item + 1)}
              selected={item + 1 === selectedItem}
            >
              {item + 1}
            </RatingButton>
          );
        })}
      </RatingButtonsContainer>
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </Card>
  );
};

export default RateCard;
