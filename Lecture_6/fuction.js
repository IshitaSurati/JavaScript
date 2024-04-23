// two types to create function
// 1)  using function keyword

function maggiemaker(water,qty,waiting) {
    let pan;
    let pani=water;
    let gas="On";
    let maggie=qty;
    let time=waiting;
    let abkya="kha lenge"
    gas="Gas off"
    console.log(pani+maggie*time);
    console.log(gas);
    console.log(abkya);
}
maggiemaker(1,2,5)


//2)using let or const : generally used const
const maggie=(water,qty,waiting)=>{
    let pan;
    let pani=water;
    let gas="On";
    let maggie=qty;
    let time=waiting;
    let abkya="kha lenge"
    gas="Gas off"
    console.log(pani+maggie*time);
    console.log(gas);
    console.log(abkya);   
}
maggie(2,5,10)