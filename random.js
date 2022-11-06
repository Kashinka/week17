document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('ok').addEventListener('click', calculations);

});

function calculations() {

    let numbers = generate();

    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;
    let mul;
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }

        if (max < numbers[i]) {
            max = numbers[i];
        }

        sum += numbers[i];

        if (i === 0) {
            mul = numbers[i];
        } else {
            mul = mul * numbers[i];
        }
    }

    let middle = sum / numbers.length;

    document.getElementById('numbers').innerHTML = 'числа ' + numbers;
    document.getElementById('min').innerHTML = 'минимальное число ' + min;
    document.getElementById('max').innerHTML = 'максимальное число ' + max;
    document.getElementById('middle').innerHTML = 'среднее арифметическое ' + middle;
    document.getElementById('sum').innerHTML = 'сумма ' + sum;
    document.getElementById('mul').innerHTML = 'произведение ' + mul;
}

function generate() {

    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 20) - 10);
    
    }

    return numbers;
    
}