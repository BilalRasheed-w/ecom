import {
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  Link,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BsFillHeartFill } from "react-icons/bs";

//@ Loops
const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "Cart", path: "/cart" },
];

const NavLink = ({ path, linkName }) => (
  <Link
    as={ReactLink}
    to={path}
    py={2}
    px={2}
    fontWeight={"medium"}
    rounded={"md"}
    _hover={{ bg: "gray.400", color: useColorModeValue("", "black") }}
  >
    {linkName}
  </Link>
);

// # Left component

const Left = () => (
  <HStack w={"full"} justifyContent={["center", "start"]} ms={["none", "5"]}>
    <Link as={ReactLink} to={"/"}>
      <Flex alignItems={"center"}>
        <Icon
          as={BsFillHeartFill}
          color={"red.500"}
          fontSize={"xl"}
          mt={1}
        ></Icon>
        <Text
          ms={1}
          textTransform={"capitalize"}
          fontWeight={"extrabold"}
          fontSize={"xl"}
        >
          nextDeals
        </Text>
      </Flex>
    </Link>
    <HStack display={["none", "block"]}>
      {links.map((link) => (
        <NavLink
          key={link.linkName}
          path={link.path}
          linkName={link.linkName}
        />
      ))}
    </HStack>
  </HStack>
);

const Right = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems={"center"} gap={4}>
      <Icon
        fontSize={"lg"}
        as={colorMode === "light" ? MoonIcon : SunIcon}
        onClick={() => toggleColorMode()}
        cursor={"pointer"}
      ></Icon>
      <NavLink path={"/Signin"} linkName={"SignIn"} />
      <Button
        display={["none", "none", "inline-flex"]}
        bg={"orange.500"}
        _hover={{ bg: "orange.700" }}
        // variant={"ghost"}
        color={"white"}
        as={ReactLink}
        to={"/signup"}
      >
        Sign Up
      </Button>
    </HStack>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <HStack
        h={16}
        bg={useColorModeValue("gray.200", "gray.900")}
        justifyContent={"space-between"}
        px={4}
      >
        {/* //@ menu */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          bg={useColorModeValue("gray.300", "")}
        ></IconButton>
        <Left />
        <Right />
        {/* {isOpen ? (
          <Box pb={4} >
            <Stack spacing={4} >
              {links.map((link) => (
                <NavLink
                  key={link.linkName}
                  path={link.path}
                  linkName={link.linkName}
                />
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </HStack>
    </div>
  );
};

export default Navbar;
