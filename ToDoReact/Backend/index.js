const express = require("express");
const app = express();
const {createTodo} = require("./types");


app.use(express.json());


app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).send({
            msg:"you sent the wrong inputs"
        })
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false,

    })

    res.json("Todo created successfully");


});

app.get("/todos",function(req,res){

})

app.put("/completed",async function(req,res){
     const updatePayload = req.body;
     const parsedPayload = updateTodo.safeParse(updatePayload);

     if(!parsedPayload.success){
        res.status(411).send({
            msg:"you sent the wrong inputs"
        });
        return;
    }

    await todo.update({
        id:req.body.id,
    },{
        completed:true,
    })

    res.json({
        msg:"todo marked as completed"
    })

});

app.listen(3000);