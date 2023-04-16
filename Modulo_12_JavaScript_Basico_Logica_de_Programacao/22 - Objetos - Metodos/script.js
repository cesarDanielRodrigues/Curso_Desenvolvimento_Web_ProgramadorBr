function calcMedia(){
    return (this.notas[0]+this.notas[1])/2
}

var aluno1 = {
    nome: "César",
    notas: [7, 8],
    media: calcMedia
}
var aluno2 = {
    nome: "Marcos",
    notas: [6, 7],
    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media())

console.log(aluno2.nome)
console.log(aluno2.media())