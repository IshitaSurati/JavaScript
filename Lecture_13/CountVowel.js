let count=0
let str="red and white"
console.log(str);
for (let i = 0; i < str.length; i++) {
    if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") {
        count++;
        
    }
}
console.log(count); 