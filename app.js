const express = require('express')
const app = express() //executa a função () e atribui para uma constante

/* const db = require('./models/db') */

app.get("/", async (req, res) => {
    res.send("Página inicial - tutorial")
})

/* para cadastrar preciso de uma rota do tipo POST */

app.post("/cadastrar", async (req, res) => {
    res.send("Página Cadastrar")
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})