# Módulo 4 - Lógica de programação com javascript

## 1. Javascript básico I: gerenciamento de memória dinâmica
JavaScript é tipo o maestro invisível por trás da magia na web. É uma linguagem de programação que deixa as páginas da web dançarem, fazendo coisas como animações, validação de formulários, e interações sem precisar dar um reload na página toda hora. É como o tempero secreto que dá vida aos sites, tornando-os dinâmicos e interativos. Então, quando você clica em um botão e algo legal acontece na tela sem que a página toda recarregue, agradeça ao JavaScript!


O primeiro hello world:
```
  //imprimindo mensagem no terminal
  //';' é opcional
  console.log('hello world')
  console.log("estamos na nossa aula inicial")
```

### Variáveis

Variáveis são espaços de memória onde você pode armazenar diferentes tipos de dados, como números, texto, listas, etc. No contexto de JavaScript, você pode criar uma variável usando as palavras-chave var, let ou const.

- var: Era a forma antiga de declarar variáveis em JavaScript, mas não é tão recomendada hoje em dia devido a algumas peculiaridades de escopo.
- let: É a forma moderna de declarar variáveis que podem ser alteradas posteriormente. Elas têm escopo de bloco, o que significa que só são acessíveis dentro do bloco em que foram definidas.
- const: É usada para declarar variáveis cujo valor não mudará. Elas também têm escopo de bloco.
Aqui está um exemplo de como você pode usar variáveis em JavaScript:

```
/* 
  Utilize sempre o Camel case no Javascript
  Javascript possui tipagem dinâmica: infere os tipos de dados
  Javascript possui uma tipagem fraca

*/
//comando let: cria variável (não precisa especificar tipo)
let nome = 'Bruno' //string
let idade = 27 //number
let altura = 1.75 //number
let estudando = true // boolean / booleano: verdadeiro ou falso

let nulo = null // null
let outro // undefined
let outra = undefined // undefined
var variavel = 30 // declaração de várial de escopo global 

const dataNascimento = '08/11/1996' //não muda, constante

console.log(nome)
console.log(idade)
console.log(altura)
console.log(estudando)

console.log(nome, typeof nome) // typeof: é operador unário
console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)
console.log(nulo, typeof nulo)
console.log(outro, typeof outro)
console.log(outra, typeof outra)
console.log(variavel, typeof variavel)
```

#### Hoisting 

Hoisting é um comportamento em JavaScript onde declarações de variáveis e funções são movidas para o topo do seu contexto de execução durante a fase de compilação, antes da execução real do código. Isso significa que, independentemente de onde uma variável ou função é declarada no código, ela será "elevada" para o topo do seu escopo antes da execução.

Por exemplo:

```
console.log(x); // Saída: undefined
var x = 5;
console.log(x); // Saída: 5
```

No código acima, a declaração da variável x é "elevada" para o topo, então console.log(x) não causa um erro. No entanto, o valor de x ainda é undefined até que seja atribuído o valor 5. Isso ocorre porque apenas a declaração é movida para o topo, não a inicialização.

É importante notar que o hoisting só acontece com a declaração de variáveis usando var. Com let e const, as variáveis são içadas para o topo do seu bloco de escopo, mas não são inicializadas até a linha em que são declaradas, resultando em um comportamento chamado de "temporal dead zone". Isso significa que você não pode acessar essas variáveis antes de sua declaração.

### operadores aritméticos (matemáticos)

Os operadores aritméticos em JavaScript são utilizados para realizar operações matemáticas em números. Aqui estão os operadores aritméticos básicos:

Adição +: Usado para adicionar dois valores.
Subtração -: Usado para subtrair um valor de outro.
Multiplicação *: Usado para multiplicar dois valores.
Divisão /: Usado para dividir um valor pelo outro.
Módulo %: Retorna o resto da divisão entre dois valores.
Aqui estão alguns exemplos de como esses operadores são utilizados:
```
let soma = 10 + 5; // soma é 15
let subtracao = 10 - 5; // subtracao é 5
let multiplicacao = 10 * 5; // multiplicacao é 50
let divisao = 10 / 5; // divisao é 2
let resto = 10 % 3; // resto é 1 (pois 10 dividido por 3 é 3 com resto 1)
```

Além desses operadores, JavaScript também fornece o objeto Math, que contém métodos para realizar operações matemáticas mais avançadas. Aqui estão alguns exemplos:

