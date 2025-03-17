counter(); //Hoisting of function

var newApp = "Counter App"; // Hoisted with undefined initially
console.log("Welcome to", newApp);
 


function counter() {
    let count = 0; // count is a private variable of function  counter

    console.log("Starting Counter...");

    function increment() {
        count++; // Increment inherits count from outer function, counter
        console.log("Count:", count);

        if (count % 3 === 0) {
            let message = `Ternary count update! Count is now ${count}`;
            console.log(message); // Block-scoped variable
        }
    }

    function decrement() {
        if (count > 0) {
            count--;
            console.log("Count:", count);
        } else {
            console.log("Count cannot go below zero!");
        }
    }

    for (let i = 0; i < 10; i++) {
        increment();
    }

    decrement();
    decrement();
    increment();
}