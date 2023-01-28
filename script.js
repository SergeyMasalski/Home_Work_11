// Задание №1

const firstNumber = +prompt('Задание №1\nВведите первое число дапазона');
const lastNumber = +prompt('Задание №1\nВведите последнее число дапазона');
let sumOfNumbers = 0;

if(firstNumber < lastNumber) {
    for(let i = firstNumber; i <= lastNumber; i++){
        sumOfNumbers += i
    }
} else if (firstNumber > lastNumber) {
    for(let i = firstNumber; i >= lastNumber; i--){
        sumOfNumbers += i
    }
} else {
    sumOfNumbers = lastNumber;
}

console.log(`Сумма чисел составляет ${sumOfNumbers}`);
