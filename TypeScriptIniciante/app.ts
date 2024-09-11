import CompanyAccount from "./class/CompanyAccount";
import DioAccount from "./class/DioAccount";
import PeopleAccount from "./class/PeopleAccount";

interface Pessoa {
   nome: string,
   idade: number,
   profissao?: string
}

const pessoa: Pessoa = {
   nome: "André",
   idade: 27,
}

const outraPessoa: Pessoa = {
   nome: "Paulo",
   idade: 25,
   profissao: "Dev"
}

const arrayPessoa: Array<Pessoa> = [
   pessoa,
   outraPessoa
];

const arrayNum: number[] = [
   1, 2, 3
];

const arrayString: Array<string> = [
   "1", "2", "3"
];

const num: number = 15;

if (num > 15) {
   console.log("Num maior que 15");
} else if (num === 15) {
   console.log("Num igual a 15");
} else {
   console.log("Num menor que 15");
}

const typeUser = {
   admin: "Seja bem vindo Admin",
   student: "Você é um estudante",
   viewer: "Voce pode visualizar"
}

function validateUser(user: string){
   console.log(typeUser[user as keyof typeof typeUser]);  
}

const usuario = 'admin';

validateUser(usuario);
validateUser('student');

const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ["a", "b", "c", "d"];

console.log(array[1]);

const stringArrayLength = stringArray.length
console.log({stringArrayLength});
console.log(stringArray[1]);

//add um elemento do final
array.push(1.5);
console.log({array});

//remover um elemento do final
stringArray.pop();
console.log({stringArray});

const buscarElemento = array.find(valorAEncontrar => valorAEncontrar === 2);

console.log({buscarElemento});

array.forEach(elementoArray => {
   if (elementoArray > 2) {
      console.log({elementoArray})
   }
});

array.map(elementoDoArray => console.log({elementoDoArray}));

class User { 
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   showName = () => {
      console.log(this.name, this.age)
   }
}

const userUm = new User("André", 27);
userUm.showName();

const userDois = new User("Paulo", 25);
userDois.showName();

class Admin extends DioAccount{

   constructor(name: string, accountNumber: number, status: boolean){
      super(name, accountNumber, status)
      this.balance = 20;
   }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1,"Andre",1, true);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount("Banco 1", 99, false);
companyAccount.deposit();
