// What is a callback function?
// A callback function is a function that is passed as an argument to another function.

// What is Synchronous and Asynchronous code?
// Synchronous stands for events occuring at the same time. In programming, synchronous code is executed line by line and in order.
// Synchronous code is blocking, meaning that the code will wait for a line to finish executing before moving on to the next line.
// Asynchronous stands for events occuring at different times. In programming, asynchronous code is executed out of order and can be executed at the same time.
// Asynchronous code is non-blocking, meaning that the code will not wait for a line to finish executing before moving on to the next line.

// This function gets a user from a database
function getUser(id, callback) {
  // use setTimeout global function to simulate a delay, this runs asynchronously
  // this is simulating a database call
  setTimeout(() => {
    console.log("Reading a user from a database...");
    // once we have our result from the database, we provide it to the callback function
    let user = { id: id, githubUsername: "ShareghYusefi" };
    callback(user);
  }, 3000);
}

console.log("Before");

// a callback takes the result of an asynchronous operation and does something with it
// we call the getUser function to get the user object and pass it to the callback function for processing.
getUser(1, function (user) {
  // processing user object
  console.log("User: ", user);
});

console.log("After");
