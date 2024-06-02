document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let user = {
        // username: document.querySelector("#username").value,
        age: document.querySelector("#age").value,
        pswrd: document.querySelector("#pswrd").value
    }
    flag = false
    // if (user.username.length < 2 || user.username == null) {
    //     document.querySelector("#username").style.border = "1px solid red"
    //     flag = true
    // }
    // else{
    //     document.querySelector("#username").style.border = "1px solid green"
    // }
    if (user.pswrd.length != 10 || user.pswrd == null) {
        document.querySelector("#pswrd").style.border = "1px solid red"
        flag = true
    }
    else {
        document.querySelector("#pswrd").style.border = "1px solid green"
    }
    if (flag) {
        return
    }
})

document.querySelector("#username").addEventListener("keypress", handleform)
const handleform = (e) => {
    if (e.key) {
        username: document.querySelector("#username").value
    }
    if (user.username.length < 2 || user.username == null) {
        document.querySelector("#username").style.border = "1px solid green"
       Input.focus.style.border = "1px solid green"
    }
    else {
        document.querySelector("#username").style.border = "1px solid red"
    }
}