import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const connect =await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error.msg);
  }
};

export default connectDB
