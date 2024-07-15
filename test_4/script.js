class BankAccount {
    constructor(username, accountNumber, balance) {
        this.username = username;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class UI {
    constructor() {
        this.bankAccounts = [];
    }

    displayAccounts() {
        const tbody = document.getElementById('tbody');
        tbody.innerHTML = "";
        this.bankAccounts.forEach((account, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${account.accountNumber}</td>
                <td>${account.username}</td>
                <td class="balance" style="display: none;">${account.balance}</td>
                <td class="deposit-amount" style="display: none;"></td>
                <td><button class="show-balance" data-index="${index}">Show Balance</button></td>
            `;
            tbody.appendChild(tr);
        });
    }

    addAccount(username, accountNumber, initialDeposit) {
        const account = new BankAccount(username, accountNumber, initialDeposit);
        this.bankAccounts.push(account);
        this.displayAccounts();
        this.populateAccountOptions();
    }

    toggleBalance(index) {
        const depositTd = document.querySelector(`#tbody tr:nth-child(${index + 1}) .deposit-amount`);
        const balanceTd = document.querySelector(`#tbody tr:nth-child(${index + 1}) .balance`);
        if (depositTd && balanceTd) {
            if (depositTd.textContent) {
                depositTd.textContent = "";
                depositTd.style.display = 'none';
            } else {
                depositTd.textContent = balanceTd.textContent;
                depositTd.style.display = 'table-cell';
            }
        }
    }

    buyProduct(productIndex, price, accountIndex) {
        const account = this.bankAccounts[accountIndex];
        if (account.withdraw(price)) {
            this.displayAccounts();
            alert(`Purchase successful! Balance remaining: ${account.balance}`);
        } else {
            alert('Insufficient funds!');
        }
    }

    populateAccountOptions() {
        const accountSelects = document.querySelectorAll('.account-select');
        accountSelects.forEach((select) => {
            select.innerHTML = '';
            this.bankAccounts.forEach((account, index) => {
                const option = document.createElement('option');
                option.text = `${account.accountNumber} - ${account.username}`;
                option.value = index;
                select.appendChild(option);
            });
        });
    }
}

const ui = new UI();

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const accountNumber = document.querySelector("#AcNo").value;
    const initialDeposit = parseFloat(document.querySelector("#amount").value);
    ui.addAccount(username, accountNumber, initialDeposit);
});

document.getElementById('tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('show-balance')) {
        const index = parseInt(e.target.dataset.index);
        ui.toggleBalance(index);
    }
});

document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", (e) => {
        const price = parseFloat(button.parentElement.querySelector(".price").innerText);
        const accountIndex = parseInt(button.parentElement.querySelector(".account-select").value);
        ui.buyProduct(button.dataset.productIndex, price, accountIndex);
    });
});

ui.populateAccountOptions();
