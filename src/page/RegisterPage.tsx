import {
  Box,
  Button,
  Center,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [register, setRegister] = useState<IRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleClickRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        register
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
        <Box bgColor="#B0926A" padding="50px" width="500px" borderRadius="16px">
          <Text
            display="flex"
            justifyContent="center"
            fontWeight="700"
            fontSize="30"
          >
            Register
          </Text>

          <Box>
            <Text py="10px" fontWeight="700">
              FirstName
            </Text>
            <Input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="Firstname"
            />
            <Text py="10px" fontWeight="700">
              Lastname
            </Text>
            <Input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder="Lastname"
            />
            <Text py="10px" fontWeight="700">
              Email
            </Text>
            <Input type="email" onChange={handleChange} placeholder="Email" />
            <Text py="10px" fontWeight="700">
              Password
            </Text>
            <Input
              type="password"
              onChange={handleChange}
              placeholder="password"
            />
            <Button mt="10px" onClick={handleClickRegister}>
              Sign up
            </Button>
            <Text
              _hover={{ textDecoration: "underline" }}
              onClick={() => navigate("/login")}
            >
              Already have account
            </Text>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default RegisterPage;
