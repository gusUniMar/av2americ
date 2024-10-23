const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Página Inicial</title></head>
            <body>
                <h1>Bem-vindo à Página Inicial!</h1>
                <p><a href="/sobre">Sobre</a></p>
                <p><a href="/contato">Contato</a></p>
            </body>
        </html>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <html>
            <head><title>Sobre</title></head>
            <body>
                <h1>Sobre Nós</h1>
                <p>Esta é uma aplicação de exemplo para demonstrar rotas em Node.js com Express.</p>
                <p><a href="/">Voltar à Página Inicial</a></p>
            </body>
        </html>
    `);
});

app.get('/contato', (req, res) => {
    res.send(`
        <html>
            <head><title>Contato</title></head>
            <body>
                <h1>Entre em Contato Conosco</h1>
                <p>Envie um e-mail para contato@exemplo.com</p>
                <p><a href="/">Voltar à Página Inicial</a></p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
