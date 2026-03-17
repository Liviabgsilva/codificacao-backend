const express = require('express');
const app = express();

app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('API funcionando');
});


app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})