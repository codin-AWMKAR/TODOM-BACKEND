const express= require("express");
const app = express();
const cors = require ("cors")
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
const path = require("path");
const port = 1000 || process.env.PORT

app.use(express.static(path.resolve(__dirname, "../Frontend", "build")));

// Route for the root URL ("/") to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Frontend", "build", "index.html"));
});
app.use(express.json());
app.use(cors())
// app.get("/",(req,res)=>{
//     res.send("Hello");
// });


app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(port, ()=>{
    console.log("Server Started");
})