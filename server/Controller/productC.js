import Product from "../model/productM.js";

const getProduct = async (req, res, next) => {
  const product = await Product.find();
  res.json({ msg: product });
};

export { getProduct };
