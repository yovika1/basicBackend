const user = require("../schema/user.model");

exports.addUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userdetails = await user.create({
      username,
      email,
      password,
    });

    if (userdetails) {
      res.status(201).send({
        message: "details added sucessfully",
        user: userdetails,
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


// for fetch the data
 exports.fetchData = async(req , res) => {
  const userData = await user.find();
  try {
    if(userData){
      res.status(200).send({
        status:"succes",
        data:userData
      });
    }else{
      res.status(401).send({
        status:"Error",
        error:error.message
      });
    }
  } 

  catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Error",
      error: error.message,
    });
  }
 }

//  for update data

exports.updateData = async (req, res) =>{
  
  const id = "654098ab6d2b846f2eb2e4de";
  
const dataUpdate =  await user.findByIdAndUpdate(id,{ userName:"bin"})
    console.log("this is dataUpdate", dataUpdate);
  
  try {
    if(dataUpdate){
      res.send({
        message:"Data updated sucessfully",
        data:dataUpdate
      })
    }
    else{
      res.status(401).send({
        message:"Error"
      })
    }
    
  } catch (error) {
    res.status(500).send({
      status: "Error",
      error: error.message,
    })
  }

}

// for delete data
 exports.deleteData = async(req, res) => {
  const id = "6538c5b51734504b9bf64b3b"
  const deleteData = await user.findByIdAndDelete(id);


try {
  if(deleteData){
    res.status(200).send({
      message:"data deleted sucessfully",
      data:deleteData

    }) 
  }
  else{
    res.status(401).send({

      message:"Data nor found or nor deleted",
    })
  }

} catch (error) {
  res.status(500).send({
    status:"Error",
    error:error.message
  })

}

}



