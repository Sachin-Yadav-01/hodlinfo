const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hodlinfo');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Not connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
