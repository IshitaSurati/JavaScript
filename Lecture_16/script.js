//step 1: create array 
let students = []
//step 2: create function to display UI 
const Display = () => {
    document.getElementById("studentList").innerHTML = ""
    for (let i = 0; i < students.length; i++) {
        //tag create
        let name = document.createElement("h1")
        name.innerHTML = students[i].name
        document.getElementById("studentList").append(name)
    }
}
//step 3: create function to handle form
const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        grid: document.getElementById('Grid').value,
        course: document.getElementById('course').value
    }
    students.push(data) //push object(data) in array(students)
    Display() //call function(Display)
}

//step 4:
document.getElementById("studentData").addEventListener("submit", handleStudentData)