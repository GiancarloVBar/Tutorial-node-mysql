const express = require('express')
const app = express() //executa a função () e atribui para uma constante
const User = require('./models/User')

app.use(express.json())

/* const db = require('./models/db') */

app.get("/", async (req, res) => {
    res.send("Página inicial - tutorial")
})

/* para cadastrar preciso de uma rota do tipo POST */

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body)

        await User.create(req.body).then(() => {
            return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: usuário não cadastrado!"
        })
    })
    
    //res.send("Página Cadastrar")
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})