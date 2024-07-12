// negative or positive numbers

const numbers =[12, -2, 2, -3, -4, 22, 4, -21];

let positiveNumbres =[];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number >0) {
        positiveNumbres.push(number);
    }
    
}
console.log(positiveNumbres);

