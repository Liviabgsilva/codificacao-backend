import express from 'express'
import fruitRoutes from './routes/fruitRoutes.js'

const app = express()
const port = 3000

// Middleware para permitir que o Express entenda JSON no corpo (body) das requisições
app.use(express.json())

// Prefixo das rotas de frutas
app.use("/fruits", fruitRoutes)

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});