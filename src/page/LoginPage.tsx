//import { useEffect, useState } from "react";

import {
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Input,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = async () => {
    const payload = { email: email, password: password };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        payload
      );
      if (response.data.status == "ok") {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        alert(response.data.message);
      }
      console.log(response.data.token);
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
        <Box bgColor="#B0926A" padding="50px" width="500px" borderRadius="16px">
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
              Email
            </Text>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
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
            <Text
              _hover={{ textDecoration: "underline" }}
              onClick={() => navigate("/register")}
            >
              Don't have account yet
            </Text>
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
