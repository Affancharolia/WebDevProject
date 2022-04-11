const jwt = require('jsonwebtoken');
const { onErrorResumeNext } = require("rxjs/operators");
const User = require("../models/User");
var express = require('express');
const { async } = require("rxjs");

exports.createUser = async (req, res) => {

        const {ufname, ulname, uemail, upassword, ucontact, ulocation, udob, ugender} = req.body; 


        try {
             const userExist = await User.findOne({uemail:uemail})
             
             if (userExist){
                return res.status(422).json({});
             }
                const newUser = new User({
                                ufname, ulname, uemail, upassword, ucontact, ulocation, udob, ugender
                            });
                            await newUser.save();
                        res.status(201).json({});
        }
        catch (err){
                console.log(err);
        }
        
  
};


exports.validateUser =async(req, res) =>{
        let token;
        try{
                const { uemail, upassword } = req.body;
        
                if( !uemail || !upassword){
                        return res.status(400).json({});
                }
                const userLogin = await User.findOne({ uemail: uemail });

                token = await userLogin.generateAuthToken();

                res.cookie("jwtoken", token, {
                        expires:new Date(Date.now()+25892000000),
                        httpOnly : true
                });

                if(!userLogin || userLogin.upassword != upassword){
                        res.status(400).json({error:"Failed"});
                }else{
                        res.status(200).json({message:"User signinSuccesfull"});
                }
        }catch(err){
                console.log(err);
        }
};