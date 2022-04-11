const jwt = require('jsonwebtoken');
const { async } = require('rxjs');
const User = require("../models/User");


const authenticate = async (req, res, next) =>{
        try{
            const token = req.cookies.jwtoken;
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

            const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

            if(!rootUser) { throw new Error('User not found') }

            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;

            next();

        } catch( err ) {
            res.status(401).json({});
            console.log(err);
        }
}

module.exports = authenticate;