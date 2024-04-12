class Employee5 {
    name: string
    protected company: string
    private phone: string
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printfInfo():void {
        console.log(this.name+" "+this.company+" "+this.phone);
    }
    getPhone():string { return this.phone; }
    }
    class Manager1 extends Employee5{
        teamSize: number
        constructor(name: string, company: string, phone: string, teamSize: number) {
            super(name, company, phone);
            this.teamSize = teamSize;
        }
        printInfo(): void {
            console.log(this.name + ": " + this.company + " "  + this.getPhone()+ " " + this.teamSize);
        }
    }