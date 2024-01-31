// Arrays and Array Methods

// Creating an Array
let superhero = ["SpiderGwen", "Dr Strange", "Hulk", "Ironman", "Harley Quinn"];

console.log('Hero 1:', superhero[0]);
console.log('Hero 4:', superhero[3]);
console.log('Last hero:',superhero[superhero.length-1]);

// Modifying array elements
superhero[1] = 'Wonder woman';
console.log(superhero);

superhero.push('Batman');
console.log(superhero);

superhero.pop();
console.log(superhero);

// Array Iteration
for (let i = 0; i < superhero.length; i++) {
    console.log('This hero is ', superhero[i]);
}

superhero.forEach(function(hero) {
    console.log(hero)
});

// length
console.log('Arrey length:', superhero.length);

// indexOf
console.log('Index of a value:', superhero.indexOf('Hulk'));

// includes
console.log("Includes a value:", superhero.includes('Batman'));

// join
console.log("Joined array:", superhero.join(' | '));

// slice
let sliceArray = superhero.slice(1,4);
console.log('Slice array:', sliceArray);

// splice
console.log(superhero);
let removedElements = superhero.splice(2, 3);

console.log('Removed Elements:', removedElements)
console.log(superhero);