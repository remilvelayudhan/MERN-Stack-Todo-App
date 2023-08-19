const {  mongoose } = require('mongoose');
const TodoModel = require('../models/todo');
const TODO_NOTFOUND = "todo not found";
const createTodo = async (req, res) => {
    const { title, dueDate, hourseNeeded } = req.body;
    try {
        const todo = await TodoModel.create({
            title,
            dueDate,
            hourseNeeded
        });
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({ "erorr": error.message });
    }
};


const getTodo = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(500).json({ "erorr": "id not valid" });
        }
        const todo = await TodoModel.find({ _id: req.params.id })
        if (!todo) {
            const TODO_NOTFOUND = "todo not found";
            return res.status(404).json({ "erorr": TODO_NOTFOUND });
        }
        return res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ "erorr": error.message });
    }
}

const getAllTodo = async (req, res) => {
    const todo = await TodoModel.find({}).sort({createdAt:-1});
    res.status(200).json(todo);
}

const deleteTodo = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(500).json({ "erorr": "id not valid" });
    }
const todo = await TodoModel.findByIdAndDelete({_id:req.params.id});
if(!todo){
    return res.status(404).json({ "erorr": TODO_NOTFOUND });
}
return res.status(200).json(todo);
};

const updateTodo = async (req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(500).json({ "erorr": "id not valid" });
    }
    const todo = TodoModel.findByIdAndUpdate({_id:req.params.id},{
        ...req.body
    });
    if(!todo){
        return res.status(404).json({ "erorr": TODO_NOTFOUND });
    }
    return res.status(200).json(todo);
    
};

module.exports = { createTodo,getAllTodo,getTodo };