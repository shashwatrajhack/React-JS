const express = require("express");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db.js");
const {cors} = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",function(req,res){

    const createPayload = createTodo;
    const parsedPayload = createTodo.safeParse(createTodo);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"U sent the wrong input"
        })
        return;
    }

});

app.get("/todo",function(req,res){

})

app.put("/completed",async function(req,res){

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"U sent the wrong input"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    }) 
    res.json({
        msg:"Todo created"
    })

})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload  = res.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as complete"
    })


})

app.listen(3000);