const express = require('express');
const cors =require('cors');
require('dotenv').config();
const todoRouter = require('./routes/todoRouter')
require('./db');

const app =express();

const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
console.log(req.path,req.method);
next();
});

app.get('/',(req,res)=>{
    res.json({
        msg:"welcome to Todo app"
    })
});

app.use("/api/todo",todoRouter);

app.listen(PORT,()=>{
    console.log("listening on port ",PORT);
});