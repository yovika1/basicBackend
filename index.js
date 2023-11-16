const express = require("express");
const app = express();
const dbConnection = require("./connection/connection");
const router = require("./routes/UserRoutes");
const router1 = require("./routes/productsRoutes");
const Port = 4000;
const hostname = "127.0.0.1";

dbConnection();
// app.use(express.json())
app.use(router)
app.use(router1)

app.listen(Port, hostname,() => {
  console.log(`server is running at :http//localhost:${Port}:${hostname}`);;
});

