export default abstract class DioAccount {
    name: string
    accountNumber: number
    balance: number = 0;
    private status: boolean = false;
 
    constructor(name: string, accountNumber: number, status: boolean){
       this.name = name,
       this.accountNumber = accountNumber;
       this.status = status;
    }
 
    deposit = () => {
       console.log("Você depositou");
    }
 
    withdraw = () => {
       console.log("Você sacou");
    }
 
    getBalance = () => {
       console.log(this.balance);
    }

    private validadeStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error()
    }
 }
 