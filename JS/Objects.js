// Objects

const person = {
    // Object Properties
    firstName: 'Ann',
    lastName: 'Yu',
    age: 20,
    hobbies: ['reading', 'coding', 'hiking'],

    // Object Methods
    greet: function() {
        console.log('Hi, my name is', this.firstName, this.lastName, 'Nice to meet you.')
    }
};

// Access Object Properties
console.log(person.firstName);
console.log(person.age)
console.log(person.hobbies[0]);

// Modifying Object Properties
person.lastName = 'Smith';
console.log(person.lastName);


// Accessing Object Methods
person.greet();

// Adding new Properties to the Object
person.nationality = 'American';
console.log(person.nationality);

// Adding new Methods to the Object
person.introduce = function(){
    // template literal
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
}
person.introduce();

// Nesting Objects
const address = {
    street: '655 Main St',
    city: 'New York',
    country: 'USA'
};

person.address = address;
console.log(person.address.street)

// Object destructuring
const {firstName, lastName} = person;
console.log(firstName);

const bunny = {
    name: 'Annie',
    color: 'White',
    age: 3,

    hop: function() {
        console.log(`${this.name} is ${this.color}.`)
    },
    eat: function() {
        console.log(`${this.name} is eating a carrot.`)
    }
}

bunny.age ++;
bunny.hop();
bunny.eat();