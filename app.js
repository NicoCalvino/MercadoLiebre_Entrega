const express = require("express")
const { get } = require("http")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3030

app.use(express.static("public"))
app.listen(PORT, function(){console.log(`Mercado Liebre corriendo el puerto ${PORT}`)})

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"views","home.html"))
})

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"views","register.html"))
})

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"views","login.html"))
})