
//var c=300 // global scoope
// let a=200
// if(true){ //block scope is from 3 to 7 but not outside
//     let a=10
// const b=20
// // var c=30
// console.log('Inner SCope value of  a is',a);

// }
//console.log(a); // --> not defined error
//console.log(b); //--> not defined error
//console.log(c);  // prints 30.. the scope of var is globally

function one(){
    const username= "Ansh"
    function two(){
        const website="Youtube"
        console.log(username);
        
    }
  //  console.log(website);
    two()
}
//one()

// if(true){
//     const username="Ansh"
//     if(username==="Ansh"){
//         const website="Youtube"
//         console.log(username + website);
        
//     }
//    // console.log(website); --- error 1
    
// }
//console.log(username); -- error 2

// ++++++++++++++++++++++++++Interseting Conecpt ++++++++++++++++++++

console.log(addone(5));
function addone(num){
  return num+1
}

//addone(5)
//addTwo(5) // error  beacause of hosting --> declared plus stored in a variable
 const addTwo=function (num){ // can be called as expression
    return num+2
 }
// addTwo(5)
