/* 
    MongoDB
    user: David
    password: David1234
*/

import express from 'express'

const app = express()

app.get('/login', (req, res) => {
    res.send('Ok, deu bom')
})

app.listen(3001)

/* 
    1) Tipo de rota / Método HTTP
    2) Endereço
*/