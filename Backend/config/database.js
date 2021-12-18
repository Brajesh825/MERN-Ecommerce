const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log(`Mongodb connected with server : ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
