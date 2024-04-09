// compareBy() function returns function that compares two objects by a property

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

function countDown(fromNumber){
    console.log(fromNumber);
    countDown(fromNumber-1);
}
countDown(3); // it doesnt have any stopping condition, it will exceed maximum stack size

function counting(fromNumber){
    console.log(fromNumber);
    next = fromNumber-1;
    if (next>0){
        counting(next);
    }
}
counting(4);

// sum of 1 to n numbers using recursion
let t = 0;
function summing(number){

  
    if (nxt>1){
        t = t+ summing(number-1)
    }
    
}
summing(10);

// 10 -- 9
