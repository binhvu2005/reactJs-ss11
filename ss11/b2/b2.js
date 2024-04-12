"use strict";
class Employee5 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printfInfo() {
        console.log(this.name + " " + this.company + " " + this.phone);
    }
    getPhone() { return this.phone; }
}
class Manager1 extends Employee5 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(this.name + ": " + this.company + " " + this.getPhone() + " " + this.teamSize);
    }
}
