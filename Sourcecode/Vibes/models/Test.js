const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    ename: String
  });

const schema = new mongoose.Schema({
  ufname: String,
  ulname: String,
  uemail: String,
  upassword: String,
  ucontact: Number,
  ulocation: String,
  udob: Date,
  ugender: String,
  uevent: [{ename: String}]
});

module.exports = mongoose.model("Test", schema);