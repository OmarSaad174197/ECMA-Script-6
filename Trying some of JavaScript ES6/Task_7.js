// 7) Function to create car objects
function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        carDetails: function() {
            console.log(`Car: ${make} ${model} ${year}`);
        }
    };
}
// creating objects from the function
let car_1 = createCar('Hyundai', 'Verna', 2016);
let car_2 = createCar('BMW', 'X6', 2021);
let car_3 = createCar('MerciedesBenz', 'E180', 2023);
let car_4 = createCar('Toyota', 'Corolla', 2014);
let car_5 = createCar('Kia', 'Cerato', 2011);

// showing car details
car_1.carDetails();
car_2.carDetails();
car_3.carDetails();
car_4.carDetails();
car_5.carDetails();