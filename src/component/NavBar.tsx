import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import EventInputModal from "./EventInputModal";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

/*const items: Props[] = [
    {
      text: "AddEvent",
      href: "/EventInputModal",
    }
]

interface Props {
    text: string;
    href: string;
}*/

const NavBar: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Box bg={"#CDC2AE"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
          />
          <Flex alignItems={"center"}>
            <EventInputModal
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              pl="20px"
            >
              <Link href={}> My Event </Link>
            </HStack>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              cursor={"pointer"}
              _hover={{ boxshadow: "10px 10px 10px" }}
            >
              <HiOutlineLogout size="30px" onClick={() => navigate("/login")} />
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;

/* onst items: Props[] = [
  {
    text: "Home",
    href: "/",
  },*/
