class user{
    constructor(username){
        this.username=username
    }
    LockMe(){
        console.log(`${this.username} createred`);
        
    }
     static createID(){  // restrict to use this moethod for everyone
        return `123`
    }
}
const ansh= new user("Ansh")
console.log(ansh.createID());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }

}

const iphone = new Teacher("Iphone","i@phone.com")
// console.log(iphone.logMe());
console.log(iphone.createID()); // no even access to child

