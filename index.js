const express = require('express');  //Cjhamando o express
var app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const authRotes = require("./rotas/auth/auth")

app.use("/admin", authRotes)


app.listen(3001, () => {
  console.log("Servidor ta onlaine")
})