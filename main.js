// function a() {
//   console.log("a run");
// }

// function b() {
//   console.log("b run");
//   a();
// }

// function c() {
//   console.log("c run");
//   b();
// }

// c();

// function a() {
//   console.log("a");
// }

// function b(fn) {
//   setTimeout(() => {
//     for (let i = 0; i < 10000000; i++) {}
//     console.log("b");
//     fn("b output");
//     // return "b output";
//   }, 0);
// }

// function c() {
//   console.log("c");
// }

// function d(input) {
//   console.log("d output", input);
// }

// If I want the output from aync fn b as a param of fn d (input)
// Add a param as callback fn and call fn in setTimeout and input value to fn
// a();
// b(d); // pass d as callback fn to b
// c();
// d(b()); // d output undefined

// setTimeout(() => {
//   console.log("execute 3");
// }, 2000);
// console.log("before");
// setTimeout(() => {
//   console.log("execute 1");
// }, 0);
// console.log("after");
// setTimeout(() => {
//   console.log("execute 2");
// }, 1000);

// ES Module
// import { readFile } from "fs";

// Common JS
const { readFile } = require("fs");
// readFile("user.jso", { encoding: "utf-8" }, function (err, data) {
//   console.log(err);
//   console.log(data);
// });

// readFile("user.json", "utf-8", function (err1, data1) {
//   // console.log(typeof data);
//   const parsedData1 = JSON.parse(data1);
//   // const str = JSON.stringify({ desc: "Hello" });
//   console.log(parsedData1.firstName);
//   readFile("product.json", "utf-8", function (err2, data2) {
//     const parsedData2 = JSON.parse(data2);
//     console.log(parsedData2.name);
//     console.log(parsedData1.firstName + ":" + parsedData2.name);
//   });
// });

// readFile("user.json", "utf-8", function (err1, data1) {
//   // console.log(typeof data);
//   const parsedData1 = JSON.parse(data1);
//   // const str = JSON.stringify({ desc: "Hello" });
//   console.log(parsedData1.firstName);
// });

// readFile("product.json", "utf-8", function (err2, data2) {
//   const parsedData2 = JSON.parse(data2);
//   console.log(parsedData2.name);
//   // console.log(parsedData1.firstName + ":" + parsedData2.name);
// });

// console.log(parsedData1.firstName + ":" + parsedData2.name);

// function a() {
//   console.log("a");
// }

// function b(age) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       for (let i = 0; i < 10_000_000; i++) {}
//       console.log("b");
//       if (age >= 18) {
//         resolve("success");
//       } else {
//         reject("less than 18");
//       }
//     }, 0);
//   });
//   return promise;
// }

// function c() {
//   console.log("c");
// }

// function d(input) {
//   console.log(input);
// }

// a();
// b(20);
// c();
// d(b(20)); // Promise { <pending> }

// const p = b(20);
// p.then((response) => {
//   console.log(response);
// });

// p.catch((err) => {
//   console.log(err);
// });

// p.then((response) => {
//   console.log(response);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
function readFilePromise(file) {
  const p = new Promise((resolve, reject) => {
    readFile(file, "utf-8", (err, data) => {
      if (data) {
        return resolve(data);
      } else {
        return reject(err);
      }
    });
  });
  return p;
}

// readFilePromise("user.json")
//   .then((response) => {
//     console.log(response);
//     return 555;
//   })
//   .then((response555) => {
//     console.log(response555);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = readFilePromise("user.json");
// const p2 = readFilePromise("product.json");

// const resultPromiseAll = Promise.all([p1, p2]);

// resultPromiseAll
//   .then((response) => {
//     const [resUser, resProduct] = response;
//     console.log(
//       JSON.parse(resUser).firstName + ":" + JSON.parse(resProduct).name
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function run() {}

// const run = async function () {};

const run = async () => {
  try {
    const p1 = await readFilePromise("user.jso");
    const p2 = await readFilePromise("product.json");
    console.log(JSON.parse(p1).firstName + ":" + JSON.parse(p2).name);
  } catch (err) {
    console.log(err);
  }
};
run();
