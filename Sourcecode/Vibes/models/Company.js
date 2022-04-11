const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  cname: String,
  ctype: String,
  cnum: Number,
  cemail: String,
  clocation: String,
  cdescription: String
});

module.exports = mongoose.model("Company", schema);