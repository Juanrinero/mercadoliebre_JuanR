const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,"public");

app.use(express.static(publicPath));

app.listen(3030,() => {
    console.log("Servidor corriendo en el puerto 3030");
});


app.get("/",(req,res) => {res.sendFile(path.join(__dirname,"Views","home.html"))})
app.get("/register",(req,res) => {res.sendFile(path.join(__dirname,"Views","register.html"))})
app.get("/login",(req,res) => {res.sendFile(path.join(__dirname,"Views","login.html"))})
