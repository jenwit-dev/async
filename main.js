function a() {
  console.log("a run");
}

function b() {
  console.log("b run");
  a();
}

function c() {
  console.log("c run");
  b();
}

c();

function a() {
  console.log("a");
}

function b() {
  setTimeout(() => {
    for (let i = 0; i < 10000000; i++) {}
    console.log("b");
  }, 0);
}

function c() {
  console.log("c");
}

a();
b();
c();

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
