const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.get("/", (req, res) => {
  res.send("This is working!");
});

router.get("/api", (req, res) => {
  res.json({
    users: ["userOne", "userTwo", "userThree"],
    id: 1,
    date: "Aug.10.2022",
  });
});

router.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(`received ${name} from frontend`);
});

router.post("/signup", (req, res) => {
  console.log(" Received POST request at /signup ");
  console.log(req.body);
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    street: req.body.street,
    apt: req.body.apt,
    zipcode: req.body.zipcode,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
