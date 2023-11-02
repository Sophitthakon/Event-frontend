import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Event {
  creater: string;
  title: string;
  location: string;
  date: string;
  tag: string;
  countParti: string[];
  max: number;
}
const EventCard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    const eventInfo = async () => {};
  });
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://media.istockphoto.com/id/1343526918/photo/moody-camping-at-night.jpg?s=612x612&w=0&k=20&c=Qdc0TeMBdDvAYaIOtJpURb56oH7VlJWZf9m50E-jeJY="
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default EventCard;
