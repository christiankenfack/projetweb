const Project = require("../models/project");
const ErrorResponse = require("../utils/errorResponse");

exports.createProject = async (req, res, next) => {


    try {
        const project = await Project.create(req.body);
        res.status(202).json({
            success: true,
            project
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}


exports.projectdelete = async (req, res, next) => {
    try {
        const project = await Project.findByIdAndRemove(req.params.id);
        res.status(202).json({
            success: true,
            project
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.projectInfo = async (req, res, next) => {

    try {
        const project = await Project.find();
        res.status(200).json({
            success: true,
            project
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}


