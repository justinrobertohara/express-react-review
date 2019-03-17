// Controller here
const todoList = [];



const controller = {
    get: (req, res) => {
        res.status(200).send(todoList)
    },
    post: (req, res) => {
        const todo  = req.body.todo;
        todoList.push(todo)
        res.status(201).send(todoList)
    },
    delete: (req, res) => {
        const { index } = req.query;
        todoList.splice(index, 1);
        res.status(202).send(todoList);
    }
}

module.exports = controller;