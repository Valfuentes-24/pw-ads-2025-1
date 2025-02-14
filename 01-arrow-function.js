/* função tradicional com 1 parâmetro e 1 linha de corpo*/
function quadrado(n) {
    return n*n
}

console.log(`[TRADI] O quadrado de 7 é`, quadrado(7))

/*
    Função equivalente, usando a sintaxe arrow function 
    -> não necessita de chaves
    -> não necessita de parenteses em torno dos parametros
    -> não necessita da palavra chave "return"
    -> a palavra chave "function" é substituída pela flecha =>
        LOGO APÓS O PARÂMETRO
    -> a arrow function é invocada pelo nome da constante que a recebe
*/

const quadradoA = n => n*n
console.log(`[ARROW] O quadrado de 7 é`, quadradoA(7))

/*
    Função tradicional com mais de um parâmetro e apenas uma linha de corpo com return
*/

function calc(a, b, c){
    return a*b+c
}

console.log(`[TRAD] O resultado do calculo é`, calc(10, 20, 30))

/* 
Equivalente na sintaxe arrow function 
-> quando o número de parametros é DIFERENTE DE 1, os parenteses coltam a ser obrigatórios
*/

const calcA = (a, b, c) => a*b+c
console.log(`[ARROW] O resultado do cálculo é`, calcA(10, 20, 30))

/*
    Função tradicional sem parâmetros, com uma linha de corpo
*/

function msgERRO(){
    return 'ERRO FATAL!!!'
}
console.log(`[TRAD] Mensagem de erro:`, msgERRO())

/*
    equivalente na sintaxe arrow function 
    -> parenteses vazios devem ser usados para marcar o lugar do parametro
*/

const msgERROA = () => 'ERRO FATAL!!!'
console.log(`[ARROW] Mensagem de erro:`, msgERROA())

/* 
    função tradicional com um parametro e várias linhas de corpo
*/

function fatorial(n){
    let resultado = 1
    for(let i=n; i>1; i--) resultado *=i
        return resultado
}

console.log(`[TRAD] O fatorial de 8 é`, fatorial(8))

/*
    equivalente na sintaxe arrow function 
    -> não há economia de linhas no corpo da função 
    -> as chaves voltam a ser obrigatórias
*/

const fatorialA = n =>{
    let resultado = 1
    for(let i=n; i>1; i--) resultado *= i
    return resultado
}

console.log(`[ARROW] O fatorial de 8 é`, fatorial(8))