import express from 'express';
import fruitRoutes from'../src/routes/fruitRouts.js';

const app = express();
const port =  3000;

app.get("/fruits",fruitRoutes);

app.listen(port, ()  => {
    console.log(`Servidor rodando na porta: http://localhost:${port}/`);
    
});