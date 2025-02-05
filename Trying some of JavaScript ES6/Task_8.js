// 8) Function to create shape objects
function createShape(type, dimensions) {
    return {
        type: type,
        dimensions: dimensions,
        calcArea: function() {
            switch (this.type) {
                case 'rectangle':
                    return this.dimensions.width * this.dimensions.height;
                case 'circle':
                    return Math.PI * Math.pow(this.dimensions.radius, 2);
                case 'triangle':
                    return (this.dimensions.base * this.dimensions.height) / 2;
                case 'square':
                    return Math.pow(this.dimensions.side, 2);
                default:
                    return 'if you need another shape, please provide it`s implementation';
            }
        },
        // a function that provides the deatils of a specific shape [Shape, Dim, Area]
        shapeDetails: function() {
            console.log(`Shape: ${this.type}`);
            console.log(`Dimensions:`, this.dimensions);
            console.log(`Area: ${this.calcArea()}`);
        }
    };
}

// Creating instances of different shapes
let rectangle = createShape('rectangle', { width: 10, height: 20 });
let circle = createShape('circle', { radius: 5 });
let triangle = createShape('triangle', { base: 6, height: 8 });
let square = createShape('square', { side: 5 });

// Displaying the details of the shape and it`s areas
rectangle.shapeDetails();
circle.shapeDetails();
triangle.shapeDetails();
square.shapeDetails();