class User{
    // name , email
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    login(){
        console.log(this.name, ' logged in ')
    }
}

class Admin extends User{
    addUser(){
        console.log('Admin is adding users...')
    }
}

var userOne=new User('Jasdhir','jasdhir@revature.com');
console.log(`${userOne.name} has an email of ${userOne.email}`)
userOne.login();

var userTwo=new User('Udhaya','udhaya@gmail.com')
console.log(`${userTwo.name} has an email of ${userTwo.email}`)

var admin=new Admin('Noor','noor@gmail.com')
console.log(`${admin.name} has an email of ${admin.email} and is a Admin`)
admin.login()
admin.addUser();
userOne.addUser();
