const express = require('express'); // Import express

const app = express(); //Instanciando o express

app.set("view engine", "ejs"); // Setando o view engine para ejs

app.get("/", (req, res) => { // Criando a rota
    const items = [ 
        { 
            title: "D", 
            message: "esenvolvimento de Sistemas" 
        },
        {
            title: "E",
            message: "studos de Sistemas de Informação"
        },
        {
            title: "M",
            message: "anutenção de Computadores"   
        },
        {
            title: "A",
            message: "dministração de Redes"
            
        },
        {
            title:"I",
            message:"nformática para Internet"
        },
        {
            title:"S",
            message:"egurança da Informação"
        }

    ];// Criando um array de itens]

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    }); // Renderizando a view index
});

app.get("/sobre", (req, res) => { // Criando a rota
    res.render("pages/about"); // Renderizando a view sobre
});

app.listen(8080); // Criando o servidor
console.log("Servidor rodando na porta 8080");