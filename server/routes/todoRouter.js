const express = require('express');
const router = express.Router();
const {createTodo,getAllTodo,getTodo} = require('../controller/todoController');


router.get("/", getAllTodo);
router.get("/:id",getTodo);
router.post("/", createTodo);

router.delete("/:id", (req, res) => {
    res.json({
        msg: "welcome to Todo app"
    })
})

router.patch("/:id", (req, res) => {
    res.json({
        msg: "welcome to Todo app"
    })
})



module.exports = router;