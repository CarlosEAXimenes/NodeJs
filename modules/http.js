const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end("<h1>home page</h1>")
    }

    if(req.url === '/users'){
        const users = [
          { nome: "Jose", email: "jose@email.com" },
          { nome: "Maria", email: "maria@email.com" },
        ];

        res.writeHead(200, {"Content-Type": "application/json"}) // Se der tudo certo é enviado o arquivo 
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}`))

