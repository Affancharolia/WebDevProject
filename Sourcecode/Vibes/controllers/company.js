const Company = require("../models/Company");

exports.createCompany = async (req, res) => {

  const {cname, ctype, cnum, cemail, clocation, cdescription} = req.body;

    if (!cname || !ctype || !cnum || !cemail || !clocation || !cdescription){
      return res.status(422).json({});
  }
  else{
    const newCompany = new Company({cname, ctype, cnum, cemail, clocation, cdescription});
    await newCompany.save();
    res.status(200).json({});
  }

  };

  exports.findCompanies = async (req, res) => {
        const getCompanies = await Company.find();
        res.json(getCompanies);
      };
