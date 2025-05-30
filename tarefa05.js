let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador']

//verificar se "ir a academia" está no meu array

//incluindo a tarefa "ir a academia" se não estiver no meu array
if (tarefas.includes(`Ir à academia`)) {
    console.log(`ja ta na lista`) 
}
else{
    tarefas.push(`Ir à academia`)
    console.log(`foi adicionado na lista`)
}
console.log(`lista de tarefas: ${tarefas}`)