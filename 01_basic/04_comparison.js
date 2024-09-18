// comparison in different data types
// console.log("02">1); // converts string to number and then compares
// console.log("2">1);

// The reason is that an quality checks == and comparisons >,<,>=,<= works differently. 
//Comparisons convert null to a number , treating it as  0,Thats why(3) null>=0 is true and (1) null>0 is false;

// console.log(null>0);
// console.log(null==0);  -> we should avoid these type of conversions
// console.log(null>=0);

// console.log(undefined==0);


// === Strict Check- also checks the data type also
console.log("2"===1);
console.log(2===2);


