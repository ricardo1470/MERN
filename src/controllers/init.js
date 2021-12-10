const Task = require('../models/task');

const getInit = async (req, res, next) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
    next();
}

const getInitById = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
    next();
}

const postInit = async (req, res, next) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Task saved' });
    next();
}

const putInit = async (req, res, next) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({ status: 'Task updated' });
    next();
}

const deleteInit = async (req, res, next) => {
    await Task.findByIdAndRemove(req.params.id)
    res.json({ status: 'Task deleted' });
    next();
}

/* export functions*/
module.exports = {
    getInit,
    getInitById,
    postInit,
    putInit,
    deleteInit
}
