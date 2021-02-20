module.exports = class UsuariosDAO {

    constructor(bd) {
        this.bd = bd;
    }

    allUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS', (err, rows) =>{
                if (err) reject('Não foi possível fazer a leitura');
                else resolve(rows);
            });
        })
    }

    pesqUsuarios(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.get('SELECT * FROM USUARIOS WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer sua consulta');
                else resolve(rows)
            });
        })
    }

    updateUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer a atualização');
                else resolve('O usuario foi atualizado com sucesso');
            });
        })
    }

    adicionaUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer o cadastro');
                else resolve('O usuario foi cadastrado com sucesso');
            })
        })
    }

    excluiUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('DELETE FROM USUARIOS WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer a exclusão');
                else resolve('O usuario foi excluído com sucesso');
            })
        })
    }
}