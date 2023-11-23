const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000

app.use(express.json())
/*Nossa base de dados */
const usuarios = []

app.post('/usuarios', (req, res) => {
    /**verifica se usuario já foi cadastrado */
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email == req.body.email){
            res.status(406).send("Usuário já cadastrado");
            return
        }
    }
    let hash = bcrypt.hashSync(req.body.senha,10)
    let obj = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        senha: hash,
        perfil: req.body.perfil
    }
   usuarios.push(obj)
   res.status(201).send(obj)
})

app.post('/usuarios/login', (req, res) => {
    
    res.send('login de usuarios')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})