# TIPOS DE OPERADORES


- **ARITMÉTICOS** `-> aula 07`
- **de ATRIBUIÇÃO** `-> aula 07`
- **RELACIONAIS** `-> aula 08`
- **LÓGICOS** `-> aula 08`
- **TERNÁRIO** `-> aula 08`

### OPERADORES ARITMÉTICOS

```javascript
5 + 2 //-> 7 [SOMA]
5 - 2 //-> 3 [SUBTRAÇÃO]
5 * 2 //-> 10 [MULTIPLICAÇÃO]
5 / 2 //-> 2.5 [DIVISÃO]
5 % 2 //-> 1 [RESTO]
5 ** 2 //-> 25 [POTÊNCIA]
```

#### ORDEM DE PRECEDÊNCIA DE OPERADORES ARITMÉTICOS


1. Parênteses -> `()`
2. Potência -> `**`
3. Multiplicação, divisão e resto -> `*` `/` `%`
4. Soma e subtração -> `+` `-`


### OPERADORES DE ATRIBUIÇÃO

##### Atribuição Simples

```javascript
var a = 5 + 3 //-> 8
var b = a % 5 //-> 3
var c = 5 * b ** 2 //-> 45
var d = 10 - a / 2 //-> 6
var e = 6 * 2 / d //-> 2
var f = b % e + 4 / e //-> 3
```

##### Auto-atribuição

```javascript
var n = 3

n = n + 4 //-> 7
n = n - 5 //-> 2
n = n * 4 //-> 8
n = n / 2 //-> 4
n = n ** 2 //-> 16
n = n % 5 //-> 1
```

##### Auto-atribuição SIMPLIFICADA

```javascript
var y = 3

y += 4 //-> y = y + 4 
y -= 5 //-> y = y - 5  
y *= 4 //-> y = y * 4 
y /= 2 //-> y = y / 2 
y **= 2 //-> y = y ** 2 
y %= 5 //-> y = y % 5
```

##### Operadores de Incremento

```javascript
var z = 5

z++ //-> z += 1 || z = z + 1
z-- //-> z -= 1 || z = z - 1
```
### OPERADORES RELACIONAIS


- **`>`** -> Maior que
- **`<`** -> Menor que
- **`>=`** -> Maior ou igual
- **`<=`** -> Menor ou igual
- **`==`** -> Igual
- **`!=`** -> Diferente
- **`===`** -> Igual e do mesmo tipo?
- **`!==`** -> Diferente e tipos diferentes?


```javascript
5 > 2 //-> true
7 < 4 //-> false
8 >= 8  //-> true
9 <= 7  //-> false
5 == 5  //-> true
4 != 4  //-> false
```

### OPERADORES LÓGICOS

- **`!`** -> Negação
- **`&&`** -> E (conjunção)
- **`||`** -> OU (disjunção)

```javascript
// NEGAÇÃO -> Operador Unário
!true //-> false
!false //-> true
```

```javascript
// CONJUNÇÃO -> Operador Binário
true && true //-> true
true && false //-> false
false && true //-> false
false && false //-> false
```

```javascript
// DISJUNÇÃO -> Operador Binário
true || true //-> true
true || false //-> true
false || true //-> true
false || false //-> false
```

#### PRECEDÊNCIA DE OPERADORES DE TIPOS DIFERENTE

1. Operadores Aritméticos `()` `**` `/` ...
2. Operadores Relacionais `>` `<` `>=` ... 
3. Operadores Lógicos
    3.1 **`!`**
    3.2 **`&&`**
    3.3 **`||`**

```javascript
// EXEMPLOS
idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?
```

### OPERADOR TERNÁRIO

Composto pelos caracteres **`?`** e **`:`**
Primeiro vem o teste lógico.
Se o teste for `true` o valor após a interrogação **`?`** será retornado.
Se o teste for `false` o valor após os 'dois pontos' **`:`** será retornado.

```javascript
let media = 8
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Aprovado
media = 5.7
media >= 7.0 ? "Aprovado" : "Reprovado" //-> Reprovado
```