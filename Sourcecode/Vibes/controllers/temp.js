const Test = require("../models/Test");

exports.createUser = async (req, res) => {

  const {ufname, ulname, uemail, upassword, ucontact, ulocation, udob, ugender} = req.body; 

  await Test.findOne({uemail:uemail})
          .then(async(userExist) => {
                  if (userExist){
                          return res.status(422).json({ error: "Email already exists" });
                  }

                  const newUser = new Test({
                          ufname: ufname,
                          ulname: ulname,
                          uemail: uemail,
                          upassword: upassword,
                          ucontact: ucontact,
                          ulocation: ulocation,
                          udob: udob,
                          ugender: ugender
                      });
                      await newUser.save();
                      res.redirect("/login")
                  });

};


exports.updateBook = async (req, res) => {
  try {
    const book = await Test.findById(req.params.id);
    console.log(book._id)
    
    book.save();
    res.send({ data: book });
  } catch {
    res.status(404).send({ error: "Book is not found!" });
  }
};


exports.updateBooks = async (req, res) => {
  await Test.findById(req.params.id)
          .then(async(userExist) => {
                  if (!userExist){
                          return res.status(422).json({ error: "User not found" });
                  }

                  const newUser = new Test({
                          ufname: ufname,
                          ulname: ulname,
                          uemail: uemail,
                          upassword: upassword,
                          ucontact: ucontact,
                          ulocation: ulocation,
                          udob: udob,
                          ugender: ugender
                      });
                      await newUser.save();

                  });

};