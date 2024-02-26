const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const projectSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: [true, 'Please add the name'],
        maxlength: 500
    },
    nombrejours: {
        type: Number,
        trim: true,
        required: [true, 'Please add the duration of project'],
    },
    ressource: {
        type: String,
        trim: true,
        maxlength: 1000

    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add the description'],
        maxlength: 5000

    },
    // user: {
    //     type: ObjectId,
    //     ref: "User",
    //     required: [true, 'Please add the user name'],
    // },


}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);