// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})
console.log("one");
console.log("two");
function hello() {
  console.log("hello");
}
setTimeout(hello, 2000); // asyn: we set when this function will run(after 2s / 2000ms)

setTimeout(() => {
  console.log("api", 4000); //asynchronus
});
console.log("three");
console.log("four");

// callback function



//fetch api





