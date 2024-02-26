const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const moment = require('moment');


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add the name'],
        maxlength: 32
    },
    level: {
        type: String,
        trim: true,
        required: [true, 'Please add the level of the task'],
    },
    dateStart: {
        type: Date,
        get: function (value) {
            return moment(value).format("DD/MM/YYYY");
        },
        set: function (value) {
            this._dateStart = value;
        },
        // required: [true, 'Please add the Startdate of the task'],
    },
    dateEnd: {
        type: Date,
        get: function (value) {
            return moment(value).format("DD/MM/YYYY");
        },
        set: function (value) {
            this._dateEnd = value;
        },
        //  required: [true, 'Please add the ENDdate of the task'],
    },

    project: {
        type: ObjectId,
        ref: 'Project',
        required: [true, "Entrer le nom du projet"],
    }
}, { timestamps: true });

taskSchema.virtual('formattedDateStart').get(function () {
    return moment(this._dateStart, "DD/MM/YYYY").toISOString();
});

taskSchema.virtual('formattedDateEnd').get(function () {
    return moment(this._dateEnd, "DD/MM/YYYY").toISOString();
});

module.exports = mongoose.model("Task", taskSchema);