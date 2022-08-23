'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Lead = bizSdk.Lead;
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

let sample_code, field_data, response;
module.exports.getRawValue = async function getRawValue(){
  sample_code = await (new Lead(process.env.LEAD_ID)).get(
      fields,
      params
  );
  response = JSON.stringify(sample_code);
  var obj2 = JSON.parse(response);
  field_data = obj2._data.field_data;
  return field_data;
}

logApiCallResult('sample_code api call complete.', sample_code);

mongoose.connect(process.env.DATABASE_ACCESS, () =>
    console.log("Database connected")
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
// we are using / as prepending route here, so backend call will be like: http://localhost:4000/api
app.use("/", routeUrls);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
