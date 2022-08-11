const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("This is working");
});

app.get("/api", (req, res) => {
  res.json({
    users: ["userOne", "userTwo", "userThree"],
    id: 1,
    date: "Aug.10.2022",
  });
});

app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(`received ${name} from frontend`);
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
