import { Card, CardBody, Heading, Stack, Text, Image } from "@chakra-ui/react";

interface Event {
  title: string;
  location: string;
  date: string;
  tag: string;
  countParti: string[];
  max: number;
}
const EventCard: React.FC<Event> = ({
  title,
  location,
  date,
  tag,
  countParti,
  max,
}) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://media.istockphoto.com/id/1343526918/photo/moody-camping-at-night.jpg?s=612x612&w=0&k=20&c=Qdc0TeMBdDvAYaIOtJpURb56oH7VlJWZf9m50E-jeJY="
            borderRadius="md"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>

            <Text color="blue.600" fontSize="1.5xl">
              Location: {location}
            </Text>
            <Text color="blue.600" fontSize="1.5xl">
              Date: {date}
            </Text>
            <Text>Tag: {tag}</Text>
            <Text>
              People: {countParti.length}/{max}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default EventCard;