```
let raizQuadrada = Math.sqrt(25); // raizQuadrada é 5
let potencia = Math.pow(2, 3); // potencia é 8 (2 elevado à potência de 3)
let arredondar = Math.round(4.7); // arredondar é 5 (arredonda para o número inteiro mais próximo)
let teto = Math.ceil(4.2); // teto é 5 (arredonda para cima)
let piso = Math.floor(4.7); // piso é 4 (arredonda para baixo)
let absoluto = Math.abs(-5); // absoluto é 5 (retorna o valor absoluto)
let aleatorio = Math.random(); // aleatorio é um número decimal aleatório entre 0 e 1
```

#### prompt

Para a utilização do prompt com node será necessário a utilização da biblioteca `readline-sync`.
No seu terminal dentro da pasta rode o comando abaixo:
```
npm install readline-sync
```

Utilizando ele no js:
```
const prompt = require('readline-sync')

const idade = prompt.question("Qual eh a sua idade? \n") // será necessário utilizar o .question() após a variável

const idadeNumber = Number(idade)

// Coerção Explicita ( Conversão Manual)
console.log('A sua idade é ', idadeNumber, typeof idadeNumber)
```


O prompt é uma função em JavaScript que exibe uma caixa de diálogo ao usuário, permitindo que ele insira dados. Esses dados podem ser armazenados em uma variável para serem usados posteriormente no código.

Aqui está a sintaxe básica do prompt:

```
let resposta = prompt("Por favor, insira seu nome:");


console.log('Seu nome é: ', resposta)
```

Neste exemplo, quando o código é executado, uma caixa de diálogo aparecerá na tela com a mensagem "Por favor, insira seu nome:". O usuário poderá inserir seu nome e clicar em "OK". O valor inserido pelo usuário será armazenado na variável resposta.

Agora, vamos ver um exemplo mais completo:

```
let nome = prompt("Por favor, insira seu nome:");
if (nome !== null && nome !== "") {
    alert("Olá, " + nome + "! Bem-vindo!");
} else {
    alert("Você não inseriu um nome válido.");
}
```

Neste exemplo, o código pede ao usuário para inserir seu nome. Se o usuário inserir um nome válido (ou seja, não clicar em "Cancelar" e não deixar o campo em branco), uma mensagem de saudação será exibida usando o nome inserido. Caso contrário, uma mensagem informando que um nome válido não foi inserido será exibida.

O prompt é útil para interações simples com o usuário, como solicitar informações ou confirmações antes de prosseguir com determinadas ações no seu código JavaScript.

### Coerção de tipos


ChatGPT
A coerção de tipos em JavaScript é o processo de conversão automática de um tipo de dado para outro durante a avaliação de uma expressão. Isso pode ocorrer de forma implícita, quando o JavaScript converte automaticamente os tipos para realizar uma operação, ou de forma explícita, quando você usa funções para converter explicitamente um tipo de dado em outro.

Existem dois tipos de coerção de tipos em JavaScript:

Coerção Implícita:

Isso ocorre quando o JavaScript converte automaticamente os tipos de dados para permitir a execução de uma operação. Por exemplo, quando você usa o operador de adição + com diferentes tipos de dados, o JavaScript converte os tipos conforme necessário para realizar a operação.
Exemplo de coerção implícita:

```
let x = 5; // x é um número
let y = "10"; // y é uma string
let resultado = x + y; // JavaScript converte x para uma string e então concatena com y
console.log(resultado); // Saída: "510"

```

Coerção Explícita:

Isso ocorre quando você utiliza funções para converter explicitamente um tipo de dado em outro. Por exemplo, você pode usar Number(), String(), Boolean(), entre outras funções, para realizar conversões de tipo explicitamente.
Exemplo de coerção explícita:

```
let numeroString = "10";
let numero = Number(numeroString); // converte a string para um número
console.log(numero); // Saída: 10

```

Aqui estão alguns dos tipos de coerção de tipos em JavaScript:

Coerção de String para Número: Quando uma string que representa um número é convertida para um número.
Coerção de Número para String: Quando um número é convertido para uma string.
Coerção para Booleano: Quando um valor é convertido para um booleano (verdadeiro ou falso).
Coerção para Objeto: Quando um valor primitivo é convertido em um objeto usando o construtor Object().
Coerção para Primitivo: Quando um objeto é convertido em um valor primitivo.
É importante entender como a coerção de tipos funciona em JavaScript para evitar comportamentos inesperados em seu código e garantir que suas operações sejam realizadas corretamente.

Na aula:

