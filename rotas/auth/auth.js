const express = require("express")
const router = express.Router()

router.get('/cadastro', (req, res) => {
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
  router.get('/login', (req, res) => {
    res.send(`
    <div>
      <form method="POST">
          <input name="email" placeholder="email">
          <input name="senha" placeholder="Senha">
          <input name="confirmarSenha" placeholder="Confirmar senha">
          <button>login</button>
      </form>
    </div>
    `)
  })
  module.exports = router