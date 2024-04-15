// every method - check if every element is positive
const number = [1, 3, 5, 6, 8];
const allPositive = number.every(function(value){
    return value >= 0;
});
console.log('If all positive -- ' + allPositive);

//some method - check if there's at least an element matches this criteria
const somePositive = number.some(function(value){
    return value >= 0;
});
console.log('If some positive -- ' + somePositive);

//filter an array based on search criteria 
const filtered = number.filter(function(value){
    return value >= 0;
});
console.log('Filter Number -- ' + filtered);
const filt = number.filter(n => n >= 0);
console.log('Filter Number -- ' + filt);

//filer an array based on restaurant opening hours