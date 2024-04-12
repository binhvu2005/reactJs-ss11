class Person{
    name:string
    constructor(name:string ){
        this.name=name
    }
    displayInfo():void{
        console.log(this.name)
    }
}
class Student extends Person{
    id:number
    constructor(name:string,id:number){
        super(name)
        this.id=id
    }
    displayInfo(): void {
        super.displayInfo()
        console.log(this.id);
    }
}