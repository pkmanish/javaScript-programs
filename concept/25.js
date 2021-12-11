// then() method is used to access the result when the promise is fulfilled.

// catch() method is used to access the result/error when the promise is rejected.

// In the code below, we are consuming the promise:

sumOfThreeElements(4, 5, 6)
.then(result=> console.log(result))
.catch(error=> console.log(error));
// In the code above, the promise is fulfilled so the then() method gets executed

sumOfThreeElements(7, 0, 33, 41)
.then(result => console.log(result))
.catch(error=> console.log(error));
// In the code above, the promise is rejected hence the catch() method gets executed