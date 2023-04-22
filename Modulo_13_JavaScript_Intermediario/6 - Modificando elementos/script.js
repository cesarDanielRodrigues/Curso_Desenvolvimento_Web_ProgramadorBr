// existe 3 maneiras de modificiar um HTML


// //Maneira 1
let p = document.getElementById("p1")
// p.innerHTML = "Novo conteúdo"

// //Maneira 2
// p.innerText = "Conteúdo mais novo"

// //Maneira 3
// p.textContent = "Mais novo ainda"


//Caso houver a necessidade de adicionar alguma tag html, é necêssario usar o innerHTML
// A principal diferença entre o textContent e innerText é que o textContent encontra qualquer texto adicionado no elemento, mesmo se estiver em display none.

// console.log(p.textContent)
p.style = "color:blue;"

//Para selecionar um atribuito não convencional, eu preciso usar
let meuAtt = p.getAttribute("meuAtt")
console.log(meuAtt)

//Para modificar um atribuito não tradicional, eu preciso usar
p.setAttribute("meuAtt","NovoNome")
console.log(p)