const Task = require("../models/task");
const ErrorResponse = require("../utils/errorResponse");

exports.createTask = async (req, res, next) => {


    try {
        const task = await Task.create(req.body);
        res.status(202).json({
            success: true,
            task
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}


exports.displayTask = async (req, res, next) => {


    try {
        const tasks = await Task.find().populate('Project');
        res.status(201).json({
            success: true,
            tasks
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}
