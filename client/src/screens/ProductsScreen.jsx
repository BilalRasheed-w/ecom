import { Wrap, WrapItem, Center, Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Wrap spacing={"8"} justify={"center"} minH={"100vh"} pt={"20px"}>
        {products.map((item) => (
          <WrapItem
            key={item._id}
            borderWidth={"2px"}
            p={2}
            shadow={"xl"}
            borderRadius={"lg"}
          >
            <ProductCard item={item} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default ProductsScreen;
