// Stack (Primitive), Heap (Non-Primitive)
let myName = "John";
let anotherName = myName;
anotherName = "John Doe";
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
    eligibleVote : function () {
        console.log(`${this.email} is eligible to vote`);
    }
}

let userTwo = userOne;
userTwo.email = "user@yahoo.com";
userTwo.eligibleVote = function () {
    console.log(`${this.email} is not eligible to vote`);
}
console.log(userOne.email);
console.log(userTwo.email);

userOne.eligibleVote();
userTwo.eligibleVote();

_.cloneDeep(userOne);



