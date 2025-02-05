//operators function
//A) using eval:
function evalFunction(op, ...nums) {
    let exp = '';

    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
            exp = nums.join(` ${op} `);
            break;
        default:
            return 'Please, enter a valid operator';
    }
    return eval(exp);
}
//Try it
console.log(evalFunction('+', 2, 3, 4));
console.log(evalFunction('-', 10, 2, 3));
console.log(evalFunction('*', 2, 3, 4));
console.log(evalFunction('/', 16, 2, 4));
console.log('---------------------------------------');

//B) using Rest operator:
function restFunction(op, ...nums) {
    switch (op) {
      case '+':
        return nums.reduce((runningTotal, num) => runningTotal + num, 0);
      case '-':
        return nums.reduce((runningTotal, num) => runningTotal - num);
      case '*':
        return nums.reduce((runningTotal, num) => runningTotal * num, 1);
      case '/':
        return nums.reduce((runningTotal, num) => runningTotal / num);
      default:
        return 'Please, enter a valid operator';
    }
  }
  
  // Try it
  console.log(restFunction('+', 2, 3, 4));
  console.log(restFunction('-', 10, 2, 3)); 
  console.log(restFunction('*', 2, 3, 4)); 
  console.log(restFunction('/', 16, 2, 4));

  // another implementation for rest function
//   function restFunction(op, ...nums) {
//     if (nums.length === 0) return 'Please provide numbers to operate on';
    
//     let result = nums[0]; // Initialize with the first number

//     switch (op) {
//         case '+':
//             for (let i = 1; i < nums.length; i++) {
//                 result += nums[i];
//             }
//             break;
//         case '-':
//             for (let i = 1; i < nums.length; i++) {
//                 result -= nums[i];
//             }
//             break;
//         case '*':
//             for (let i = 1; i < nums.length; i++) {
//                 result *= nums[i];
//             }
//             break;
//         case '/':
//             for (let i = 1; i < nums.length; i++) {
//                 result /= nums[i];
//             }
//             break;
//         default:
//             return 'Please, enter a valid operator';
//     }

//     return result;
// }

// // Try it
// console.log(restFunction('+', 2, 3, 4));
// console.log(restFunction('-', 10, 2, 3));
// console.log(restFunction('*', 2, 3, 4));
// console.log(restFunction('/', 16, 2, 4));
