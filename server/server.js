const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/routes");
dotenv.config();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

console.log("connecting to MongoDB...");
mongoose.connect(process.env.DATABASE_ACCESS)
  .then(() => {
    console.log("Database successfully connected");
    // Continue with your application logic here
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    // Handle the error
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
// we are using / as prepending route here, so backend call will be like: http://localhost:4000/api
app.use("/", routeUrls);

app.listen(process.env.PORT || port, () => {
  console.log(`server listening at port ${port}`);
});
