const express = require("express");
const app = express();

app.use(express.json());


app.post("/todo",(req,res)=>{

});

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){

});

app.listen(3000);