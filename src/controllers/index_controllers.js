module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(`<h1>Bem vindo a página inicial do ToDo App!</h1>
        <br><h2>Para mais instruções de como utilizar a API 
        <a href="https://github.com/Daos7623/todo_app">clique aqui</a></h2><br>`)
    })
}