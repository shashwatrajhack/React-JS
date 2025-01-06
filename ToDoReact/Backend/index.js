const express = require("express");
const app = express();
const {createTodo} = require("./types");


app.use(express.json());


app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).send({
            msg:"you sent the wrong inputs"
        })
    }

});

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
     const updatePayload = req.body;
     const parsedPayload = updateTodo.safeParse(updatePayload);

     if(!parsedPayload.success){
        res.status(411).send({
            msg:"you sent the wrong inputs"
        });
        return;
     }
});

app.listen(3000);