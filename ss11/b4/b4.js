"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed) { return this.speed - speed; }
    speenUp(speed) { return this.speed + speed; }
    showSpeed() { console.log(this.speed); }
}
class Bicycles extends Vehicle {
    constructor(name, speed, gear, id) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let Bicycles1 = new Bicycles("xe máy", 12, 1, 2);
Bicycles1.showSpeed();
