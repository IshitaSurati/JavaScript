console.log("-----Using 3rd Variable-----");
let num1=20 , num2=30;
console.log(`Before swap ${num1} ${num2}`);
let num3;
num3=num1;
num1=num2;
num2=num3;
console.log(`After swap ${num1} ${num2}`);

console.log("-----Without 3rd Variable-----");
 let a=10,b=20;
 console.log(`Before swap ${a} ${b}`);
a=a+b;
b=a-b;
a=a-b;
console.log(`After swap ${a} ${b}`);