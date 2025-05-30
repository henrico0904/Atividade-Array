let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador']

//remove as tarefas do indice 2 ao 4 no array
let tarefasRemovidas = tarefas.splice(2, 2)
console.log(`Lista de tarefas atualizada: ${tarefas.join(`, `)}`)
console.log(`Tarefas removidas: ${tarefasRemovidas}`)