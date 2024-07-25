const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const addRouter = require("./router/userRouter")

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use(cors());
app.use(express.json());
app.use("/api/user", addRouter)
app.listen(500, console.log("server is active"));
