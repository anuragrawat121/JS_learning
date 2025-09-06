// promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value-->

// A promise is one of these states-->
// 1. pending  : initial state , neither fulfilled nor rejected
// 2. fulfilled : meaning that the operation  was completed  successfully
// 3. rejected : meaning that the operation is failed

const promiseOne = new Promise(function (resolve, reject) {
  // do an  async tasks
  //   DB calls, cryptoGraphy, networking
  setTimeout(() => {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// short way to write promise-->
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolve");
});

//how to pass the value using resolve method-->
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Anurag", email: "arwt8947@gmail.com" }); //mostly we pass the object
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// use chaining for getting value from then() method because we cant use variable for the return value -->
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Anurag", password: "pass&word" });
    } else {
      reject("error something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (errorMsg) {
    console.log(errorMsg);
  })
  .finally(function () {
    console.log("Promise is either resolve or rejected");
  });

//  using async await(and try catch) for handling promises-->
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Anurag", password: "pass&word" });
    } else {
      reject("error JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // Convert response into JSON
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// same concept with .then and catch method-->

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
