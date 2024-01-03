var friends=['Tauqeer','Udhaya','Sai','Bhuvi'];

var newFriends=new Array('Gayathri','Keerthi','Noor','Yogesh')
console.log(friends[0]); // 
console.log(newFriends[1]);
console.log(friends[friends.length]) // 0,1,2,3, 4

console.log(friends.length)

for(var i=0;i<friends.length;i++)
    console.log(friends[i]);

friends[0]='Tauqeer Alam'

console.log(friends)
friends.push("jasdhir")
console.log(friends);

console.log("To String () :: "+friends.toString())

console.log("Join() :: "+friends.join("##"));

var x=friends.pop();

console.log(x)
