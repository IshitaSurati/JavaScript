class BankAccount {
    constructor(Uname, Acnumber, DepositAmount) {
        this.Acnumber = Acnumber;
        this.Uname = Uname;
        this.DepositAmount = DepositAmount;
    }
}

const bankAccounts = [];
const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    bankAccounts.forEach((ele, index) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.Acnumber;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.Uname;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.DepositAmount;
        tr.append(td1, td2, td3);
        document.getElementById("tbody").appendChild(tr);
    });
}

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new BankAccount(
        document.querySelector("#username").value,
        document.querySelector("#AcNo").value,
        document.querySelector("#amount").value
    );
    bankAccounts.push(data);
    Display();
});

const CutAmount = (index, price) => {
    if (bankAccounts[index].DepositAmount >= price) {
        bankAccounts[index].DepositAmount -= price;
        Display();
        alert(`Purchase successful! ${price}.`);
    } else {
        alert('No funds for this purchase.');
    }
};

document.querySelector(".buy-button").addEventListener("click", () => {
    const price = document.querySelector(".price").innerText;
    const accountIndex = 0;
    if (bankAccounts.length > 0) {
        CutAmount(accountIndex, price);
    } else {
        alert('No accounts available.');
    }
});
