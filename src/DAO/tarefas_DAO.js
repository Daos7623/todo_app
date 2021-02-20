module.exports = class TarefasDAO {

    constructor(bd) {
        this.bd = bd;
    }

    allTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS', (err, rows) =>{
                if (err) reject('Não foi possível fazer a leitura.');
                else resolve(rows);
            });
        })
    }

    pesqTarefas(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.get('SELECT * FROM TAREFAS WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer sua consulta.');
                else resolve(rows)
            });
        })
    }

    updateTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer a atualização.');
                else resolve('A tarefa foi atualizada com sucesso.');
            });
        })
    }

    adicionaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer o cadastro.');
                else resolve('A tarefa foi cadastrada com sucesso.');
            })
        })
    }

    excluiTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('DELETE FROM TAREFAS WHERE ID = ?', parametro, (err, rows)=>{
                if (err) reject('Não foi possível fazer a exclusão.');
                else resolve('A tarefa foi excluída com sucesso.');
            })
        })
    }
}