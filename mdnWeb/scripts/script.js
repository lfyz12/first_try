// let person = {
//     name: 'Jery',
//     age: 12,
//     inf() {
//         console.log(`My name is ${this.name}, i ${this.age} y.o.`);
//     }
// };

// let person2 = {
//     name: 'Jery',
//     age: 12,
//     inf() {
//         console.log(`My name is ${this.name}, i ${this.age} y.o.`);
//     }

// };

// person2.inf();


// function person(name) {
//     const obj = {};
//     obj.name = name;

//     obj.introduceName = function() {
//         console.log(`My name is ${this.name}`);
//     } ;

//     return obj;
// }

// const dary = person('Dary');
// const jake = person('Jake');

// console.log(dary.name);
// dary.introduceName();

// console.log(jake.name);
// jake.introduceName();

// function NewPerson(name) {
//     this.name = name;
//     this.introduceSelf = function() {
//         console.log(`My name is ${this.name}`);
//     };
// }

// const fav = new NewPerson('Fav');
// console.log(fav.name);
// fav.introduceSelf();

// const salva = new NewPerson('Salva');

// console.log(salva.name);
// salva.introduceSelf();

// const myNotification = new Notification("Hello!");

// console.log(myNotification);

// function CatProp(name, breed, color) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.greeting = function() {
//       console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     }
//   }
  
//   const cat = new CatProp('Bertie', 'Cymric', 'white');
//   const cat2 = new CatProp('Elfie', 'Aphrodite Giant', 'ginger');
    
//   cat.greeting();  
//   cat2.greeting();

// function Person(first, last) {
//   this.name = {
//     first: first,
//     last: last
//   };
//   this.sayhi = function() {
//     console.log('Hi! I\'m ' + this.name.first+ ' ' + this.name.last);
//   };
// }

// const person1 = new Person('Bob','Smith');

// const person2 = Object.create(person1);

// const person3 = {
//     name: 'Roma',
//     lastname: 'Fat'
// };

// Object.assign(person3.prototype(), Person);
// person3.sayhi();


// person2.name.first = 'Ilya';
// person2.name.last = 'Statham';



// person2.sayhi();
// person1.sayhi();

// function Car(marc, model) {
//     this.name = marc;
//     this.model = model;

//     this.carName = function() {
//         console.log('The ' + this.name + ' ' + this.model);
//     };
// }

// const car1 = new Car('Toyota', 'Camry');
// const car2 = new Car('Mercedec', 'E012');

// car1.carName();
// car2.carName();

function Person(first, last, age) {
    this.age = age;
    this.name = first;
    this.lastName = last;

    this.inf = function() {
        console.log('My name is ' + this.name + ' and I ' + this.lastName);
    };
}

const person1 = new Person('Ilya', 'Statham', 2);
const person2 = new Person('Roma', 'Fat', 12);
const person3 = new person1.constructor('Misha', 'Whore', 16);

person3.name = 'Sanya';
person2.name = 'Lil';

// console.log(person1.__proto__);
// console.log(person2.__proto__);
// console.log(person3.__proto__);

person1.inf();

person2.inf();
person3.inf();

Person.prototype.sayhi = function() {
    console.log('I ' + this.name);
};


person1.sayhi();

// const ageCall = {
//     ageSelf() {
//         console.log('My age is ' + this.age);
//     }
// };

// Object.assign(Person.prototypeof(), ageCall);

// person1.ageSelf();


let person4 = Object.create(person1);

person1.inf();
person4.inf();

person1.name = 'Dan';

person1.inf();
person4.inf();

