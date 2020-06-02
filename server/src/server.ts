import express from 'express';

const app = express();

//O request é usado para obter dados sobre a nossa requisição. Se fosse uma rota de criação de usuário, por exemplo, ele teria os dados do usuário que precisa ser criado (nome, email, senha, data de nascimento, etc...)
//O response serve para devolver uma resposta para o browser.
//Dentro do response.json podemos retornar um objeto ou um array
app.get('/users', (request, response) => {
	console.log('Listagem de usuários');

	//response.send('Hello World');
	response.json([
		'Diego',
		'Cleiton',
		'Robson',
		'Daniel',
		'Júlio',
	])
});

app.listen(3333);