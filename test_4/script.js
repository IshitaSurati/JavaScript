class BankAccount{
    constructor(Uname,Acnumber,DepositAmount){
        this.Acnumber=Acnumber
        this.Uname=Uname
        this.DepositAmount
    }
}
const Display=()=>{
    document.getElementById('tbody').innerHTML = "";
    BankAccount.map((ele, index) => { 
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.AcNo;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.username;
        let td3 = document.createElement('td');
        let DepositButton = document.createElement('button'); 
       DepositButton.textContent = "Deposit"; 
       DepositButton.addEventListener("click", () => { 
          CutAmount(index); 
        });
        td3.appendChild(DepositButton);
        tr.append(td1, td2, td3); 
        document.getElementById("tbody").appendChild(tr);
    });
}

document.querySelector(".form").addEventListener("submit",(e)=>{
    e.preventDefualt();
   let data={
        Acnumber:document.querySelector("#AcNo").value,
        Uname:document.querySelector("#username").value,
        DepositAmount:document.querySelector("#amount").value
    }
   BankAccount.push(data) 
   Display()

})

document.getElementById("amount").addEventListener("click",CutAmount=()=>{

}); 