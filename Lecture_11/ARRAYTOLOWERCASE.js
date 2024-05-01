let array=["RED","AND","WHITE"]
const print = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log("Befor:\n");
print(array)

const upp=(array)=>{
    for (let i = 0; i < array.length; i++) {
        if (i%2==0) {
            console.log(array[i]);
        } else {
            console.log(array[i].toLowerCase());
        }
        
    }
}

console.log("\nAfter:\n");
upp(array)