const mongoose = require("mongoose");

// const leadFormSchema = new mongoose.Schema({
//   fullName: String,
//   email: String,
//   phone: Number,
//   city: String,
//   street: String,
//   apt: String,
//   zipcode: String,
//   lead_id: String
// });

const leadFormSchema = new mongoose.Schema({
  name: String,
  lead: String,
});

// module.exports = mongoose.model("myTable", leadFormSchema);
module.exports = mongoose.model("Demo", leadFormSchema), "demo";
