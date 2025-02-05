//Rectangle Area
//Using parameters
// let calcArea = (width,height) => width * height;
// console.log(calcArea(10,20));

//using properties (width & height)
let createRect = (width, height) => ({
  width,
  height,
  calcArea() {
    return this.width * this.height;
  },
});

let rect = createRect(10, 20);
console.log(rect.calcArea());