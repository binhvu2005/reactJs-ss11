class Employee3 {
name: string
protected company: string
private phone11: string
constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone11 = phone;
}
printfInfo():void {
    console.log(this.name+" "+this.company+" "+this.phone11);
}

}
class Manager extends Employee3{
    teamSize: number
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
   
}