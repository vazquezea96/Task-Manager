const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(
      `Connected to MongoDB ${conn.name} at ${conn.host}:${conn.port}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
