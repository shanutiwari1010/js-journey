class User {
  constructor(username) {
    this.username = username;
  }
  LogMe(){
    console.log(`username: ${this.username}`)
  }
  static createID(){
    return `123`
  }
}
const shanu = new User("shanu")
// console.log(shanu.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createID())