const Event = require("../models/Event");

exports.createEvent = async (req, res) => {

    const {ename, etype, eaccomodation, eprice, edate, elocation, edescription} = req.body;

    const e_cr_id = req.userId;
    
    if (!ename || !etype || !eaccomodation || !eprice || !edate || !elocation || !edescription || !e_cr_id){
        return res.status(422).json({});
    }
    else{
    const newEvent = new Event({
        ename, etype, eaccomodation, eprice, edate, elocation, edescription,e_cr_id});
    await newEvent.save();
    res.status(200).json({});
    
  }
  };

  exports.findEvents = async (req, res) => {
    const getEvents = await Event.find();
    res.json(getEvents);
  };

  exports.findUserEvents = async (req,res) => {
    const getUserEvents = await Event.find({e_cr_id:req.userId});
    res.json(getUserEvents);
  };