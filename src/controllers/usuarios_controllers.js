const UsuariosDAO = require("../DAO/usuarios_DAO")

module.exports = (app, bd) => 
{
    const usuariosDao = new UsuariosDAO(bd);

    app.get('/usuarios', async (req, resp) =>{
        try{
            const consultUsuarios = await usuariosDao.allUsuarios();
            resp.send(consultUsuarios);
        } catch {
            resp.send(erro);
        }
        
    });

    app.get('/usuarios/:id', async (req, resp) =>{
        let parametro = req.params.id;
        try{
            const consultUsuariosUnico = await usuariosDao.pesqUsuarios(parametro);
            resp.send(consultUsuariosUnico);
        } catch {
            resp.send(erro);
        }
    });

    app.post('/usuarios', async (req, resp) =>{
        let parametro = [req.body.nome, req.body.email, req.body.senha];
        try{
            const adicionausuario = await usuariosDao.adicionaUsuario(parametro);
            resp.send(adicionausuario);
        } catch {
            resp.send(erro);
        }
    });

    app.delete('/usuarios/:id', async (req, resp) => {
        let parametro = req.params.id;
        try{
            const excluirUsuariosUnico = await usuariosDao.excluiUsuario(parametro);
            resp.send(excluirUsuariosUnico);
        } catch {
            resp.send(err);
        }
    });

    app.put('/usuarios/:id', async (req, resp) => {
        let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id]
        try{
            const atualizausuario = await usuariosDao.updateUsuario(parametro);
            resp.send(atualizausuario);
        } catch {
            resp.send(erro);
        }
    });

};