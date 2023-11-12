const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB);

  console.log(
    `Database Connected: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
