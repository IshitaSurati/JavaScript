let employees = [];

const displayEmployees = () => {
    let tableBody = document.getElementById('TableBody');
    tableBody.innerHTML = "";
    let totalSalary = 0;

    employees.map((emp, index) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = emp.name;
        let td2 = document.createElement('td');
        td2.textContent = emp.jobrole;
        let td3 = document.createElement('td');
        td3.textContent = emp.department;
        let td4 = document.createElement('td');
        td4.textContent = emp.salary;
        let td5 = document.createElement('td');
        td5.textContent = emp.contactemail;
        let td6 = document.createElement('td');
        td6.textContent = emp.workexperience;
        let td7 = document.createElement('td');
        td7.textContent = emp.workexperience > 5 ? "Senior" : "Junior";
        let td8 = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn"); 
        deleteButton.addEventListener("click", () => deleteEmployee(index));
        td8.append(deleteButton);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tableBody.append(tr);
    });
    count();
    calculateTotalSalary()
};

const addEmployee = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        jobrole: document.getElementById('jobrole').value,
        department: document.getElementById('department').value,
        salary: document.getElementById('salary').value,
        contactemail: document.getElementById('contactemail').value,
        workexperience: document.getElementById('workexperience').value,
    };

    employees.push(data);
    displayEmployees();
};

const deleteEmployee = (index) => {
    employees.splice(index, 1);
    displayEmployees();
};

const deleteAllEmployees = () => {
    employees = [];
    displayEmployees();
};

const count = () => {
    document.getElementById('totalEmployees').textContent = employees.length;
    document.getElementById('totalSalary').textContent = calculateTotalSalary();
};
const calculateTotalSalary = () => {
    let totalSalary = 0;
    employees.map(emp => {
        totalSalary += +emp.salary; 
    });
    return totalSalary;
};

document.getElementById('employeeForm').addEventListener('submit', addEmployee);
document.getElementById('deleteAll').addEventListener('click', deleteAllEmployees);