```
const prompt = require('readline-sync')

const idade = prompt.question("Qual eh a sua idade? \n")

const idadeNumber = Number(idade)

// Coerção Explicita ( Conversão Manual)
console.log('A sua idade é ', idadeNumber, typeof idadeNumber)

console.log(Number('x'))
console.log(String('10'), typeof String('10'))

console.log(Boolean(2), typeof Boolean(2))
console.log(Boolean(0), typeof Boolean(0))
console.log(Boolean(-1), typeof Boolean(-1))

// Coerção Implicita ()
console.log(1 + "1") // 11 - aqui ele tenta fazer a conversão normal, o mais próximo seria realizar uma concatenação
console.log(10 + "5") // 105
console.log("10" + 5) // 105
console.log(10 - "5") // 5
console.log(10 * "5") // 50
console.log(10 / "5") // 2


// Qual será a saída desse código?
let n = 1 + '1'

n = n - 1

console.log(n) // 10

// Qual será a saída desse código?
console.log( 2 + 3 + 4 + '5') // 95

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4) // 5234

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5') //15
```

## 2. Javascript básico II: condicionais

### operadores booleanos
Em JavaScript, os operadores booleanos são utilizados para avaliar expressões e retornar um valor verdadeiro (true) ou falso (false). Esses operadores são comumente usados em estruturas de controle de fluxo, como condicionais e loops, para tomar decisões com base nas condições especificadas. Os principais operadores booleanos em JavaScript são && (AND), || (OR) e ! (NOT).

- AND (&&): Retorna verdadeiro se ambas as expressões forem verdadeiras.
```
var x = 5;
var y = 10;
var z = 15;
if (x < y && y < z) {
    console.log("x é menor que y e y é menor que z");
}
```

- OR (||): Retorna verdadeiro se pelo menos uma das expressões for verdadeira.
```
var temperature = 25;
if (temperature > 30 || temperature < 10) {
    console.log("A temperatura está extremamente alta ou baixa");
}
```

- NOT (!): Inverte o valor de uma expressão booleana.

```
var loggedIn = false;
if (!loggedIn) {
    console.log("O usuário não está logado");
}
```

Além desses operadores, também existe o operador de igualdade estrita (===), que retorna verdadeiro se os operandos forem iguais e do mesmo tipo, e o operador de diferença estrita (!==), que retorna verdadeiro se os operandos não forem iguais e/ou não forem do mesmo tipo.

Exemplos da aula:

```
// Operadores booleanos: Comparações

const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2) // false
console.log(numero1 === numero2) // false
console.log(numero1 === '10') // false - valida também o tipo do dado
console.log(numero1 == '10') // false - valida o valor

console.log(numero1 !== numero2) // true
console.log(numero1 != '10') // false

console.log(numero1 >= numero2)

const idadePessoa1 = 16
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18)

console.log(!true) // not/negação

console.log(!(idadePessoa1 >= 18)) // retorna verdadeiro se a pessoa for meno de idade
```


### Estruturas de controle de fluxos e condicionais
Em JavaScript, as estruturas de controle de fluxo são usadas para determinar o fluxo de execução do programa com base em condições ou iterações. As estruturas de controle de fluxo mais comuns são os condicionais (como if, else if, else) e os loops (como for, while, do-while). Aqui estão exemplos de como usar essas estruturas:
- Condicional if:
```
var idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

```

- Condicional else if:
```
var hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

```
- Loop for:


```
for (var i = 0; i < 5; i++) {
    console.log("O valor de i é " + i);
}

```
- Loop while:

```
var contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

```

Essas estruturas de controle de fluxo permitem que você controle o comportamento do seu programa com base em condições e iterações, tornando seu código mais dinâmico e adaptável. 

Exemplos da aula

```
const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade? \n'))

const ehMaiorDeIdade = idade >= 18

console.log(ehMaiorDeIdade)

// Estrutura condicional: if/else

if(ehMaiorDeIdade){
  // faça alguma coisa
  console.log('Você é maior de idade!')
} else {
  console.log("Você é menor de idade.")
}

const mediaDoAluno = 10

// Média >=7 => aprovado
// Média < 7 e Média >=5 => Prova final 
// Média < 5 => Reprovvado

if(mediaDoAluno >= 7){
  console.log("Aprovado!")
  console.log("Parabéns! 😁👏")
} else if ( mediaDoAluno >= 5){
  console.log("Prova final!")
} else {
  console.log("Reprovado")
}


// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH

const idadeDaPessoa = 18
const temCNH = true

if (idadeDaPessoa >= 18 && temCNH){
  console.log("Você pode dirigir!")
} else {
  console.log("Você não pode dirigir!")
}
```

