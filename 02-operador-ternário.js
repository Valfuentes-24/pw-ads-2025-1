let media = 7.4, resultado

if (media>=6){
    resultado = 'APROVADO'
}
else {
    resultado = 'REPROVADO'
}
console.log('media:', media, ', situação:', resultado)

// usando o operador ternário
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO'
// tradução: média é igual/maior q 6? entaão aprovado, senão reprovado
console.log('Média:', media, ', situação:', resultado)

//modo function tradicional
let user = 'guest', msg
/*
    quando há apenas ima linha após o if, um while, etc. podemos omitir as chaves
*/
if(user === 'admin') msg = 'Bem Vindo!'
else msg='Acesso Negado!'
console.log(user, msg)

//usando o operador ternário
msg = user === 'admin' ? 'Bem Vindo' : 'Acesso Negado!'
console.log(user, msg)