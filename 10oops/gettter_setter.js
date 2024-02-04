class User{
    constructor(email, password){
       this.email = email
       this.password = password
    }

    get password(){
       return this._password.toUpperCase()
    }
    set password(value){
       this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const shanu = new User("Shanu@ai", "123abs")
console.log(shanu.password);
console.log(shanu.email);
