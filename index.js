const express = require('express');  //Cjhamando o express
var app  = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
  res.send(`
  <div>
    <form method="POST">
        <input name="email" placeholder="email">
        <input name="senha" placeholder="Senha">
        <input name="confirmarSenha" placeholder="Confirmar senha">
        <button>Cadastrar</button>
    </form>
  </div>
  `)
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.end("Tudo certo...")
}
)

app.listen(3000, ()=>{
    console.log("Servidor ta onlaine")
})