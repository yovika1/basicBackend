const product = require("../schema/product.model");
// const category = require("../schema/categary.model");

exports.addProducteDetails = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const producteDetails = await product.create({
      name,
      price,
      description,
      // image,
      // user,
      // category
    });
    if (producteDetails) {
      // const category  = await  category.create({n

      // })
      res.status(201).send({
        message: "product details added sucessfully",
        product: producteDetails,
      });
    } else {
      res.status(401).send({
        message: "Error",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.fetching = async (req, res) => {
  try {
    const fetchingproduct = await products.find();
    if (fetchingproduct) {
      res.status(200).send({
        status: "fetchingsucess",
        product: fetchingproduct,
      });
    } else {
      res.status(401).send({
        message: "Error",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Error",
      error: error.message,
    });
  }
};

// update data for products details
exports.updateProduct = async (req, res) => {
  console.log("This is req=>", req);
  try {
    const id = "6549e27f8bd4d89e0316aade";
    const updateData = await product.findByIdAndUpdate(id, { price:520 })
    console.log("updated data",updateData);
    if (updateData) {
      res.send({
        messsage: "your data update sucessfully",
        data: updateData
      })
    }
     else {
      res.status(401).send({
        status: "Error",
      });
    }
  } catch (error) {
    console.log("error");
    res.status(500).send({
      error: error.message,
    });
  }
};

// delete data
exports.deleteData = async(req,res)=>{
  console.log("this is id", req.query.id);
  try {
    // const id="6549e27f8bd4d89e0316aade"
    const producteDetail = await product.findByIdAndDelete(req.query.id);
    if(producteDetail){
      res.status(200).send({
        status:"your data deleted sucessfully",
        data:producteDetail
      })
    }
    else{
      res.status(401).send({
        status:"Error not found the Data",  
      })
    }
  } catch (error) {
    res.status(500).send({
      status:"Error not found the Data",  
      error:error.message
    })
  }
}
