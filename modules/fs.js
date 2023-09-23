const { error } = require('console')
const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error){
        return console.log('Erro: ', error)
    }

    console.log("Pasta criada")
})

// Criar um arquivo, se o arquivo já foi criado ele substitui toda a mensagem dentro dele
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello node!', (error) =>{
    if(error){
        return console.log('Erro: ', error)
    }

    console.log("Arquivo criada")

    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), ', hello world', (error) =>{
        if(error){
            return console.log('Erro: ', error)
        }
    
        console.log("Arquivo Alterado")
    })

    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf8', (error, data) =>{
        if(error){
            return console.log('Erro: ', error)
        }
    
        console.log(data)
     })
})





