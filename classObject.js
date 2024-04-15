//shorthand one object creation
let place = {
    firstName: 'Dhaka',
    lastName: 'Rajshahi',
    greet: function () {
        console.log('Object: Welcome to Dhaka');
    }
};
place.greet();

let tour = {
    name: 'Sylhet',
    location: 'Bichanakandi',
    distance: '30 km',
    welcome: function () {
        console.log('Welcome to Sylhet');
    },
    getFullInfo: function () {
        return this.name + ' ' + this.location + ' ' + this.distance;
    }
};


console.log("Object: " + tour.getFullInfo());

//constructor function - for creating multiple similar object with same types
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.getFullInfo = function () {
        return this.brand + ' ' + this.model + ' ' + this.price;
    };
}
let car1 = new Car('Mazda', '540T', 23455);
console.log("Constructor: " + car1.getFullInfo());
let car2 = new Car('Audi', '3F0T', 50455);
console.log("Constructor: " + car2.getFullInfo());

//javascript prototype
