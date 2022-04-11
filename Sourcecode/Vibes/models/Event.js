const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const schema = new mongoose.Schema({
  ename: String,
  etype: String,
  eaccomodation: Number,
  eprice: Number,
  edate: Date,
  elocation: String,
  edescription: String,
  e_cr_id: Schema.Types.ObjectId
});

module.exports = mongoose.model("Event", schema);