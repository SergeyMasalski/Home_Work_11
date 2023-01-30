// Задание №1
console.log('Задание №1');
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

console.log(`Сумма чисел составляет в диапазоне от ${firstNumber} до ${lastNumber} составляет ${sumOfNumbers}`);

// Задание №2
console.log('\nЗадание №2');
const firstNumbeDivisible = +prompt('Задание №2\nОпределение наибольшего общего делителя\nВведите первое число');
const secondNumbeDivisible = +prompt('Задание №2\nОпределение наибольшего общего делителя\nВведите второе число');
let commonDenominator;

if (firstNumbeDivisible >= secondNumbeDivisible && firstNumbeDivisible !== 0 && secondNumbeDivisible !== 0) {
    for (let i = 1; i <= secondNumbeDivisible; i++) {
        if (firstNumbeDivisible % i == 0 && secondNumbeDivisible % i == 0) commonDenominator = i;
    }
} else if (firstNumbeDivisible < secondNumbeDivisible && firstNumbeDivisible !== 0 && secondNumbeDivisible !== 0){
    for (let i = 1; i <= firstNumbeDivisible; i++) {
        if (firstNumbeDivisible % i == 0 && secondNumbeDivisible % i == 0) commonDenominator = i;
    }
} else if (firstNumbeDivisible === 0 && secondNumbeDivisible !== 0) {
    commonDenominator = secondNumbeDivisible
} else if (firstNumbeDivisible !== 0 && secondNumbeDivisible === 0) {
    commonDenominator = firstNumbeDivisible;
}

if (commonDenominator === undefined && firstNumbeDivisible !== 0 && secondNumbeDivisible !== 0) {
    console.log('Общего делителя у чисел нет');
} else if (commonDenominator > 0 || commonDenominator < 0) {
    console.log(`Наибольший делитель равен ${commonDenominator}`);
} else if (firstNumbeDivisible === 0 && secondNumbeDivisible === 0) {
    console.log('Оба числа равны 0');
}

// Задание №3
console.log('\nЗадание №3');

const dividedNumber = +prompt('Задание №3\nОпределение всех делителей числа\nВведите делимое число');

if (dividedNumber == 0) console.log('Введенное число 0, оно делится на все числа');

for (let i = 1; i <= dividedNumber; i++) {
    if ((dividedNumber % i) == 0) console.log(`Делитель числа равен ${i}`);
}

// Задание №4
console.log('\nЗадание №4');

let digitsOfNumber = +prompt('Задание №4\nОпределение количества цифр числа\nВведите число');
console.log(`Введенное число - ${digitsOfNumber}`);
let j = 0;
while (digitsOfNumber != 0) {
    digitsOfNumber = Math.floor(digitsOfNumber / 10)
    j++
}

console.log(`Количество цифр равно ${j}`);

// Задание №5
console.log('\nЗадание №5');
let userNumber = 0, evenNumber = 0, oddNumber = 0, positiveNumber = 0, negativeNumber = 0, numberZero = 0;

for (let i = 1; i <= 10; i++) {
    userNumber = +prompt(`Задание №5\nОпределение количества положительных, отрицательных, нулей, четных, нечетных\nВведите число №${i}`)
    console.log(`Число №${i} = ${userNumber}`);
    if (userNumber > 0) positiveNumber++;
    if (userNumber < 0) negativeNumber++;
    if(userNumber === 0) numberZero++;
    if(userNumber % 2 === 0) evenNumber++;
    if (userNumber % 2 !== 0) oddNumber++;
}

console.log(`Положительных чисел - ${positiveNumber}`);
console.log(`Отрицательных чисел - ${negativeNumber}`);
console.log(`Нулей - ${numberZero}`);
console.log(`Четных чисел - ${evenNumber}`);
console.log(`Нечетных чисел - ${oddNumber}`);

// Задание №6
console.log('\nЗадание №6');

do {
    let firstNumberCalculator = +prompt('Задание №6\nЗацикленный калькулятор\nВведите первое число');
    let secondNumberCalculator = +prompt('Задание №6\nЗацикленный калькулятор\nВведите второе число');
    let signCalculator = String(prompt('Задание №6\nЗацикленный калькулятор\nВведите действие над числами:\n+\n-\n*\n/'));
    let resultCalculator;

    switch (signCalculator) {
        case '+':
            resultCalculator = firstNumberCalculator + secondNumberCalculator;
            break;
        case '-':
            resultCalculator = firstNumberCalculator - secondNumberCalculator;
            break;
        case '*':
            resultCalculator = firstNumberCalculator * secondNumberCalculator;
            break;
        case '/':
            resultCalculator = firstNumberCalculator / secondNumberCalculator;
            break;
        default:
            break
    }

    console.log(`Значение выражения ${firstNumberCalculator} ${signCalculator} ${secondNumberCalculator} = ${resultCalculator}`);

} while (confirm('Задание №6\nЗацикленный калькулятор\nХотите решить еще один пример?\nОК - да\nОтмена - нет'))


// Задание №7
console.log('\nЗадание №7');

let shiftNumber = String(prompt('Задание №7\nСдвиг цифр числа\nВведите число'));
let shiftSymbol = +prompt('Задание №7\nСдвиг цифр числа\nВведите количество символов сдвига');
console.log(`Первоначальное число - ${shiftNumber}\nСимволов сдвигается -  ${shiftSymbol}`);

for (let i = 1; i <= shiftSymbol; i++) {
    shiftNumber = String(shiftNumber)
    shiftNumber += shiftNumber[0]
    shiftNumber -= shiftNumber[0] * Math.pow(10, (shiftNumber.length - 1))
}

console.log(`Число со сдвигом - ${shiftNumber}`);

// Задание №8
console.log('\nЗадание №8');

let dayNumber = 1;
let userWriteDay;
do {
    switch (dayNumber) {
        case 1: 
        userWriteDay = confirm('Понедельник. Хотите увидеть следующий день?'); 
            break;
        case 2: 
        userWriteDay = confirm('Вторник. Хотите увидеть следующий день?'); 
            break;
        case 3: 
        userWriteDay = confirm('Среда. Хотите увидеть следующий день?'); 
            break;
        case 4: 
        userWriteDay = confirm('Четверг. Хотите увидеть следующий день?'); 
            break;
        case 5: 
        userWriteDay = confirm('Пятница. Хотите увидеть следующий день?'); 
            break;
        case 6: 
        userWriteDay = confirm('Суббота. Хотите увидеть следующий день?'); 
            break;
        case 7: 
        userWriteDay = confirm('Воскресенье. Хотите увидеть следующий день?'); 
            break;
    }
    dayNumber++;
    if (dayNumber == 8) dayNumber = 1;
} while (userWriteDay);

console.log('Ответ в модальном окне');

// Задание №9
console.log('\nЗадание №9\nТаблица умножения');

for (let i = 2; i <= 9; i++) {
    console.log('\n');
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Задание №10
console.log('\nЗадание №10\nУгадай число');
alert('Задание №10\n\nЗагадайте число от 0 до 100')
let N = 50, N1 = 0, N2 = 100, approachNumberWrite;

do {
    approachNumberWrite = +prompt(`Какой из ответов правильный\n1) Загаданное число > ${N}\n2) Загаданное число < ${N}\n3) Загаданное число = ${N}`)
    switch (approachNumberWrite) {
        case 1:
        N1 = N;
        N = Math.round((N1 + N2) / 2);
            break;
        case 2:
        N2 = N;
        N = Math.floor((N1 + N2) / 2);
            break;
        case 3:
        console.log(`Загаданное число - ${N}`);
            break;
    }
    
} while (approachNumberWrite !== 3);