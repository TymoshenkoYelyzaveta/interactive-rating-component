import { Card, Title, Text, Container, SubmitButton } from './components';

function App() {
  return (
    <Container>
      <Card>
        <Title>How did we do?</Title>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
        <SubmitButton>Submit</SubmitButton>
      </Card>
    </Container>
  );
}

export default App;
