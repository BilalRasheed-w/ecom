import User from "../model/UserM.js";

const NewUser = async (req, res, next) => {
  const user = await User.create({ name: req.body.name });
  res.status(200).json({ msg: "user created successfully" });
};

export { NewUser };
