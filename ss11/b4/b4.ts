class Vehicle {
    name: string;
    speed: number;
    id:number;
    constructor(name: string, speed: number, id:number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed: number):number { return this.speed - speed; }
    speenUp(speed: number):number { return this.speed+speed; }
    showSpeed(): void { console.log(this.speed); }
    
}
class Bicycles extends Vehicle {
    gear: number;
    constructor(name: string, speed: number, gear: number, id:number) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let Bicycles1= new Bicycles("xe máy",12,1,2);
Bicycles1.showSpeed()