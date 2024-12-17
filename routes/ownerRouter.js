const express = require("express")
const router = express.Router();
const ownerModel = require("../models/owner-model")







// if(process.env.NODE_ENV === "development"){
//     router.post("/create", async (req,res)=>{
//         let owners = await ownerModel.find()
//         if(owners.length > 0 ){
//             return res.status(503).send("you dont have permission")
//         }else{
//             res.send("you can create owner")
//         }

//     })
// }

router.post("/create", async (req, res) => {
    try {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(503).send("you don't have permission");
        } else {
            let {fullname,email, password} = req.body
          let createOwner = await ownerModel.create({
            fullname,
            email,
            password,
           
           })
           res.status(201).send(createOwner)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});



router.get("/", function(req,res){
    res.send("owner")
})


module.exports = router; 
