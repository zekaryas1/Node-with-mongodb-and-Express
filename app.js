const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post",require("./routes/posts"));


mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>{
    console.log("connected to db");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{ console.log(`server running on port ${PORT}`) })