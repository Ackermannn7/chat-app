import mongoose from 'mongoose';
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to database successfully!');
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error.message);
  }
};

export default connectToDB;