import {
  Heading,
  Text,
  VStack,
  Circle,
  Stack,
  Img,
  Badge,
  useColorModeValue,
  Flex,
  Divider,
  Icon,
  Button,
  Tooltip,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";

const Image_Stock = ({ item }) => (
  <Flex flexDir={"column"} h={"270px"}>
    {item.isNew && (
      <Circle
        bg={"green.300"}
        size={"10px"}
        pos={"absolute"}
        top={"2"}
        right={1}
      />
    )}
    <Img src={item.image} alt={item.name} rounded={"xl"} />
    {item.stock <= 1 && (
      <Badge
        bg={"red.200"}
        mt={5}
        w={"fit-content"}
        px={2}
        borderRadius={"lg"}
        fontWeight={"bold"}
        color={useColorModeValue("black", "black")}
      >
        Sold Out
      </Badge>
    )}
    {item.isNew && (
      <Badge
        bg={"green.200"}
        mt={5}
        w={"fit-content"}
        px={2}
        borderRadius={"lg"}
        fontWeight={"bold"}
        color={useColorModeValue("black", "black")}
      >
        New
      </Badge>
    )}
  </Flex>
);


const Rating =({rating,numReviews})=>(
  <HStack spacing={1} mt={1}>
    <Icon as={StarIcon} fontSize={'15px'} color={'orange.500'} />
    <Icon as={StarIcon} fontSize={'15px'} color={rating >=2 ? 'orange.500' :'gray.200' } />
    <Icon as={StarIcon} fontSize={'15px'} color={rating >=3 ? 'orange.500' :'gray.200' } />
    <Icon as={StarIcon} fontSize={'15px'} color={rating >=4 ? 'orange.500' :'gray.200' } />
    <Icon as={StarIcon} fontSize={'15px'} color={rating >=5 ? 'orange.500' :'gray.200' } />
    <Text>{`${numReviews} ${numReviews===1? 'Review':"Reviews"}  `}</Text>

  </HStack>
)



const ProductCard = ({ item }) => {
  return (
    <Stack w={"250px"} px={2} py={5} position={"relative"}>
      <Image_Stock item={item} />
      <Rating rating={item.rating} numReviews={item.numReviews} />
      {/* name and price */}
      <Name_Price item={item} />
    </Stack>
  );
};

export default ProductCard;

const Name_Price = ({ item }) => (
  <Flex flexDirection={"column"} mt={2}>
    <Link as={ReactLink} to={`/product${item._id}`}>
      <Text fontSize={"2xl"} lineHeight={"short"}>
        {item.name}
      </Text>
    </Link>
    <Divider mt={1} />
    <Stack justifyContent={"space-between"} flexDirection={"row"}>
      <HStack spacing={0}>
        <Text fontSize={"xl"}>$</Text>
        <Text fontSize={"2xl"}>{item.price}</Text>
      </HStack>
      <Tooltip
        bg={"gray.200"}
        px={2}
        placement="top"
        label={"add to cart"}
        color={"red.800"}
        rounded={"lg"}
      >
        <Button
          variant={"ghost"}
          p={2}
          px={4}
          fontSize={"2xl"}
          disabled={item.stock <= 0}
        >
          <Icon as={FiShoppingCart} fontSize={"2xl"} cursor={"pointer"} />
        </Button>
      </Tooltip>
    </Stack>
  </Flex>
);
