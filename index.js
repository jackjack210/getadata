const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

dotenv.config({path:"./config.env"});

const DB = process.env.DB
mongoose.connect(DB).then(() =>{
    console.log('DATABASE ON');
}).catch((err) => console.log('DATABASE OFF'));

app.use(express.json());

const feedback = require("./getdata");
app.use("/feed", feedback);

app.get("/", (req, res) => {
    res.send("API link for backend");
  });

app.listen(3005, () =>{
    console.log("http://localhost:3005");
})