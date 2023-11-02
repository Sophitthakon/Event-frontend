import { Box, Center, Text } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  creater: string;
  title: string;
  location: string;
  date: string;
  tag: string;
  countParti: string[];
  max: number;
}

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const resp = await axios.get("http://localhost:8080/party");
      console.log(resp);
      const events: any = resp.data;
      setEvents(events);
    };

    fetchEvent();
  }, []);

  return (
    <>
      <NavBar />

      <Center
        bgImage={
          "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwODMtMDVjLmpwZw.jpg"
        }
        bgSize="cover"
        h="100vh"
      ></Center>
    </>
  );
};

export default HomePage;

/*  {events.map((event) => {
          return (
            <Box border="1px solid black" borderRadius="16px" padding="20px">
              <Text> {event.title}</Text>
              <Text> {event.countParti.length}</Text>
              <Text> {event.date}</Text>
              <Text> {event.location}</Text>
            </Box>
          );
        })} */
