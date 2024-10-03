//Goal  create a string 
let Myname="Ansh         "
console.log(Myname.truelength);

let myheros=["Thor","Sperderman","Sakitman"]
let heropower={
    thor:"Hammer",
    Sperderman:"Sling",
    Saktiman:"Poee",
    getSpiderPower1:function(){        
    console.log(`Spiderman ${This.Sperderman}`);
    
    }
}
Object.prototype.ansh=function(){
    console.log("Ansh is present");
    
}

myheros.ansh()

//inheritnace

const TEacher={
  makeVideo:true
}
const Tech={
    isAvail:true
}
const TASuport={
    makeassigment:'JS Assigment',
    fulltime:true,
    __proto__:Tech

}

TEacher.__proto__=User
