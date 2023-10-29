import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const RegisterPage: React.FC = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleRegister = async () => {
    try {
      const payload = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:8080/user/register",
        payload
      );
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Input placeholder="firstname" onChange={handleFirstnameChange} />
      <Input placeholder="lastname" onChange={handleLastnameChange} />
      <Input placeholder="password" onChange={handlePasswordChange} />
      <Input placeholder="email" onChange={handleEmailChange} />
      <Button onClick={handleRegister}>Register</Button>
    </>
  );
};
