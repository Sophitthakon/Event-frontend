//import { useEffect, useState } from "react";

import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const LogingPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = async () => {
    const payload = { email: username, password: password };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        payload
      );
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Center
        minH="100vh"
        bgColor="black"
        backgroundImage={
          "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5NDQtYmItMTYtam9iNTk4LmpwZw.jpg"
        }
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box bgColor="#B0926A" padding="50px">
          <Text
            display="flex"
            justifyContent="center"
            fontWeight="700"
            fontSize="30"
          >
            Login
          </Text>
          <Box>
            <Text pb="10px" fontWeight="700">
              Username
            </Text>
            <Input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Name"
            />
            <Text py="10px" fontWeight="700">
              Password
            </Text>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <Button mt="10px" onClick={handleClickLogin}>
              Submit
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default LogingPage;
/*const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        */