Além das estruturas de controle de fluxo mencionadas anteriormente (condicionais e loops), JavaScript também oferece outras estruturas úteis para controlar o fluxo de execução do programa:

- Switch Case:
O switch é usado para avaliar uma expressão e executar o bloco de código associado ao caso que corresponde ao valor da expressão.

```
var dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    // Outros casos...
    default:
        console.log("Dia inválido");
}

```

 - Break e Continue:
O break é usado para sair de uma estrutura de controle (como switch ou loop) e o continue é usado para pular para a próxima iteração de um loop.

```
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Sai do loop quando i for igual a 3
    }
    console.log("i: " + i);
}

for (var i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Pula para a próxima iteração quando i for igual a 2
    }
    console.log("i: " + i);
}

```

- Try Catch Finally:
As estruturas try, catch e finally são usadas para manipulação de exceções (erros) em JavaScript.

```
try {
    // Bloco de código que pode gerar um erro
    var resultado = soma(10, "abc"); // Erro: "abc" não é um número
} catch (erro) {
    // Bloco de código para tratar o erro
    console.log("Ocorreu um erro: " + erro.message);
} finally {
    // Bloco de código opcional que é sempre executado, independentemente de ocorrer um erro ou não
    console.log("Finalizando...");
}

```

Essas são algumas das outras estruturas de controle de fluxo em JavaScript que permitem controlar o fluxo de execução do seu código de maneira mais eficiente e robusta.

E essas são consideradas estruturas modernas

- For...in:
O loop for...in é usado para iterar sobre as propriedades de um objeto.

```
var pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
for (var propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}

```

- For...of:
O loop for...of é usado para iterar sobre objetos iteráveis (como arrays e strings).
```
var numeros = [1, 2, 3, 4, 5];
for (var numero of numeros) {
    console.log(numero);
}

```

JavaScript introduziu estruturas de repetição modernas com for...of, for await...of para iterar sobre iteráveis assíncronos, e Array.prototype.forEach() para iterar sobre arrays.
```
// Exemplo com for...of
const frutas = ["Maçã", "Banana", "Morango"];
for (const fruta of frutas) {
    console.log(fruta);
}

// Exemplo com forEach()
frutas.forEach(function(fruta) {
    console.log(fruta);
});

```

- Operador Ternário:
O operador ternário (? :) é uma forma concisa de expressar uma operação condicional.
```
var idade = 20;
var status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status);

```

- Labelled Statements:
Você pode rotular loops e blocos para referenciá-los de forma explícita.
```
outerloop:
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerloop;
        }
        console.log('i = ' + i + ', j = ' + j);
    }
}

```

 - Async/Await:
Essas palavras-chave são usadas para lidar com operações assíncronas de forma síncrona, simplificando o código e tornando-o mais legível.

```
async function obterDados() {
    try {
        let resposta = await fetch('https://api.exemplo.com/dados');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.log('Ocorreu um erro: ', erro);
    }
}

```

### Thruty e Falsy

Em JavaScript, valores "truthy" e "falsy" referem-se à maneira como certos valores são avaliados em contextos booleanos, como em instruções condicionais (if), operadores lógicos (&&, ||), entre outros. Valores "truthy" são aqueles que são considerados como verdadeiros quando avaliados como booleanos, enquanto valores "falsy" são aqueles que são considerados como falsos.

Aqui está uma lista dos principais valores "falsy" em JavaScript:

false
0 (zero)
"" (string vazia)
null
undefined
NaN (Not a Number)
Todos os outros valores que não estão nesta lista são considerados "truthy", incluindo, por exemplo, strings não vazias, números diferentes de zero, objetos, arrays, funções, etc.

```
var x = 10;

if (x) {
    console.log("x é truthy"); // Esta condição será verdadeira, pois x contém um valor diferente de zero
}

var y = "";

if (!y) {
    console.log("y é falsy"); // Esta condição será verdadeira, pois y é uma string vazia, que é falsy
}

var z = null;

if (z === null) {
    console.log("z é falsy"); // Esta condição será verdadeira, pois z é null, que é falsy
}

var objeto = {};

if (objeto) {
    console.log("objeto é truthy"); // Esta condição será verdadeira, pois objeto é um objeto vazio, que é truthy
}

```

Entender os conceitos de "truthy" e "falsy" é importante ao lidar com expressões booleanas em JavaScript, pois permite escrever código mais conciso e expressivo.