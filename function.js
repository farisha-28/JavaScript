// compareBy() function returns function that compares two objects by a property
console.log('Compare By function ---');
function compareBy(propertyName){
    return function(a, b){       // camparing two objects 
        let x = a[propertyName], y = b[propertyName];
        if (x>y){
            return 1;
        }
        else if (x<y){
            return -1;
        }
        else{
            return 0;
        }
    }
}
let laptops = [
    {name: 'Lenovo', price: 2000},
    {name: 'dell', price: 1500},
    {name: 'asus', price: 2500},
    {name: 'Acer', price: 2400}
]

console.log('Laptops are sorted by names');
laptops.sort(compareBy('name'));  // laptops.sort(compareBy('price'));
console.table(laptops);

// shorthand of function
let r = function (){
    console.log("anonymous function");
}
let rest = () => console.log("anonymous function");

let ax = function(a, b){
    console.log("anonymous function");
}
let z = (a,b) => console.log("anonymous function");

//pass by valueof reference values
let person = {
    name: 'Smith',
    experience: 4,
  };
function increaseAge(obj) {
    obj.experience += 1;
}
increaseAge(person);
console.log(person);

//recursive function: A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely
//typically used in binary search, algorithms, and data structures
// make a countrdonw function from 3 to 1

// function countDown(fromNumber){
//     console.log(fromNumber);
//     countDown(fromNumber-1);
// }
// countDown(3); // it doesnt have any stopping condition, it will exceed maximum stack size

console.log('Recursion Counting');
function counting(fromNumber){
    console.log(fromNumber);
    next = fromNumber-1;
    if (next>0){
        counting(next);
    }
}
counting(4);

// sum of 1 to n numbers using recursion
// if n<=1                return 1
// return n + sum(n-1)  2 + sum(1)  --- 3
// return n + sum(n-1)  3 + sum(2) --- 6
// return n + sum(n-1)  4 + sum(3) --- 10
// return n + sum(n-1)  5 + sum(4) --- 15

function sum(n){
    if (n <=1){
        return n;
    }
    return n+sum(n-1);
}
let s = sum(10);
console.log('Recursion sum: '+ s);
