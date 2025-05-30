let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador']
// adiciona "fazer" na frente de cada elemento do array

let palavraAdcionada = tarefas.map(item => "fazer: " + item)
console.table(palavraAdcionada)