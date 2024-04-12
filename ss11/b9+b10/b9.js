"use strict";
class Shape {
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius * Math.PI * 2;
    }
    calculatePerimeter() {
        return this.radius * this.radius * Math.PI * 4;
    }
}
