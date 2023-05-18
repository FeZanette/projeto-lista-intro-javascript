// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alturaArmazenada = Number(prompt("Digite a altura do retângulo"))
  const larguraArmazenada = Number(prompt("Digite a largura do retângulo"))
  const area = alturaArmazenada * larguraArmazenada
  console.log(area)
}

 
// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  // implemente sua lógica aqui
  const anoAtualArmazenado = Number(prompt("Digite o ano atual"))
  const anoNascimentoArmazenado = Number(prompt("Digite o ano do seu nascimento"))
  const idade = anoAtualArmazenado - anoNascimentoArmazenado
  console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)  
  console.log(imc.toFixed(1))
  return imc
  }


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corA,corB,corC) {
  // implemente sua lógica aqui
  const cor1 = prompt("Quais suas três cores favoritas? Digite a primeira:")
  const cor2 = prompt("Digite sua segunda cor favorita:")
  const cor3 = prompt("Digite sua terceira cor favorita:")
  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
  }


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  console.log(stringMaiuscula)
  return stringMaiuscula
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const numeroDeIngressos = custo/valorIngresso
  console.log(numeroDeIngressos)
  return numeroDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const verifica = string1.length === string2.length
  // console.log(string1.length)
  // console.log(string2.length)
  console.log(verifica);
  return verifica
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  console.log(primeiroElemento);
  return primeiroElemento
 }

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const reverteOrdem = array.reverse()
  const primeiroElemento = array[0]
  console.log(primeiroElemento);
  return primeiroElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  console.log(array)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const condicao1 = (typeof string1 === typeof string2)
  const condicao2 = string1.length === string2.length
  const condicao3 = string1.toLowerCase() === string2.toLowerCase()
  const checaCondicoes = condicao1 && condicao2 && condicao3
  console.log(checaCondicoes)
  return checaCondicoes
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  console.log(anoAtual)

  const anoNascimento = Number(prompt("Digite o ano do seu nascimento:"))
  console.log(anoNascimento)

  const anoEmissaoRG = Number(prompt("Digite o ano da emissao do seu RG:"))
  console.log(anoEmissaoRG)
  
  const idade = anoAtual - anoNascimento
  console.log(idade);

  const tempoDeEmissao = anoAtual - anoEmissaoRG
  console.log(tempoDeEmissao);

  const condicao = (idade <= 20 && tempoDeEmissao >= 5) || (idade > 20 && idade <= 50 && tempoDeEmissao >= 10) || (idade > 50 && tempoDeEmissao >= 15)

  console.log(condicao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  // let anosMultiplosDe400 = (ano %= 400 === 0)
  // let anosMultiplosDe4 = (ano %= 4 === 0)
  // let anosNaoMultiplosDe100 = (ano %= 100 !== 0)
  // console.log((anosMultiplosDe4 && anosNaoMultiplosDe100) || anosMultiplosDe400)
  // return ((ano %= 4 === 0) && (ano %= 100 !== 0)) || (ano %= 400 === 0)

  const anosMultiplosDe400 = (ano % 400 === 0)
  const anosMultiplosDe4 = (ano % 4 === 0)
  const anosNaoMultiplosDe100 = (ano % 100 !== 0)
  console.log((anosMultiplosDe4 && anosNaoMultiplosDe100) || anosMultiplosDe400)
  return ((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt ("Você tem mais de 18 anos?")
  const ensinoMedio = prompt ("Você possui ensino médio completo?")
  const disponibilidade = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
}