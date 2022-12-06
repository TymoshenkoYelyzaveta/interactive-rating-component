import { Card, Chip, Paragraph, ThankYouImage, Title } from './components';

type ThankYouCardProps = {
  ratedValue: number;
};

const ThankYouCard = ({ ratedValue }: ThankYouCardProps) => {
  return (
    <Card centeredContent>
      <ThankYouImage />
      <Chip>{`You selected ${ratedValue} out of 5`}</Chip>
      <Title>Thank you!</Title>
      <Paragraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Paragraph>
    </Card>
  );
};

export default ThankYouCard;
