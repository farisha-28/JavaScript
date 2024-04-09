// add all positive numbers -- while loop

let sum = 0;
let e = 0;

while(e >=0){

    //add all positive numbers
    sum += e;
    e = parseInt(prompt('Enter a number: '));
    if (isNaN(e)){
        console.log('You entered a string: ');
        sum = 0; //the value is made 0 again
        continue; //continue skips the current iteration and control flow of the program jumps back to the while condition.
    }

}
console.log(`This is the ${sum}.`);

// switch case statement
let light = "green";
let warning = "";

switch (light) {
    case "red":
        warning = "Stop";
        break;
    case "yellow":
        warning = "Prepare";
        break;
    default:
        warning = "Invalid traffic light color."

}
console.log(warning);

//function

function addition(a,b){
    console.log(a+b);
}
addition(3,4);
addition(4,5);

function add(a,b){
    return a+b;
}
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

let result_1 = addition(num1, num2);
console.log(`This is the result: ${result_1}`);
