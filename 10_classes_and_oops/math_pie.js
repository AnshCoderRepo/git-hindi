const desc=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);
Math.PI=5
console.log(Math.PI);
console.log(desc);
//Object.create(null)// Create a object

const chai={
    name:'giner tea',
    price:5,
    isAvaliale:true,
    orderchai: function(){
       console.log("Unavble  to make tea");
       
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name")); // fnd code description


Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for(let[key,value] of Object.entries(chai)){//  to iterate in a non ennumerable object
if(typeof value!== 'function'){
console.log(`${key}:${value}`);

}
}