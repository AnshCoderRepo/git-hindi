class user{
    constructor(email,password) {
        this.email=email
        this.password=password
    }
    // get email(){ // getter

    // }
    get password(){ // getter
        //return this._password.toUpperCase() // a getter cannott be defined without a setter
        return `${this._password} Ansh`
    }
    set password(value){
      //this.password=value
      this._password= value.toUpperCase() // create a new varibale for setting it
    }
    get email(){
        return this._email.toUpperCase()
        //return `${this._email}`
    }
    set email(value){
        this._email=value// setters are never retured while getter are returned 
    }
}

const ansh= new user("ansh@gmail.com","q112")
console.log(ansh.password);
console.log(ansh._email);

