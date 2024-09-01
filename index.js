const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Read All (GET) /personagem
app.get('/personagem', function(req, res){
    res.send(lista.filter(Boolean))
})

// Endpoint Read by ID (GET) /personagem/:id
app.get('/personagem/:id', function(req, res){
    // Acessamos o parâmetro de rota ID
    const id = req.params.id

    // Acessa o item na lista usando o ID -1
    const item = lista[id -1]    

    // Enviamos o item como resposta
    res.send(item)
})

// Sinalizo para o Express que estamos usando JSON no Body
app.use(express.json())

// Endpoint Create [POST] /personagem
app.post('/personagem', function(req, res){
    // Acessamos o Body da Requisição
    const body = req.body

    // Acessamos a propriedade `nome` do body
    const novoItem = body.nome

    // Adicionamos na lista
    lista.push(novoItem)

    // Exibimos uma mensagem de sucesso    
    res.send('Item adicionado com sucesso: ' + novoItem)    
})

// Endpoint Update [PUT] /personagem/:id
app.put("/personagem/:id", function(req, res){
    // Acessamos o ID dos parâmetros de rota
    const id = req.params.id

    // Acessamos o Body da requisição
    const body = req.body

    // Acessamos a propriedade `nome` do body
    const novoItem = body.nome

    // Atualizamos na lista o novoItem pelo ID - 1
    lista[id - 1] = novoItem

    // Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' + id + ' - ' + novoItem)
})

// Endpoint Delete [DELETE] /personagem/:id
app.delete('/personagem/:id', function(req, res){
    // Acessamos o parâmetro de rota
    const id = req.params.id

    // Remover o item da lista usando o ID - 1
    delete lista[id - 1]

    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
})



app.listen(3000)