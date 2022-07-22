const fs = require("fs");

// This is the read async function

// fs.readFile("data.txt", "utf-8", (err, dat) => {
//   if (err) {
//     console.log("Error Occured");
//   } else {
//     console.log(dat);
//   }
// });

// write

fs.readFile("data.txt", "utf-8", (err, dat) => {
  if (err) {
    console.log("Error Occured");
  } else {
    fs.writeFile(
      "data1.txt",
      "This is second file created",
      (err) => {
        if (err) {
          console.log("Unable to Write");
        }
      }
    );
  }
  console.log("inside the func");
});
console.log("hello");
