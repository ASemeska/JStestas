/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const a = parseInt(prompt('Enter the first number '))
console.log(a)
const b = parseInt(prompt('Enter the second number '))
console.log(b)

function calculation(){
    const sum = a + b
    const subtraction = a - b
    const multiplication = a * b
    const division = a / b

    const answer = `NUMBER SUM = ${sum} ; NUMBER SUBTRACTION = ${subtraction} ; NUMBER MULTIPLICATION = ${multiplication} ; NUMBER DIVISION = ${division}`

    console.log(answer)
}

calculation()