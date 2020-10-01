/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por executar a aplicação e levantar o servidor local.
 * Data: 30/09/2020
 * Autor: Juan Junger
 */

require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const publicPath = process.env.PUBLIC_PATH || './public'

app.get('/software', (req, res) => res.sendFile(`${publicPath}/software.html`, { root: __dirname }))
app.get('/aplicativo', (req, res) => res.sendFile(`${publicPath}/aplicativo.html`, { root: __dirname }))
app.get('/prototipo', (req, res) => res.sendFile(`${publicPath}/prototipo.html`, { root: __dirname }))

app.use(express.static(publicPath))
app.listen(port, () => console.log(`Application running on port ${port}.`))