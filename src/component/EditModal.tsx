import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { IEventDetail } from "./EventInputModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  _id: string;
  initialState: IEventDetail;
}

const EditModal: React.FC<Props> = ({ initialState, _id }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [event, setEvent] = useState<IEventDetail>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEvent((prev) => {
      return {
        ...prev,
        tag: e.target.value,
      };
    });
  };

  const onClickUpdate = async () => {
    const userAuth = localStorage.getItem("token");

    try {
      const party = await axios.post(
        `http://localhost:8080/party/update/${_id}`,
        event,
        {
          headers: {
            Authorization: `Bearer ${userAuth}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} bgColor={"#116A7B"} color="gray.100">
        <EditIcon /> edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                onChange={handleChange}
                placeholder="Location"
                value={event.location}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Event Title</FormLabel>
              <Input
                name="title"
                onChange={handleChange}
                placeholder="Event Title"
                value={event.title}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Event Tag</FormLabel>
              <Select
                placeholder="Select option"
                onChange={handleSelectChange}
                value={event.tag}
              >
                <option value="Party">Party</option>
                <option value="Gaming">Gaming</option>
                <option value="Concert">Concert</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                value={event.date}
                placeholder="DD/MM/YYYY"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Maximum People</FormLabel>
              <Input
                name="max"
                onChange={handleChange}
                placeholder="Maximum people"
                value={event.max}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClickUpdate}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default EditModal;
