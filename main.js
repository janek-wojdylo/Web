const name = 'Janek';
const age = 34;

console.log(`Hej, nazywam się ${name} i mam ${age}lata`);
    





function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber;
}
const myResult = calculate(age);

console.log(myResult);
console.log(age);