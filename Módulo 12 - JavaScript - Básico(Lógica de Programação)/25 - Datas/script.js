
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds)
// var d = new Date(2018, 08,12,22,45)
// var d = new Date(1000)// assim a funcão vai entender que se trata do milisegundos
// var d = new Date(1000 * 60 * 60 * 24)// assim a função vai para o dia seguinte da data padrao
// var d = new Date("sep 05 2017 23:25:52")//formato de string, ele pode aceitar varios formatos mas não aceita o formato de data do brasil, apenas o norte americano
// var d = new Date("11/05/17 23:25:52")
var d = new Date("05-16-1999")
console.log(d)


// var dias = ["Domingo",'Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
// console.log(dias[d.getDay()])


// console.log(d.getDate())//Retorna o dia exato
// console.log(d.getDay())//Retorna o dia da semana(array[domingo=0...])


console.log(d.setDate("19"))
console.log(d)



