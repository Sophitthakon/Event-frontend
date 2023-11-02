import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
interface IEventDetail {
  location: string;
  title: string;
  tag: string;
  date: string;
  max: string;
}

const EventInputModal: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [event, setEvent] = useState<IEventDetail>({
    location: "",
    title: "",
    date: "",
    max: "",
    tag: "",
  });

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

  const handleClickAddEvent = async () => {
    const userAuth = localStorage.getItem("token");

    try {
      const party = await axios.post("http://localhost:8080/party", event, {
        headers: {
          Authorization: `Bearer ${userAuth}`,
        },
      });
      if (party.status == 200) {
        console.log(party.data);
      } else {
        alert("error");
      }
    } catch (error) {
      console.error(error);
    }
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AddIcon />}
        bgColor={"#116A7B"}
        color="gray.100"
      >
        Add Event
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
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
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Event Title</FormLabel>
              <Input
                name="title"
                onChange={handleChange}
                placeholder="Event Title"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Event Tag</FormLabel>
              <Select placeholder="Select option" onChange={handleSelectChange}>
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
                placeholder="DD/MM/YYYY"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Maximum People</FormLabel>
              <Input
                name="max"
                onChange={handleChange}
                placeholder="Maximum people"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClickAddEvent}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventInputModal;

/*  3) get all parties
route: /party
METHOD: GET
HEADER: {'Authorization' : `Bearer ${localstorage.getItem('token')}`}

4) create payties
route: /party
METHOD: POST
HEADER: {'Authorization' : `Bearer ${token}`}
BODY: {
    location: string,
    title: string,
    tag: string,
    date: string,
    max: string

    onst items: Props[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Picker",
    href: "/picker",
  },
  {
    text: "Eater",
    href: "/eater",
  },
];

interface Props {
  text: string;
  href: string;
}

}*/

//stora state

/*const [event, setEvent] = useState<IEventDetail> ({
    location: "",
    title: "",
    tag: "",
    date: "",
    maxPeople: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent((prev) => {
        return {
            ...prev, [e.target.name]: e.target.value,
        }
    });
  };*/
