// EXERCÍCIO 001

// EXEMPLO
// 00 - Escreva uma expressão matemática que some os valores 5(number) e 2(number). 
// 00.1 - EXTRA: qual o resultado desta instrução?
// resposta 00.1 -> 7
5 + 2

// 01 - Declare uma variável com o identificador 'var1' sem inicializá-la. (sem atribuir nenhum valor)
// 01.1 - Qual o tipo deste valor? Lembre sempre de usar o DevTools do Chrome para fazer seus testes.
// resposta 01.1 -> 
// DICA: use o operador typeof para fazer seus testes no DevTools


// 02 - Declare uma variável com o identificador 'num' e atribua um valor do tipo Number.


// 03 - Declare uma variável com o identificador 'soma' e atribua a ela a soma dos valores 6(number) e 7(number).


// 04 - Declare uma variável com o identificador 'sub' e atribua a ela a subtração dos valores 4(number) e 9(number).


// 05 - Declare uma variável com o identificador 'saudacao' e atribua a ela o valor Olá (string).


// 06 - Declare uma variável com o identificador 'nome' e atribua a ela o valor [Seu Nome](string).


// 07 - Declare uma variável com o identificador 'concat' e atribua a ela a concatenação entre as variáveis saudacao e nome com um valor
//string de vírgula e espaço entre elas.


// 08 - Declare uma variável com o identificador 'mult' e atribua a ela a multiplicação dos valores 3(number) e 5(number).


// 09 - Declare uma variável com o identificador 'div' e atribua a ela a divisão dos valores 50(number) e 10(number).


// 10 - Declare uma variável com o identificador 'resto1' e atribua a ela o resto da divisão entre os valores 10(number) e 2(number).


// 11 - Declare uma variável com o identificador 'incremento' e atribua a ela o valor 5(number).
// Na linha abaixo use o operador de incremento nesta mesma variável


// 12 - Declare uma variável com o identificador 'decremento' e atribua a ela o valor 100(number).
// Na linha abaixo use o operador de decremento nesta mesma variável.


// 13 - Declare uma variável com o identificador 'logic1' e atribua a ela o valor VERDADEIRO(boolean) em Javascript.


// 14 - Declare uma variável com o identificador 'logic2' e atribua a ela o valor FALSO(boolean) em Javascript.


// 15 - Declare uma variável com o identificador 'logic3' que receba uma operação booleana que compare os valores das variáveis
// soma e sub.


// 16 - Declare uma variável com o identificador 'logic4' que receba uma operação booleana que compare os valores da variável
// mult e o valor numérico 15.


// 17 - Diminua -3 do valor atual da variável soma já declarada, usando o operador de atribuição de subtração "-="


// 18 - Adicione +8 do valor atual da variável sub já declarada, usando o operador de atribuição de soma "+="


// 19 - Divida por 2 o valor atual da variável mult já declarada, usando o operador de atribuição de divisão "/="


// 20 - Multiplique por 3 o valor atual da variável sub já declarada, usando o operador de atribuição de multiplicação "*="

/* 
=============================================================
    PARA QUE O TESTE FUNCIONE, NÃO ALTERE O CÓDIGO ABAIXO! =D
=============================================================
*/

function rodarTestes(){

    const successText = "RESPOSTA CORRETA"
    const errorText = "TENTE OUTRA VEZ"
    
    const printSuccess = (id) => document.getElementById(`${id}`).innerHTML = `${successText}`;
    const printError = (id) => document.getElementById(`${id}`).innerHTML = `${errorText}`;
    
    const expect = (result, id) => ({
        toBe: (expected) => { 
            if (result === expected){
                printSuccess(id)
            } else {
                printError(id)
            }
        },
    
        notToBe: (expected, id) => { 
            if (result !== expected){
                printSuccess(id)
            } else {
                printError(id)
            }
        }
    })
    
    const it = (id, description, result, callback) => {
        //console.log('---', description, result)
        console.log(`${id}`)
        document.getElementById(`${id}`).innerHTML = `${description + result}`;
        callback()
    }
    
    it ('s01', 'EX 01 - "var1" É UNDEFINED? -> ', typeof var1, () => {
        expect(typeof var1, 'e01').toBe('undefined')
    })
    
    it ('s02', 'EX 02 - O TIPO DA VARIÁVEL "num" É number? -> ', typeof num, () => {
        expect(typeof num, 'e02').toBe('number')
    })
    
    it ('s05', 'EX 05 - A VARIÁVEL "saudacao" É "Olá"? -> ', saudacao, () => {
        expect(saudacao, 'e05').toBe('Olá')
    })
    
    it ('s06', 'EX 06 - O TIPO DA VARIÁVEL "nome" É string? -> ', typeof nome, () => {
        expect(typeof nome, 'e06').toBe('string')
    })
    
    it ('s07', 'EX 07 - O TIPO DA VARIÁVEL "concat" É string? -> ', typeof concat, () => {
        expect(typeof concat, 'e07').toBe('string')
    })
    
    it ('s08', 'EX 08 - A VARIÁVEL "mult" É 7.5? -> ', mult, () => {
        expect(mult, 'e08').toBe(7.5)
    })
    
    it ('s09', 'EX 09 - A VARIÁVEL "div" É 5? -> ', div, () => {
        expect(div, 'e09').toBe(5)
    })
    
    it ('s10' ,'EX 10 - A VARIÁVEL "resto1" É 0? -> ', resto1, () => {
        expect(resto1, 'e10').toBe(0)
    })
    
    it ('s11','EX 11 - A VARIÁVEL "incremento" É 6? -> ', incremento, () => {
        expect(incremento, 'e11').toBe(6)
    })
    
    it ('s12', 'EX 12 - A VARIÁVEL "decremento" É 99? -> ', decremento, () => {
        expect(decremento, 'e12').toBe(99)
    })
    
    it ('s13', 'EX 13 - A VARIÁVEL "logic1" É true? -> ', logic1, () => {
        expect(logic1, 'e13').toBe(true)
    })
    
    it ('s14', 'EX 14 - A VARIÁVEL "logic2" É false? -> ', logic2, () => {
        expect(logic2, 'e14').toBe(false)
    })
    
    it ('s15', 'EX 15 - A VARIÁVEL "logic3" É false? -> ', logic3, () => {
        expect(logic3, 'e15').toBe(false)
    })
    
    it ('s16', 'EX 16 - A VARIÁVEL "logic4" É true? -> ', logic4, () => {
        expect(logic4, 'e16').toBe(true)
    })
    
    it ('s17', 'EX 17 - A VARIÁVEL "soma" É 10? -> ', soma, () => {
        expect(soma, 'e17').toBe(10)
    })
    
    it ('s18','EX 18 - A VARIÁVEL "sub" É 9? -> ', sub, () => {
        expect(sub, 'e18').toBe(9)
    })
    
    }
