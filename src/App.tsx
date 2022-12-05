import { useState } from 'react';
import {
  Card,
  Title,
  Text,
  Container,
  SubmitButton,
  RoundButton,
  RoundContainer,
  Ratings,
  StarIcon,
  Chip,
  ThankYouImage
} from './components';

function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingButtonClick = (rating: number) => {
    setRatingValue(rating);
  };

  const handleRatingSumbit = () => {
    setIsSubmitted(true);
  };

  return (
    <Container>
      {isSubmitted ? (
        <Card centeredContent>
          <ThankYouImage />
          <Chip>{`You selected ${ratingValue} out of 5`}</Chip>
          <Title>Thank you!</Title>
          <Text>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </Text>
        </Card>
      ) : (
        <Card>
          <RoundContainer>
            <StarIcon />
          </RoundContainer>
          <Title>How did we do?</Title>
          <Text>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
          <Ratings>
            {[...Array(5).keys()].map((item) => {
              return (
                <RoundButton
                  onClick={() => handleRatingButtonClick(item + 1)}
                  key={item}
                  selected={item + 1 === ratingValue}
                >
                  {item + 1}
                </RoundButton>
              );
            })}
          </Ratings>
          <SubmitButton onClick={handleRatingSumbit}>Submit</SubmitButton>
        </Card>
      )}
    </Container>
  );
}

export default App;
