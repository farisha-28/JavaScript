// takes a string as a argument and return the vowels

function countVowels(msg){
    let count = 0;
    for(const char of msg){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count++;
    }
    return count;
}
console.log('Vowels: '+ countVowels("university of asia pacific"));

const countVow = (msg) =>{
    let count = 0;
    for(const char of msg){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count++;
    }
    return count;

}
console.log('Arrow function: '+ countVow("university of asia pacific"));

// method is a function but method is binded with an array, data structure/ object 
// forEach loop in arrays --- arr.forEach(callbackFunction)
// Higher order function - either take a function as a parameter or return a function as a parameter output
let arr = [2,4,3,1,5];

arr.forEach(function printVal(val, index, arr){
    console.log(val ** 2 , index, arr); //forEach picks every array value and pass to val parameter
})

let arr2 = ["dhaka", "rajshahi", "barisal"];
arr2.forEach((val, index, arr2) => {
    console.log(val.toUpperCase(), index, arr2 ); //forEach picks every array value and pass to val parameter
})

// array map function - very similar to forEach but creates new array.

let nums = [7, 5, 9]
let newArr  = nums.map( (val) => {
    return val ** 3; // val*val*val
});
console.log("Map array " + newArr);

// Filter method to filter some values
let fil = [3,2,1,4,6,7,5,8];
let evenArray = fil.filter( (val) => {
    return val % 2 === 0;  // val % 2!== 0
});
console.log("Filter array: "+evenArray)

// Reduce function array: perfomrs some operations and reduces the array to a single value. it returns the single value
let red = [1,2,3,4,5];
const output = red.reduce( (res, current) => {
    return res + current;
});
console.log(output);
 