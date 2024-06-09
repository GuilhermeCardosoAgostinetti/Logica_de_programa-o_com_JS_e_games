// Operadores Lógicos (Condicionais)

// == -> Igualdade
//!= -> Diferença
//> -> Maior que 
//< -> Menor que 
//>= -> Maior Igual que 
//<= -> Menor Igual que


// ---------------------------------------------------------------------------------
// Exemplo
let a = 100;
let b = 200;

let x = a>=b;
let y = a<=b;
let w = a == b;
let z = a!=b;

console.log(x)
console.log(y)
console.log(w)
console.log(z)

// ---------------------------------------------------------------------------------
//Exercícios

let A1 = 2<5 && 15/3 ==5
let A2 = 2<5 || 15/3 ==5
let A3 = !true || 3**2/3 <15-35%7
let A4 = !((5!= 10/2) || true && 2-5>5-2 || true)

let a = 2
let b = 7
let c = 3.5
let l = false

let B1 = b==a*c && (l|| true)
let B2 = b>a || b == a**a

console.log(A1)
console.log(A2)
console.log(A3)
console.log(A4)
console.log(B1)
console.log(B2)

// ---------------------------------------------------------------------------------