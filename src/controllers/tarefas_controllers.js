const TarefasDAO = require("../DAO/tarefas_DAO")

module.exports = (app, bd) => 
{
    const tarefasDao = new TarefasDAO(bd);

    app.get('/tarefas', async (req, resp) =>{
        try{
            const consultTarefas = await tarefasDao.allTarefas();
            resp.send(consultTarefas);
        } catch {
            resp.send(err);
        }
        
    });

    app.get('/tarefas/:id', async (req, resp) =>{
        let parametro = req.params.id;
        try{
            const consultTarefasUnica = await tarefasDao.pesqTarefas(parametro);
            resp.send(consultTarefasUnica);
        } catch {
            resp.send(err);
        }
    });

    app.post('/tarefas', async (req, resp) =>{
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.params.datacriacao, req.params.id_usuario];
        try{
            const adicionatarefa = await tarefasDao.adicionaTarefa(parametro);
            resp.send(adicionatarefa);
        } catch {
            resp.send(err);
        }
    });

    app.delete('/tarefas/:id', async (req, resp) => {
        let parametro = req.params.id;
        try{
            const excluirTarefasUnica = await tarefasDao.excluiTarefa(parametro);
            resp.send(excluirTarefasUnica);
        } catch {
            resp.send(err);
        }
    });

    app.put('/tarefas/:id', async (req, resp) => {
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.params.datacriacao, req.params.id_usuario]
        try{
            const atualizatarefa = await tarefasDao.updateTarefa(parametro);
            resp.send(atualizatarefa);
        } catch {
            resp.send(err);
        }
    });

};