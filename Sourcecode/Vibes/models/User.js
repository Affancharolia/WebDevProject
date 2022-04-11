const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
  ufname: String,
  ulname: String,
  uemail: String,
  upassword: String,
  ucontact: Number,
  ulocation: String,
  udob: Date,
  ugender: String,
  tokens : [{
    token : String
  }]
});

schema.methods.generateAuthToken = async function (){
  try{
    let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({  token:token });
    await this.save();
    return token;
  }catch (err) {
      console.log(err);
  }
}

module.exports = mongoose.model("User", schema);