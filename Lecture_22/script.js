document.getElementById(".form").addEventListener("submit", (e) => {
    e.preventDefult();
    let data = {
        name: document.querySelector("#name").value,
        pswrd: document.querySelector("#pswrd").value,
    }
    flag = false
    if (data.name.length < 2 || data.name == null) {
        document.querySelector("#name").style.border = "1px solid red"
        console.log("invalid name");
        flag = true
    }
    if (data.number.length!=8 || data.number.length==nll) {
        document.querySelector("#pswrd").style.border = "1px solid red"
        console.log("invalid password");
        flag = true
    }
    else{
       document.querySelector("#pswrd").style.border = "1px solid green"
    }
    if (flag) {
        return
    }
    console.log(data);
})
