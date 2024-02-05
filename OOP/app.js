// Encapsulation
class Shape {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        throw new Error('Method not implemented.');
    }
}

// const shape = new Shape(7, 3);
// console.log(shape.calculateArea());

// Inheritance
class Rectangle extends Shape{
    displayFormula(){
        // return `Width * Height = Area of a Rectangle`;
        console.log( `Width * Height = Area of a Rectangle`);
    }
    calculateArea() {
        // return `${this.width} * ${this.height} = ${this.width * this.height}`;
        console.log(`${this.width} * ${this.height} = ${this.width * this.height}`) ;
    }
}

// const MyRectangle = new Rectangle(1, 3);
// console.log(MyRectangle.displayFormula());

// Polymorphism
const shape1 = new Rectangle(7, 3);
// console.log(shape1.displayFormula());
// console.log(shape1.calculateArea());
shape1.displayFormula();
shape1.calculateArea();