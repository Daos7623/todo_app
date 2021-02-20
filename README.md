# ToDo App

O ToDo App é uma API que segue a arquitetura RESTful e tem como objetivo permitir uma forma fácil e rápida de gerenciar os registros de usuários e tarefas.

## Recursos

- Criação de novos usuários e tarefas;
- Alteração de registros de usuários e tarefas existentes;
- Exclusão de registros de usuários e tarefas existentes;
- Consulta de registros de usuários e tarefas existentes.

## Instalação
Utilize o comando abaixo para baixar todas as dependências necessárias para o funcionamento do projeto:
```sh
npm install 
```
Em seguida, utilize o comando abaixo para inicializar a API:  
```sh
npm start 
```

## Rotas

#### GET
Para consulta de todos os registros:
- http://localhost:8080/usuarios
- http://localhost:8080/tarefas

Para consultas individuais:
- http://localhost:8080/usuarios/id
- http://localhost:8080/tarefas/id

#### POST
Para fazer a criação de novos usuários:
- http://localhost:8080/usuarios 

Utilizar o seguinte padrão no corpo da requisição:

```json
{
	"nome": "nome_do_usuario",
	"email": "email_do_usuario",
	"senha": "senha_do_usuario"
}
```

Para fazer a criação de novas tarefas:
- http://localhost:8080/tarefas 

Utilizar o seguinte padrão no corpo da requisição:

```json
{
	"titulo": "titulo_da_tarefa",
	"descricao": "descrição_da_tarefa",
	"status": "status_da_tarefa",
	"datacriacao": "AAAA-MM-DD",
	"id_usuario": 1
}
```

#### PUT
Para fazer a atualização de usuários:
- http://localhost:8080/usuarios/id 

Utilizar o seguinte padrão no corpo da requisição:
```json
{
	"nome": "nome_do_usuario",
	"email": "email_do_usuario",
	"senha": "senha_do_usuario"
}
```
Para fazer a atualização de tarefas:
- http://localhost:8080/tarefas/id

Utilizar o seguinte padrão no corpo da requisição:
```json
{
	"titulo": "titulo_da_tarefa",
	"descricao": "descrição_da_tarefa",
	"status": "status_da_tarefa",
	"datacriacao": "AAAA-MM-DD",
	"id_usuario": 1
}
```
#### DELETE

Para fazer a exclusão de usuários:
- http://localhost:8080/usuarios/id

Para fazer a exclusão de tarefas:
- http://localhost:8080/tarefas/id

Para utilizar algumas das rotas será necessário baixar algum cliente de API.
Seguem abaixo duas recomendações sem custo:
- https://insomnia.rest/
- https://www.postman.com/
