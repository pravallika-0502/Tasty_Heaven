const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require('cors');

mongoDB();

// Enable CORS for all routes
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Indra   ------");
});
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"

  );
  next();
})


app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.use('/api',require("./Routes/AdminLogin"))
app.use('/api/admin',require("./Routes/AdminData"))




app.listen(port, () => {
  console.log(`server is running ${port}`);
});
