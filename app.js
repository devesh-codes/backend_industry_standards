const express = require("express")
const app = express()
const port = 4000;



app.get("/", (req,res)=>{
    res.send("root")
})







app.listen(port);