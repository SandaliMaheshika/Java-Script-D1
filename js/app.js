console.log("Hello icet");

//alert("Hello");

// " ; " eka onima na...
console.log("\n\nHi hi hi")

// data type ekk on na js wala...meken okkoma print wenwa
let a = 10;
console.log("\n\n"+a);


let b = "icet";
console.log(b);



// insert karna data eke data type ek balnn gannwa (typeof).
let c = 10;
console.log("\n\n"+typeof c);

// Array
let customer = [];
// customer[0] = "John";
// customer[1] = "Jane";
console.log("\n\n"+typeof customer);



let customer2 = ["John", "Jane",10];
console.log("\n\n"+ customer2);

// obgect
let customer1 = {};



//-------------------------------------------------------
// arricmatic operators (+,-,/,*)

let x = 15;
let y = 10;
let add = x + y ;
console.log(add);

let min = x - y ;
console.log(min);

let mul = x * y ;
console.log(mul);

let div = x / y ;
console.log(div);


// (==) meken data type eka baln na....
let z = 10;
let w = "10";
console.log("\n\n"+(z==w)); // true
console.log(z!=w); // false



// data type eka eqauld baladdi (===) gannwa..........
console.log("\n\n"+(z===w)); // false
console.log(z!==w); // true



// && , || , if else statement
let p = 10;
let q = "20";

if(p==q && q >p){
    console.log("\n\ntrue");
}else{
    console.log("\n\nfalse");
}



if(p==q || q >p){
    console.log("\n\ntrue");
}else{
    console.log("\n\nfalse");
}



let marks = 70;

    if(marks >= 75){
        console.log("\n\nA");
    }else if(marks >= 65){
        console.log("\n\nB");
    }else if(marks >= 55){
        console.log("\n\nC");
    }else if(marks >= 45){
        console.log("\n\nS");
    }else{
        console.log("\n\nFail");
    }


    let unit = 120;

    if(unit <= 50){
        console.log("\n\nBill : " +unit*10);
    }else if(unit <= 100){
        console.log("\n\nBill : " +unit*15);
    }else if(unit > 100){
        console.log("\n\nBill : " +unit*20);
    }


    

