import express from 'express';
import corRoutes from'./routes/fruitRouts.js';

const app = express();
const port =  3000;

app.get("/cores",corRoutes);

app.listen(port, ()  => {
    console.log(`Servidor rodando na porta: http://localhost:${port}/`);
    
});