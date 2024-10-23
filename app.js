const express = require('express');
const app = express();
const PORT = 3000;
// oi
app.get('/', (req, res) => {
    res.send(`
        <html>
    <head><title>Américo Tadeu</title>
    <style>
    *{
    margin: 0;
    padding: 0;}

    body{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-image: url(https://media.tenor.com/bpNg1Db8CsEAAAAM/dance.gif);
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;}

    .container{
        display: flex;
        gap: 1rem;
        flex-flow: column;
        justify-content: center;
        width: 40%;
        height: 30%;
        background-color: rgba(179, 179, 179, 0.884);
        border-radius: 8px;
    }

    .container a{
        text-decoration: none;
        color: #f1f1f1;
    }

    .container a:hover{
        text-decoration: underline;
    }
    </style>
    </head>
    <body>
        <div class="container">
            <h1>Olá americo, estamos juntos</h1>
            <h2><a href="/sobre">Rock</a></h2>
            <h2><a href="/contato">Supostamente rock</a></h2>
        </div>
    </body>
</html>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
       <html>
    <head><title>Américo Tadeu</title>
    <style>
    *{
    margin: 0;
    padding: 0;}

    body{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-image: url(https://media.tenor.com/bpNg1Db8CsEAAAAM/dance.gif);
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;}

    .container{
        display: flex;
        justify-content: center;
        width: 40%;
        height: 30%;
        background-color: rgba(179, 179, 179, 0.884);
        border-radius: 8px;
        align-items: center;
    }

    .container img{
       max-width: 160px;
    }
    .container a{
        text-decoration: none;
        color: #f1f1f1;
    }

    .container a:hover{
        text-decoration: underline;
    }

    </style>
    </head>
    <body>
        <div class="container">
            <img src="https://i.gifer.com/origin/f5/f5026f5ddbdfacfeab04e4d078175c15_w200.gif" alt="">
            <p><a href="./contato">Supostamente rock</a></p>
        </div>
    </body>
</html>
    `);
});

app.get('/contato', (req, res) => {
    res.send(`
        <html>
    <head><title>Américo Tadeu</title>
    <style>
    *{
    margin: 0;
    padding: 0;}

    body{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-image: url(https://diaderockbaby.wordpress.com/wp-content/uploads/2014/08/waynes-world.gif);
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;}

    .container{
        display: flex;
        justify-content: center;
        width: 40%;
        height: 30%;
        background-color: rgba(179, 179, 179, 0.884);
        border-radius: 8px;
        align-items: center;
        flex-flow: column;
        gap: 0.5rem;
    }

    .container img{
       max-width: 160px;
    }
    .container a{
        text-decoration: none;
        color: #f1f1f1;
    }

    .container a:hover{
        text-decoration: underline;
    }
    h2{
        color: red;
    }

    p{
        text-decoration:line-through;
    }

    </style>
    </head>
    <body>
        <div class="container">
            <h1>Américo me contrata</h1>
            <h2>Nós vamos trazer o rock</h2>
            <p>auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
        </div>
    </body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
