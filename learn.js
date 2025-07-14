// const dog = {
//     name: 'Bingo',
//     age: 2,
//     bark: function() {
//         console.log(this.name + ' Gau Gau');
//     }
// }

// dog.bark();

// console.log('hello');


// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.bark = function() {
//     //     console.log(this.name + ' Gau Gau');
//     // };
// }

// Dog.prototype.bark = function() {
//     console.log(this.name + ' sua gau gau');
// }

// const dog1 = new Dog('pull', 3);

// console.log(dog1);

// dog1.bark();

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    bark() {
        console.log(`${this.name} + ịn ịn`);
    }

}


const car1 = new Car('Mercedes','Black');

console.log(car1);

car1.bark()