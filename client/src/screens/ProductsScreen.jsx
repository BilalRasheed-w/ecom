import { Wrap, WrapItem, Center, Text } from "@chakra-ui/react";
import React from "react";

import { products } from "../products";
import ProductCard from "../components/ProductCard";

const ProductsScreen = () => {
  return (
    <>
      <Wrap spacing={"8"} justify={"center"} minH={"100vh"} pt={"20px"}>
        {products.map((item) => (
          <WrapItem key={item._id} borderWidth={"2px"} p={2} shadow={"xl"} borderRadius={'lg'} >
            <ProductCard item={item} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default ProductsScreen;
