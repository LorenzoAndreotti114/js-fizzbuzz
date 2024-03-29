const maxNumber = 100;

let currentNumber = 0;

for (let x = 1; x <= maxNumber; x++) {


    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + " FizzBuzz")
        document.getElementById("inner").innerHTML += `<div class="card-3-5" id="nCard"> FizzBuzz <div>`;
    }
    else if (x % 3 === 0) {
        console.log(x + "Fizz");
        document.getElementById("inner").innerHTML += `<div class="card-3" id="nCard"> Fizz <div>`;
    }
    else if (x % 5 == 0) {
        console.log(x + "Buzz");
        document.getElementById("inner").innerHTML += `<div class="card-5" id="nCard"> Buzz <div>`;
    }
    else {
        console.log(x + "normal");
        document.getElementById("inner").innerHTML += `<div class="card" id="nCard"> ${x} <div>`;
    }

};

