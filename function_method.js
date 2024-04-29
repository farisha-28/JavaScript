function prac(){
    function countVowels(msg){
        let count = 0;
        for(const char of msg){
            if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
            count++;
        }
        return count;
    }
    document.getElementById("demo").innerHTML= 'Total No of Vowels: '+ countVowels("university of asia pacific");    
}

const arrow = (msg) =>{
    let c = 0;
    for(const char of msg){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        c++;
    }
    return c;

}
console.log('Arrow function: '+ arrow("university of asia pacific"));

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
    return val % 2 === 0;  // val % 2!== 0 // val > 99
});
console.log("Filter array: "+evenArray)

// Reduce function array: perfomrs some operations and reduces the array to a single value. it returns the single value

let red = [1,2,3,4,5];
const output = red.reduce( (res, current) => {
    return res + current;
});
console.log(output);

// Print maximum number using reduce

let maxi = [1,2,3,4,5,100];
const largest = maxi.reduce( (res, current) => {
    return res > current ? res : current;       // is largest ?, then print res, : otherwise print current.
});
console.log("Maximum value: "+largest);

//take a number from user and create an array of numbers from 1 to n.
// and make sum of 

let take = prompt("Enter a number: ");
let natural = [];
for(let i=1; i<=take; i++){
    natural[i-1] = i;
}
console.log("From Prompt Number--- 1 to n: "+ natural);
 