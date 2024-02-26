const { token } = require("morgan");
const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require('jsonwebtoken');


//check if user is authentificated

exports.isAuthentificated = async (req, res, next) => {
    const { token } = req.cookies;

    //make sure token exists 
    if (!token) {
        return next(new ErrorResponse("you must log in to access this resources", 400));

    }
    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next(new ErrorResponse("you must log in to access this resources", 400));

    }
}