const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("hello");
})

app.listen(6969,(req,res)=>{
    console.log("Noob");
})