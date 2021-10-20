// 1- Dada as idades I, J, K, X, Y. Faça um algoritmo para calcular a média das idades.

const ages = [24, 56, 15, 40, 18]

const average = (array) => {
    
    const sum = array.reduce((acc, item) => {
        return acc + item
    
    })

    return sum / array.length

}

console.log(average(ages))

// 2 - Dada a distância A e o combustível gasto B, faça um algoritmo para calcular o consumo médio.

const averageFuel = (distance, fuel) => {
    return `${(distance.replace(/\D+/g, '') / fuel.replace(/\D+/g, '')).toFixed(1)} km/l`;

}

console.log(averageFuel('517km', '42 litros'))

// 3 - Dados três números (a, b, c), faça um algoritmo para mostrar o menor número.

const numbers = [30, -5, 0]

const lowerNumber = (array) => {
    let result = array[0]

    array.forEach(number => number < result ? result = number : '')

    return result
}

console.log(lowerNumber(numbers))

// 4 - Faça um algoritmo que converta a temperatura de C para F. Utilize a fórmula

const convertCelsiusToFahreinheit = (a) => {
    return `${a * 9 / 5 + 32} °F`

}

console.log(convertCelsiusToFahreinheit(3))

// 5 - Faça um algoritmo para apresentar se dois números são múltiplos.

const multipleNumbers = (a, b) => {

    if (a % b === 0) {
        console.log(`${a} é múltiplo de ${b}`)
    } else {
        console.log(`${a} não é múltiplo de ${b}`)
    } 
    
    if (b % a === 0) {
        console.log(`${b} é múltiplo de ${a}`)
    } else {
        console.log(`${b} não é múltiplo de ${a}`)
    } 

}

multipleNumbers (35, 7)

// 6 - Uma partida de futebol iniciou na hora A e terminou na hora B. Faça um algoritmo que calcule o tempo que durou a partida

const matchTime = (start, end) => {
    let startTime = start.split(':')
    let endTime = end.split(':')
    
    let minutesStarted = (+startTime[0] * 60) + (+startTime[1])
    let minutesEnded = (+endTime[0] * 60) + (+endTime[1])
    let result = (minutesStarted - minutesEnded) * -1

    console.log(`Se passaram ${result} minutos entre ${start} e ${end}`)

}

matchTime('15:30', '16:50')

// 7 - Dada uma lista de números A[1,2,3,…], faça um algoritmo que retorne uma lista somente com os números pares.

const arrayNumbers = [1, 5, 4, 2, 1, 10]

const onlyPairs = (array) => {

    return array.filter(number => number % 2 == 0)

}

console.log(onlyPairs(arrayNumbers))

// 8 - Faça um algoritmo que receba um número e retorne se o número é primo ou não.

const isItPrime = (num) => {

    for (let i = 2; i < num; i++)

      if (num % i === 0) {
        return false
      }

    return num > 1;

}

console.log(isItPrime(2))

// 9 - Faça um algoritmo que receba um número e retorne a tabuada desse número.

const multiplicationTable = (a) => {

    for (let i = 1; i <= 10; i++) {
        console.log(`${a} * ${i} = ${a * i}`)
    }

}

multiplicationTable(2)

// 10 - Faça um algoritmo que receba um número e retorne o Fatorial desse número.


const factorialNumber = (n) => {
    
    let result = n

    for (let i = 1; i < n; i++) {
        result *= i
   
    }

    return result

}

console.log(factorialNumber(5))

// 11 - - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a intersecção das listas

const arrayA = [1, 2, 3, 4]
const arrayB = [1, 2, 5, 8]

const intersectionOfArray = (a, b) => {
    return a.filter(e => b.includes(e))

}

console.log(intersectionOfArray(arrayA, arrayB))

// 12 -  Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a concatenação das listas

const concatArrays = (a, b) => [...a, ...b]

console.log(concatArrays(arrayA, arrayB))

// 13 - Faça um algoritmo que receba uma matriz[i,z] como parâmetro e imprima todos os valores dessa matriz

const arrayZ = [[1, 2, 3, 4], ['a', 'b', 'c', 'd']]

const printZArrays = (array) => {

        array.forEach(item => {
            item.forEach(e => {
                console.log(e)
            })
        })

}

printZArrays(arrayZ)

// 14 - Faça um algoritmo que recebe uma palavra e retorne se a palavra é palíndromo. (Palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa. Ex: osso, Ana e etc).

const testes = ["Osso", "Ana", "Reviver", "Manhã"];

function checkPalindrome(array){

    array.forEach(e => {

        if (e.toLowerCase() === e.split("").reverse().join('').toLowerCase()) {
            console.log(`${e} é palíndromo`)
        } else {
            console.log(`${e} não é palíndromo`)
        }

    })
}

checkPalindrome(testes)