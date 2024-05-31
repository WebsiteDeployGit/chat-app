import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000, // Increase timeout to 50 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
  };

  try {
    await mongoose.connect(process.env.MONGO_DB_URI, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};

export default connectToMongoDB;
