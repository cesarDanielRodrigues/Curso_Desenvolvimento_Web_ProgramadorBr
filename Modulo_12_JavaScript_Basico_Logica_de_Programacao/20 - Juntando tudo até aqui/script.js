
//nome do aluno; nota1;nota2;media; aprovado/reprovado

var nome = ["Igor", "José", "Maria"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]


function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {

    // var resultado = "Reprovado"

    // if(media > 7){
    //     resultado = "Aprovado"
    // }

    if (media > 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }


}


for (index in nome) {

    var nota1 = notasA[index]
    var nota2 = notasB[index]
    var mediaFinal = media(nota1, nota2)


    console.log(nome[index] + " - " + nota1 + " - " + nota2 + " - " + mediaFinal + " - " + passou(mediaFinal))

}

