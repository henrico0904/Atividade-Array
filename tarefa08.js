let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador']

// remove o indice e subistitui 3
let tarefaRemovida = tarefas.splice(3, 1)
let tarefaSubistituida = tarefas.splice(3, 0,"dar banho no cachorro")

console.log(`a tarefa removida foi ${tarefaRemovida}`)
console.log(`a tarefa subistituida foi ${tarefaSubistituida}`)
console.table(tarefas)





