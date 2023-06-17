"use strict";
const bizSdk = require("facebook-nodejs-business-sdk");
const Lead = bizSdk.Lead;
const express = require("express");
const router = express.Router();
const signUpTemplate = require("../models/SignUpModels");

async function getRawValue(fb_lead_id) {
  let fields, params;
  fields = [];
  params = {};
  let lead_ad_response, field_data, lead_ad_response_json;
  lead_ad_response = await new Lead(fb_lead_id).get(fields, params);
  lead_ad_response_json = JSON.stringify(lead_ad_response);
  var lead_ad_response_fields = JSON.parse(lead_ad_response_json);
  field_data = lead_ad_response_fields._data.field_data;
  res.send(field_data);
}

// Make API request to marketing API to request lead content with lead ID
router.post("/lead_retrieval", (req, res) => {
  // Lead retrieval API reference: https://developers.facebook.com/docs/marketing-api/guides/lead-ads/retrieving/#bulk-read
  const fb_lead_id = req.body.lead.lead_id;
  console.log("received LEAD ID from frontend: " + fb_lead_id);
  const access_token = process.env.ACCESS_TOKEN;
  const api = bizSdk.FacebookAdsApi.init(access_token);
  const showDebugingInfo = true; // Setting this to true shows more debugging info.
  if (showDebugingInfo) {
    api.setDebug(true);
  }
  const logApiCallResult = (apiCallName, data) => {
    console.log(apiCallName);
    if (showDebugingInfo) {
      console.log("Data:" + JSON.stringify(data));
    }
  };
  let fields, params;
  fields = [];
  params = {};

  let lead_ad_response, field_data, lead_ad_response_json;
  var getRawValue = async function getRawValue() {
    lead_ad_response = await new Lead(fb_lead_id.toString()).get(
      fields,
      params
    );
    lead_ad_response_json = JSON.stringify(lead_ad_response);
    lead_ad_response_fields = JSON.parse(lead_ad_response_json);
    field_data = lead_ad_response_fields._data.field_data;
    res.send(field_data);
    logApiCallResult(" api call complete.", lead_ad_response);
  };
  getRawValue();
});

// Simulate a successful signup request, save the form data into MongoDB
router.post("/signup", (req, res) => {
  console.log(" Received POST request at /signup ");
  console.log(req.body);
  const signedUpUser = new signUpTemplate({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    street: req.body.street,
    apt: req.body.apt,
    zipcode: req.body.zipcode,
    lead_id: req.body.lead_id,
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
// read all records from the table
router.get("/records", function (req, res, next) {
  signUpTemplate.find((err, records) => {
    if (!err) {
      res.send(records);
    } else {
      console.log("Error in retrieving data :" + err);
    }
  });
});

/***
 * FOR TEST ONLY
 */
router.get("/api", (req, res) => {
  res.json({
    users: ["userOne", "userTwo", "userThree"],
    id: 1,
    date: "Aug.10.2022",
  });
});

module.exports = router;
