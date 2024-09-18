//# Primitive -> call by vale
/*
=>7 Types
  1. String 
  2. Number 
  3. Boolean
  4. null
  5. undefined
  6. Symbol
  7. BigInt
*/
const score=100
const scores=100.3

const isLoggedIn=false

const temp=null // => object type in typeof

let userEmail;
let name ="ansh"

// Symbols
const id  =Symbol('12334')
const anotherId=Symbol('1234') // if you pass even same value to the symbol it will still give different values in return thats y unique
console.log(id=== anotherId);

const bigNumber=1223234252222222222223n

// #Refernce type -> Directly allocation refernece in the memory 

/*
=> 3 Types
 1. Arrays
 2. Objects
 3. Functions
*/

// Arrays
const heroes=["Sakitiman","Jaat","Dogs"];

// Objects
let myObj={
    name:"ANsh",
    age: 23,

}

//Function
const myfunction=function(){
    console.log("hello");
    
}


// ##########################################################################

// stack(Primitive) and heap memory(Non -Primitive)
/*
stack -copy of the value
heap - reference of the value

*/

// stack  stored
let myYoutubename ="Ansh Gamer"
let anothernam= myYoutubename

anothernam="coding"
console.log(anothernam);
console.log(myYoutubename);

// Heap stored 

let userOne={
    email :"abs@gmaik.com",
    upi:"9089@ybl"
}
let userTwo=userOne
userTwo.email="bhhh@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

