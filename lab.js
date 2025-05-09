// function log(str, ms) {
//   setTimeout(() => {
//     console.log(str);
//     setTimeout(() => {
//       console.log(str);
//       setTimeout(() => {
//         console.log(str);
//         setTimeout(() => {
//           console.log(str);
//         }, ms);
//       }, ms);
//     }, ms);
//   }, ms);
// }
// log("A", 1000);

function log(ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
}

// log(1000, () => {
//   console.log("A");
//   log(1000, () => {
//     console.log("B");
//     log(1000, () => {
//       console.log("C");
//     });
//   });
// });

// console.log(String.fromCharCode(65)); // A

for (let i = 65; i <= 65 + 26; i++) {
  log(1000 * (i - 65), () => {
    console.log(String.fromCharCode(i));
  });
}
