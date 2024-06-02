/* Encapsulation is the concept of bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class.
   It restricts direct access to some of the object's components, which is a way of preventing accidental interference and misuse of the data.
*/
// Public:-

class BankAccount {
    constructor(acNo, username, num, amount) {
        this.acNo = acNo;
        this.username = username;
        this.num = num;
        this.amount = amount;
    }
}

let ac = new BankAccount("123", "ISHU", "768", 0);
console.log(ac);

// Private:-
class BankAccount2 {
    #username;
    #AcNo;
    #Num;
    #amount;
    
    constructor(acNo, username, num) {
        this.#AcNo = acNo;
        this.#username = username;
        this.#Num = num;
        this.#amount = 0; // Initialize the amount
    }

    getAccountNo() {
        return this.#AcNo;
    }

    setAccountNo(acNo) {
        this.#AcNo = acNo;
    }

    getAmount() {
        return this.#amount;
    }

    setAmount(amount) {
        this.#amount = amount;
    }
     depositAmount(amount){
        if (amount<1) {
            throw new Error("not able")
        }
        else{
            this.#amount += amount
        }
     }

     #canwithdrow(reqAmt){
        if (this.#amount >= reqAmt) {
            true
        } else {
            false
        }
     }
     withdrowAmt(amount){
        if (amount<1) {
            throw new error("greater than 0");
        } else {
            if (this.#canwithdrow(amount)) {
                this.#amount-=amount
                console.log("success");
            } else {
                console.log("not success");
            }
        }
     }
}
let ac3=new BankAccount2("234", "ishita", "4566")
try {
     ac3.depositAmount(10)   
} catch (error) {
   console.log("error",error);
}
console.log(ac3.getAccountNo());

let ac2 = new BankAccount2("234", "ishita", "4566");
console.log(ac2.getAmount()); // 0
ac2.setAmount(500);
console.log(ac2.getAmount()); // 500
console.log(ac2.getAccountNo()); // 234
ac2.setAccountNo("567");
console.log(ac2.getAccountNo()); // 567

