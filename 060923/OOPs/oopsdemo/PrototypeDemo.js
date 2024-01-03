function User(name,email){
    this.name=name;
    this.email=email
}

User.prototype.logout=function(){
    console.log(this.name ,' logged out')
}

function Admin(...args){
    User.apply(this,args)
}

Admin.prototype=Object.create(User.prototype)

Admin.prototype.deleteUser=function(){
    console.log('Admin deleting User...')
}

var userOne=new User('jasdhir','jasdhir@abc.com');
console.log(`${userOne.name} has an email of ${userOne.email}`)
userOne.logout();

var admin=new Admin("yogesh",'yogesh@gmail.com');
console.log(`${admin.name} has an email of ${admin.email}`)
admin.deleteUser();