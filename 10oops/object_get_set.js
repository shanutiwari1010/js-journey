const User = {
    _email: 'shanu@.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._email = value
    }

}

const tea = Object.create(User)
console.log(tea.email)