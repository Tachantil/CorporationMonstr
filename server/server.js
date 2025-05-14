const express = require("express");
require("dotenv").config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello BALAN")
});

app.post("/register", (req,res)=>{
    let data = req.body
    res.status(201).json({message:'Користувач зареєстрований'})
});

app.listen(process.env.PORT, ()=>{
    console.log("Norm")
});

