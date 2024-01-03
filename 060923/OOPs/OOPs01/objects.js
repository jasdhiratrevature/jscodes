class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('jasdhir@abc.com', 'Jasdhir');
var userTwo = new User('ravi@abc.com', 'Ravi');
var admin = new Admin('sunil@abc.com', 'sunil');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);