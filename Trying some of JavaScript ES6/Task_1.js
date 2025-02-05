//1 Arrow function with array
//A)filter:
const arr= [20, 7, 8, 10, 89, 100, 45, 17];

let oddNumbers = arr.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//B)foreach
arr.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });

//C)sort
//asc:
let ascOrder = arr.slice().sort((a, b) => a - b);
console.log(ascOrder);

//desc
let descOrder = arr.slice().sort((a, b) => b - a);
console.log(descOrder);
