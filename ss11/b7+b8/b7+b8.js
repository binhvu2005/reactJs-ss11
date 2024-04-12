"use strict";
class Account {
    constructor(accountNumber, blances) {
        this.accountNumber = accountNumber;
        this.blances = blances;
    }
    deposit(money) { return this.blances + money; }
    withdraw(money) {
        if (this.blances > money)
            return this.blances - money;
        else {
            console.log("k đủ tiền");
            return this.blances;
        }
    }
}
class Savingaccount extends Account {
    constructor(accountNumber, blances, interestRate) {
        super(accountNumber, blances);
        this.interestRate = interestRate;
    }
    calculateInterest() { return this.interestRate = this.blances / 100 * 6; }
    ;
}
class CheckingAccount extends Savingaccount {
    constructor(accountNumber, blances, interestRate, overdraftLimit) {
        super(accountNumber, blances, interestRate);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money) {
        if (money > this.overdraftLimit) {
            console.log("vượt hạn mức");
            return this.overdraftLimit;
        }
        else
            return super.withdraw(money);
    }
}
