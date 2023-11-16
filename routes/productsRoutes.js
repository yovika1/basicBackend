const express = require("express");
const router = express.Router();
const { addProducteDetails} = require("../controller/Productcontroller");
const { fetching } = require("../controller/Productcontroller");
const { updateProduct } = require("../controller/Productcontroller");
const {deleteData} = require("../controller/Productcontroller");

router.get('/',(req,res)=>{
    res.send("fetching the route")
})

router.post("/addproductdetails", addProducteDetails);
router.get("/fetchingproductdetails", fetching);
router.patch("/updatedata",updateProduct);
router.delete("/deletedata",deleteData);
module.exports = router;
