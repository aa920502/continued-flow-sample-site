'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Lead = bizSdk.Lead;
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const server_value = require("../server");
let fb_lead_id;

router.post("/url",(req, res) => {
  fb_lead_id = req.body.url;
});

router.get("/lead_retrieval", (req, res) => {
  const api = bizSdk.FacebookAdsApi.init(process.env.ACCESS_TOKEN);
  const showDebugingInfo = true; // Setting this to true shows more debugging info.
  if (showDebugingInfo) {
    api.setDebug(true);
  }
  let url = null;
  const logApiCallResult = (apiCallName, data) => {
    console.log(apiCallName);
    url = apiCallName;
    if (showDebugingInfo) {
      console.log('Data:' + JSON.stringify(data));
    }
  };
  let fields, params;
  fields = [
  ];
  params = {
  };
  let lead_ad_response, field_data, lead_ad_response_json;
  var getRawValue = async function getRawValue() {
    lead_ad_response = await (new Lead(fb_lead_id)).get(
        fields,
        params
    );
    lead_ad_response_json = JSON.stringify(lead_ad_response);
    var lead_ad_response_fields = JSON.parse(lead_ad_response_json);
    field_data = lead_ad_response_fields._data.field_data;
    res.send(field_data);
  }
  getRawValue();
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
