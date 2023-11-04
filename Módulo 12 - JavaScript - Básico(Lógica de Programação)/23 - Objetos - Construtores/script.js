


// Primeira forma de criar um constructor
// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }
//INSERÇÃO DENTRO DA PRIMEIRA FORMA(USANDO ARRAY)
// var turma = [
//     criarAluno("Igor", 9, 7),
//     criarAluno("Joao", 4, 3)
// ]


//SEGUNDA FORMA DE CRIAR O CONSTRUCTOR
function aluno(nome,n1,n2){
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function(){
        return (this.nota1 + this.nota2)/2
    }
}
//INSERÇÃO DENTRO DA SEGUNDA FORMA
var a = new aluno("Igor",8,9)
console.log(a)


//CHAMANDO O ARRAY COM O OBJETO DENTRO DE ESTRUTURA DE REPETIÇÃO
// turma.forEach(function (elemento) {
//     console.log(elemento)
// })
// for(var aluno of turma){
//     console.log(aluno)
// }