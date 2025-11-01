const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do Render ou 3000 localmente

// Define o diretório 'public' como o local dos arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});