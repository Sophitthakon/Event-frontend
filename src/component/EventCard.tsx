import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import EditModal from "./EditModal";
import { IEventDetail } from "./EventInputModal";

interface Event {
  title: string;
  location: string;
  date: string;
  tag: string;
  countParti: string[];
  max: number;
  _id: string;
  onEdit: (_id: string) => void;
}
const EventCard: React.FC<Event> = ({
  title,
  location,
  date,
  tag,
  countParti,
  max,
  _id,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const initialState: IEventDetail = {
    location,
    max: `${max}`,
    title,
    date,
    tag,
  };
  return (
    <>
      <Card maxW="sm" key={_id}>
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
            <EditModal
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              _id={_id}
              initialState={initialState}
            />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default EventCard;
