const arr = [20, 7, 8, 10, 89, 100, 45, 17];

// for...in
for (let i in arr) {
  console.log(`forIn: Index: ${i}, Element: ${arr[i]}`);
}
console.log('-------------------------------------');

// for...of
for (let value of arr) {
  console.log(`forOf: Elemnt: ${value}`);
}
console.log('-------------------------------------');
// forEach
arr.forEach((elm, index) => {
  console.log(`forEach: Index: ${index}, Element: ${elm}`);
});