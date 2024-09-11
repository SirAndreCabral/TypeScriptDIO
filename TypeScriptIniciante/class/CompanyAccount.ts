import DioAccount from "./DioAccount";

export default class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean){
       super(name, accountNumber, status)
    }
 
    getLoan = (): void => {
       console.log("Você pegou um empréstimo");
       
    }

    deposit = (): void => {
        console.log("A empresa depositou");
     }
 }
 