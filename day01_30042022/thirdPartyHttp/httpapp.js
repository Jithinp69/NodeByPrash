const http = require("http");
http.get("http://localhost:3050/menu", (res) => {
  let arr = [];
  res.on("data", (arrData) => {
    console.log("Inside the get data");
    arr.push(arrData);
  });
  res.on("end", () => {
    console.log("Inside the end");
    console.log(JSON.parse(Buffer.concat(arr).toString()));
  });
});
