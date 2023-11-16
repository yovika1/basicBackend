const express = require("express");
const router = express.Router();
const { addUser } = require("../controller/Usercontroller");
const {fetchData} = require("../controller/Usercontroller");
const {updateData} = require("../controller/Usercontroller")
const {deleteData} = require("../controller/Usercontroller");


router.get('/',(req,res)=>{
    res.send("opiuytrz")
})
router.post("/adduser", addUser );
router.get("/fetching", fetchData);
router.patch("/update",updateData);
router.delete("/userdelete", deleteData );


module.exports = router;