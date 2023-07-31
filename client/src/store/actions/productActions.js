import axios from "axios";
import { setError, setLoading, setProducts } from "../slices/productSlice";

export const getProducts = ()=> async (dispatch) => {
    dispatch(setLoading());
    try {
    const  response = await axios.get("http://localhost:4000/api/products");
    const products = response.data.msg
    dispatch(setProducts(products));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An error has occurred"
      )
    );
  }
};
