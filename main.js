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
