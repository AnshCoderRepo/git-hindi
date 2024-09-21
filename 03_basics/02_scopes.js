
//var c=300 // global scoope
let a=200
if(true){ //block scope is from 3 to 7 but not outside
    let a=10
const b=20
// var c=30
console.log('Inner SCope value of  a is',a);

}
console.log(a); // --> not defined error
//console.log(b); //--> not defined error
//console.log(c);  // prints 30.. the scope of var is globally
