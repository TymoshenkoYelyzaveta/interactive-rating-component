import {
  Card,
  Title,
  Text,
  Container,
  SubmitButton,
  RatingButton,
  Ratings,
  Star
} from './components';

function App() {
  return (
    <Container>
      <Card>
        <RatingButton>
          <Star />
        </RatingButton>
        <Title>How did we do?</Title>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
        <Ratings>
          <RatingButton>1</RatingButton>
          <RatingButton>2</RatingButton>
          <RatingButton>3</RatingButton>
          <RatingButton>4</RatingButton>
          <RatingButton>5</RatingButton>
        </Ratings>
        <SubmitButton>Submit</SubmitButton>
      </Card>
    </Container>
  );
}

export default App;
