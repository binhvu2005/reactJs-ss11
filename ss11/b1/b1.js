"use strict";
class Employee3 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone11 = phone;
    }
    printfInfo() {
        console.log(this.name + " " + this.company + " " + this.phone11);
    }
}
class Manager extends Employee3 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
