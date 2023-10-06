const express = require("express")
const router = express.Router()
const cadastro = require("../../files/signup")
const login = require("../../files/signin")

const userRepo = require("../../repositories/users");

router.get('/cadastro', (req, res) => {
    res.send(cadastro())
  })
router.post('/cadastro', async (req, res) => {
  await userRepo.create(req.body)
  res.send("tudo Certo")
  })
  router.get('/login', (req, res) => {
    res.send(login())
  })
  module.exports = router