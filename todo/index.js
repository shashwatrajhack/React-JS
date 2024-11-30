const express = require("express");
const app = express();

app.use(express.json());

app.get("/to-do",function(req,res){

})

app.post("/to-do",function(req,res){

})

app.put("/completed",function(req,res){
    
})

app.listen(3000);