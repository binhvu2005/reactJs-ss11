class Account {
    protected accountNumber : number
    protected blances: number 
    constructor(accountNumber: number, blances: number,) {
        this.accountNumber = accountNumber
        this.blances = blances
      
    }
    deposit(money: number):number { return this.blances + money }
 withdraw(money: number):number {
    if(this.blances>money) return this.blances - money
    else{
        console.log("k đủ tiền");
        return this.blances 
 }
}
}
class Savingaccount extends Account {
    private interestRate : number;
    constructor(accountNumber: number, blances: number, interestRate: number) {
       super(accountNumber, blances)
       this.interestRate = interestRate
    }
    calculateInterest():number { return this.interestRate=this.blances /100*6};
    }
class CheckingAccount extends Savingaccount {
    private overdraftLimit: number
    constructor(accountNumber: number, blances: number,interestRate:number, overdraftLimit: number) {
        super(accountNumber, blances,interestRate)
        this.overdraftLimit = overdraftLimit
    }
    withdraw(money: number): number {
        if(money>this.overdraftLimit)
            {
                console.log("vượt hạn mức");
                return this.overdraftLimit
            } 
        else
         return super.withdraw(money)
    }
}