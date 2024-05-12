const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes =require( './routes/user.routes.js');

dotenv.config();
const app = express();

mongoose
  .connect(
    process.env.MONGO
   )
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(3000, () => {
  console.log("server is running");
});

app.use('/api/user' , userRoutes);
