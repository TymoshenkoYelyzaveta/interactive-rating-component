import { useState } from 'react';
import { Container } from './components';

import RateCard from './RateCard';
import ThankYouCard from './ThankYouCard';

function App() {
  const [ratedValue, setRatingValue] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingButtonClick = (rating: number) => {
    setRatingValue(rating);
  };

  const handleRatingSumbit = () => {
    setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <RateCard
          onRatingButtonClick={handleRatingButtonClick}
          selectedItem={ratedValue}
          onSubmit={handleRatingSumbit}
        />
      ) : (
        <ThankYouCard ratedValue={ratedValue} />
      )}
    </Container>
  );
}
export default App;
