const express = require('express');//'express' esta dentro da pasta node_modules
const app = express();

/**
 * DRUD => CREATE(POST, criar), READ(GET, ler), UPDATE(PUT, atualizar), DELETE(DELETE, apagar)
 * 
 * req => requisição, res => resposta
 * 
 * http://meusite.com/ <- GET -> entregue a pagina/
 * http://meusite.com/sobre <- GET -> entregue a pagina/sobre
 */

app.use(express.urlencoded({extended: true}));//para tratar o 'body' das requisições 

app.get('/', (req, res) => {
res.send(`
<form action="/" method="post">
Nome : <input type="text" name="nome"><br><br>
Sobrenome : <input type="text" name="sobrenome">
<button>Enviar</button>
</form>
`);
});

app.post('/', (req, res) =>{
    console.log(req.body);
res.send(`seu nome completo é ${req.body.nome} ${req.body.sobrenome}`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) =>{
    // console.log(req.params);
    // console.log(req.params.idUsuarios);
    console.log(req.query);
    // res.send(req.params.idUsuarios);
    res.send(req.params);
});

// app.get('/contato', (req, res) =>{
// res.send('obrigado por entrar em contato com a gente')
// });

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
});