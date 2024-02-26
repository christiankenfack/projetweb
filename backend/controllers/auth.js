const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");

exports.signup = async (req, res, next) => {

    const { email } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {

        return next(new ErrorResponse(`Email already exist`, 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(202).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}

exports.signin = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {

            return next(new ErrorResponse(`Email and password required`, 400));

        }
        // user email 
        const user = await User.findOne({ email });
        if (!user) {

            return next(new ErrorResponse(`invalid credentials`, 400));

        }
        // verify the users password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse(`invalid credentials`, 400));

        }


        generateToken(user, 200, res);

    } catch (error) {

        console.log(error);

        next(new ErrorResponse('Cannot log in, check your credential', 400));
    }
}
const generateToken = async (user, statusCode, res) => {

    const token = await user.jwtGenerateToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(process.env.EXPIRE_TOKEN))
    };
    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        })
}

//LOG OUT USERS 
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        sucess: true,
        message: "Logged out"
    })
}

//Users profil controller

exports.userProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    });
}

exports.singleUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            sucess: true,
            user
        })
    } catch (error) {
        next(new ErrorResponse(`User with id : ${req.params.id} is not found`, 404))
    }
}