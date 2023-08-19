const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    hourseNeeded: {
        type: Number,
        required: true,
    },
},{
    timestamps: true
});

module.exports =mongoose.model("Todo1",TodoSchema);