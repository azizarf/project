const express = require("express");
const mongoose = require("mongoose")
const blogRoutes = require("./routes/blog.routes")
const userRoutes = require("./routes/user.routes")
const cors = require("cors")

mongoose.connect("mongodb://127.0.0.1/blogs")
.then(console.log("db isconnected"))
.catch((err)=>{console.log(err)})
    



const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blog",blogRoutes)
app.use("/api/user",userRoutes)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});